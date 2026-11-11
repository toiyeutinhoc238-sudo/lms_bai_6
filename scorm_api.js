/**
 * SCORM 1.2 Wrapper & Adapter cho LMS Bài 6 (Tin học 6 - Chuyên đề AI)
 * Bài 6: Dữ liệu cá nhân là tài sản của mỗi con người
 * Hỗ trợ giao tiếp chuẩn SCORM 1.2 an toàn, chống lỗi Cross-Origin / Iframe Security trong trình duyệt.
 */

var scorm = {
    api: null,
    isInitialized: false,

    findAPI: function(win) {
        var findAPITries = 0;
        try {
            while (win) {
                try {
                    if (win.API != null) {
                        return win.API;
                    }
                } catch (errAccess) {
                    // Chặn lỗi SecurityError khi truy cập cross-origin frame trong iframe
                    break;
                }

                findAPITries++;
                if (findAPITries > 10) break;

                try {
                    if (win.parent && win.parent !== win) {
                        win = win.parent;
                    } else {
                        break;
                    }
                } catch (errParent) {
                    // Không thể truy cập frame cha do bảo mật trình duyệt
                    break;
                }
            }
        } catch (e) {
            return null;
        }
        return null;
    },

    getAPI: function() {
        var theAPI = null;
        try {
            theAPI = this.findAPI(window);
        } catch (e) {
            theAPI = null;
        }

        if (!theAPI) {
            try {
                if (window.opener && typeof window.opener !== "undefined") {
                    theAPI = this.findAPI(window.opener);
                }
            } catch (e) {
                theAPI = null;
            }
        }
        return theAPI;
    },

    init: function() {
        try {
            this.api = this.getAPI();
            if (this.api != null) {
                var result = this.api.LMSInitialize("");
                if (result === "true" || result === true) {
                    this.isInitialized = true;
                    try {
                        var status = this.api.LMSGetValue("cmi.core.lesson_status");
                        if (status === "not attempted" || status === "") {
                            this.api.LMSSetValue("cmi.core.lesson_status", "incomplete");
                            this.api.LMSCommit("");
                        }
                    } catch (eStatus) {}
                    console.log("[SCORM 1.2 - Bài 6] LMSInitialize thành công.");
                    return true;
                }
            }
        } catch (err) {
            console.warn("[SCORM 1.2 - Bài 6] Gặp cảnh báo khi kết nối LMS:", err);
        }
        console.log("[SCORM 1.2 - Bài 6] Chạy ở chế độ Standalone / Preview an toàn.");
        return false;
    },

    setScore: function(score, maxScore, minScore) {
        if (!maxScore) maxScore = 100;
        if (!minScore) minScore = 0;
        try {
            if (this.isInitialized && this.api) {
                this.api.LMSSetValue("cmi.core.score.raw", score.toString());
                this.api.LMSSetValue("cmi.core.score.max", maxScore.toString());
                this.api.LMSSetValue("cmi.core.score.min", minScore.toString());
                if (score >= 80) {
                    this.api.LMSSetValue("cmi.core.lesson_status", "passed");
                } else {
                    this.api.LMSSetValue("cmi.core.lesson_status", "completed");
                }
                this.api.LMSCommit("");
                console.log("[SCORM 1.2 - Bài 6] Đã lưu điểm SCORM: " + score);
            }
        } catch (err) {
            console.warn("[SCORM 1.2 - Bài 6] Không thể ghi điểm SCORM:", err);
        }
    },

    complete: function() {
        try {
            if (this.isInitialized && this.api) {
                this.api.LMSSetValue("cmi.core.lesson_status", "completed");
                this.api.LMSCommit("");
                console.log("[SCORM 1.2 - Bài 6] Đã đánh dấu hoàn thành (completed).");
            }
        } catch (err) {
            console.warn("[SCORM 1.2 - Bài 6] Không thể cập nhật trạng thái:", err);
        }
    },

    finish: function() {
        try {
            if (this.isInitialized && this.api) {
                this.api.LMSFinish("");
                this.isInitialized = false;
                console.log("[SCORM 1.2 - Bài 6] LMSFinish thành công.");
            }
        } catch (err) {
            console.warn("[SCORM 1.2 - Bài 6] Không thể hoàn tất SCORM:", err);
        }
    }
};

window.addEventListener("load", function() {
    try {
        scorm.init();
    } catch (e) {}
});

window.addEventListener("unload", function() {
    try {
        scorm.finish();
    } catch (e) {}
});
