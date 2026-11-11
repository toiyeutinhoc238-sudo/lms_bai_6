# BÁO CÁO KẾT QUẢ BÀI TẬP NHÓM A3.4
# THIẾT KẾ VÀ PHÁT TRIỂN BÀI HỌC VỚI HỌC LIỆU SỐ TRÊN HỆ THỐNG LMS
### HỌC PHẦN: ĐÀO TẠO ĐIỆN TỬ VÀ ỨNG DỤNG (COMP1820)
---

* **Môn học**: Tin học 6 (Bộ Giáo dục và Đào tạo)
* **Chuyên đề**: Trí tuệ nhân tạo (AI)
* **Tên bài học**: **BÀI 6: DỮ LIỆU CÁ NHÂN LÀ TÀI SẢN CỦA MỖI CON NGƯỜI**
* **Thời lượng dạy học**: 01 tiết (60 phút trực tuyến 100% trên hệ thống quản lý học tập LMS)
* **Hình thức tổ chức**: Dạy học E-learning hoàn toàn theo mô hình ADDIE
* **Văn bản và tài liệu tham chiếu chính**:
  1. Bộ Giáo dục và Đào tạo (2020), *Công văn số 5512/BGDĐT-GDTrH* về việc xây dựng và tổ chức thực hiện kế hoạch giáo dục của nhà trường.
  2. Chính phủ nước CHXHCN Việt Nam (2023), *Nghị định số 13/2023/NĐ-CP* về Bảo vệ dữ liệu cá nhân (Điều 2, Điều 9, Điều 20).
  3. UNICEF (2021), *Policy Guidance on AI for Children 2.0* (Mục 3.4: Protect children's data and privacy, thúc đẩy data agency).
  4. Clark, R. C., & Mayer, R. E. (2011), *e-Learning and the Science of Instruction: Proven Guidelines for Consumers and Designers of Multimedia Learning* (3rd ed.), Pfeiffer.
  5. Bates, A. W. (2019), *Teaching in a Digital Age: Guidelines for designing teaching and learning* (2nd ed.), Tony Bates Associates Ltd. (Mô hình SECTIONS).
  6. Anderson, L. W., & Krathwohl, D. R. (2001), *A Taxonomy for Learning, Teaching, and Assessing: A Revision of Bloom's Taxonomy of Educational Objectives*, Longman.

---

# MỤC LỤC BÁO CÁO

* **PHẦN 1. NGHIÊN CỨU CƠ SỞ THIẾT KẾ VÀ KHẢO SÁT CÔNG CỤ**
  * 1.1. Học liệu, hoạt động học và loại tri thức
  * 1.2. Học đa phương tiện, tải nhận thức, thiết kế phổ quát cho học tập và khả năng tiếp cận
  * 1.3. Hành trình học tập và hỗ trợ người học trong môi trường E-learning 100%
  * 1.4. Khảo sát và lựa chọn công cụ phát triển học liệu theo khung SECTIONS
* **PHẦN 2. THIẾT KẾ – PHÁT TRIỂN – TRIỂN KHAI BÀI HỌC THEO ADDIE**
  * 2.1. Giai đoạn Phân tích (Analysis)
  * 2.2. Giai đoạn Thiết kế (Design)
  * 2.3. Giai đoạn Phát triển học liệu (Hồ sơ thẻ What – Why – How cho 4 cụm học liệu)
  * 2.4. Giai đoạn Triển khai trên hệ thống quản lý học tập (Implementation)
  * 2.5. Giai đoạn Đánh giá và cải tiến (Evaluation)
* **PHẦN 3. HỒ SƠ BÀN GIAO VÀ TÀI LIỆU THAM KHẢO**
  * 3.1. Danh mục sản phẩm số bàn giao
  * 3.2. Bảng phân công trách nhiệm chuyên môn
  * 3.3. Tuyên bố minh bạch sử dụng trí tuệ nhân tạo
  * 3.4. Danh mục tài liệu tham khảo

---

# PHẦN 1. NGHIÊN CỨU CƠ SỞ THIẾT KẾ VÀ KHẢO SÁT CÔNG CỤ

## 1.1. Học liệu, hoạt động học và loại tri thức

### A. Cơ sở lý luận
1. **Phân biệt Học liệu và Hoạt động học**:
   - *Học liệu (Learning Resources)*: Là các đối tượng mang nội dung thông tin (video, bài giảng, trò chơi kéo thả, bảng hỏi khảo sát).
   - *Hoạt động học (Learning Activities)*: Là chuỗi hành động có chủ đích của người học dưới sự tổ chức, chuyển giao nhiệm vụ của giáo viên. Mỗi hoạt động học chuẩn mực theo Công văn 5512 phải có đủ 4 thành tố: **Mục tiêu $\rightarrow$ Nội dung $\rightarrow$ Sản phẩm $\rightarrow$ Tổ chức thực hiện**.
2. **Bốn loại tri thức theo Anderson & Krathwohl (2001) trong Bài 6**:
   - *Tri thức sự kiện (Factual Knowledge)*: Danh mục các thông tin cá nhân cụ thể (họ tên, ngày sinh, số điện thoại, vị trí GPS, vân tay FaceID, hồ sơ bệnh án).
   - *Tri thức khái niệm (Conceptual Knowledge)*: Định nghĩa Dữ liệu cá nhân cơ bản và Dữ liệu cá nhân nhạy cảm (NĐ 13/2023/NĐ-CP); khái niệm Dấu chân kỹ thuật số; quyền của Chủ thể dữ liệu (Quyền đồng ý, Quyền rút lại sự đồng ý).
   - *Tri thức quy trình (Procedural Knowledge)*: Thao tác kỹ thuật thu hồi quyền truy cập (vào Cài đặt thiết bị > Quản lý quyền > Tắt quyền danh bạ/GPS hoặc gỡ bỏ ứng dụng).
   - *Tri thức siêu nhận thức (Metacognitive Knowledge)*: Nhận thức về giá trị tài sản của dữ liệu cá nhân; tinh thần tự chịu trách nhiệm số khi tương tác công nghệ, không phó mặc cho AI.

### B. Bảng vận dụng cho Bài 6: Mục tiêu – Loại tri thức – Hành động – Chức năng học liệu

| Mục tiêu học tập / YCCĐ | Loại tri thức | Hành động nhận thức của học sinh | Chức năng sư phạm của học liệu số |
| :--- | :--- | :--- | :--- |
| **YCCĐ 6.A3.3**: Giải thích được dữ liệu cá nhân là tài sản; chỉ chủ sở hữu mới có quyền quyết định. | Tri thức khái niệm & sự kiện | - Xem video hoạt hình, trả lời trắc nghiệm neo chặn.<br>- Đọc thẻ vi mô và điền khuyết từ khóa. | - **Học liệu 2 (SCORM Video & Module):** Cung cấp tri thức chuẩn hóa, neo chặn nhận thức tức thì. |
| **NLa (Tư duy lấy con người làm trung tâm)**: Tự chủ ra quyết định, kiểm chứng kết quả do AI gợi ý. | Tri thức siêu nhận thức | - Bình chọn tình huống Google Maps chỉ đường tắt.<br>- Quan sát biểu đồ % lớp và nhận phản hồi. | - **Học liệu 1 (Khảo sát Poll):** Tạo xung đột nhận thức giữa máy tính và con người. |
| **Năng lực đặc thù AI (3)**: Biết bảo vệ quyền riêng tư, phân loại dữ liệu cá nhân cần bảo vệ. | Tri thức khái niệm & phân loại | - Kéo thả phân loại 10 thẻ thông tin vào 2 giỏ Cơ bản và Nhạy cảm. | - **Học liệu 3 (Game Kéo - Thả):** Chấm điểm tự động, luyện tập củng cố nhận diện dữ liệu. |
| **Phẩm chất (5) Trách nhiệm**: Tự chịu trách nhiệm, giải quyết tình huống thực tế, tương tác văn minh. | Tri thức quy trình & siêu nhận thức | - Giải quyết tình huống App Toán đòi danh bạ.<br>- Nêu cách thu hồi quyền và nhận xét bài bạn. | - **Học liệu 4 (Diễn đàn & Rubric):** Đánh giá năng lực giải quyết vấn đề và trách nhiệm số qua Rubric 10đ. |

---

## 1.2. Vận dụng 12 nguyên lý Học đa phương tiện (Clark & Mayer, 2011)
* **Nguyên lý Đa phương tiện (Multimedia):** Kết hợp đồ họa sinh động "Dấu chân cát vs Dấu chân số" với lời thoại giọng đọc truyền cảm.
* **Nguyên lý Phân đoạn (Segmenting):** Phân chia tiết học 60 phút thành 4 chặng: Khởi động (5') $\rightarrow$ Khám phá (30') $\rightarrow$ Luyện tập (10') $\rightarrow$ Vận dụng (15').
* **Nguyên lý Neo chặn tương tác (Interactivity & Pre-training):** Video có điểm dừng bắt buộc trả lời trắc nghiệm tại 0:50 và 1:40, không cho phép tua nhanh.
* **Nguyên lý Phản hồi tức thì (Feedback Principle):** Trò chơi kéo thả và bảng hỏi đều cung cấp phản hồi giải thích khoa học ngay khi học sinh thao tác.

---

# PHẦN 2. THIẾT KẾ – PHÁT TRIỂN – TRIỂN KHAI BÀI HỌC THEO ADDIE

## 2.1. Hồ sơ Thẻ What – Why – How cho 4 Cụm Học Liệu Số

### 1. Học liệu 1: Bảng hỏi khảo sát nhanh (HĐ Khởi động - 5 phút)
* **WHAT (Là gì):** Tình huống Google Maps gợi ý đường tắt vắng vẻ. Học sinh chọn 1 trong 3 phương án và xem biểu đồ phân bố % của lớp.
* **WHY (Tại sao):** Đánh thức nhận thức phản biện: Công nghệ tính toán nhanh nhưng con người mới là chủ thể quyết định sự an toàn.
* **HOW (Như thế nào):** Tệp HTML5 `hoc_lieu_1_khao_sat.html` tích hợp biểu đồ thanh động và thông điệp dẫn dắt sư phạm.

### 2. Học liệu 2: Gói SCORM Video tương tác & Module bài giảng (HĐ 2 - 30 phút)
* **WHAT (Là gì):** Video hoạt hình 2 phút có khóa tua và 2 điểm neo chặn trắc nghiệm (0:50 và 1:40), kèm Module 3 thẻ quyền vi mô và bài tập điền khuyết chốt chặng.
* **WHY (Tại sao):** Đạt YCCĐ 6.A3.3, giải thích bản chất "Dấu chân số" và quyền năng của chủ thể dữ liệu theo Điều 9 Nghị định 13/2023/NĐ-CP.
* **HOW (Như thế nào):** Tệp `hoc_lieu_2_video_scorm.html` tích hợp SCORM 1.2 wrapper (`scorm_api.js`) ghi nhận điểm và trạng thái hoàn thành.

### 3. Học liệu 3: Trò chơi Kéo - Thả "Bảo vệ Kho báu dữ liệu" (HĐ 3 - 10 phút)
* **WHAT (Là gì):** Game kéo thả phân loại 10 thẻ dữ liệu vào 2 giỏ: *Dữ liệu cá nhân cơ bản* và *Dữ liệu cá nhân nhạy cảm*.
* **WHY (Tại sao):** Củng cố nhận diện thông tin nhạy cảm theo Điều 2 Khoản 4 Nghị định 13/2023/NĐ-CP (vị trí GPS, bệnh án, sinh trắc FaceID, tài khoản ngân hàng).
* **HOW (Như thế nào):** Tệp `hoc_lieu_3_gamification_keo_tha.html` phong cách Cyberpunk, âm thanh synth Web Audio, tự động chấm điểm, yêu cầu đạt $\ge 8/10$ điểm để qua môn.

### 4. Học liệu 4: Diễn đàn thảo luận kèm Rubric 10 điểm (HĐ 4 - 15 phút)
* **WHAT (Là gì):** Tình huống ứng dụng giải Toán VIP đòi quyền truy cập Danh bạ và GPS. Học sinh đăng bài giải pháp và tương tác phản hồi bạn học.
* **WHY (Tại sao):** Đánh giá năng lực ra quyết định từ chối chia sẻ dữ liệu dư thừa và thao tác kỹ thuật rút lại sự đồng ý khi lỡ tay.
* **HOW (Như thế nào):** Tệp `hoc_lieu_4_dien_dan_rubric.html` có bộ kiểm tra checklist tự động (cú pháp `[Họ tên - Lớp]`), bài mẫu 10/10 điểm và bảng Rubric tương tác 3 tiêu chí cho Giáo viên chấm điểm.

---

## 2.2. Quy trình Triển khai trên Hệ thống LMS (Implementation)
1. **Khóa liên hoàn tuần tự (Sequential Prerequisites):**
   * HĐ 1 hoàn thành $\rightarrow$ Mở HĐ 2.1 & 2.2 $\rightarrow$ Mở HĐ 3 (Game $\ge 8/10$) $\rightarrow$ Mở HĐ 4 (Diễn đàn & Rubric).
2. **Cấu hình Sổ điểm điện tử (LMS Gradebook):**
   * Hoạt động 3 (Game Kéo thả): Chấm tự động, lấy điểm cao nhất.
   * Hoạt động 4 (Diễn đàn): Giáo viên dùng công cụ SpeedGrader/Rubric chấm 1 chạm thang 10 điểm.

---

# PHẦN 3. HỒ SƠ BÀN GIAO VÀ TÀI LIỆU THAM KHẢO

### 3.1. Danh mục sản phẩm số bàn giao trong Workspace:
1. `index.html`: Cổng trọn bộ học liệu số tích hợp dạy học trực tuyến 100% trên LMS.
2. `hoc_lieu_1_khao_sat.html`: Tệp web độc lập HĐ Khởi động.
3. `hoc_lieu_2_video_scorm.html`: Tệp web độc lập HĐ Hình thành kiến thức (SCORM Video & Module).
4. `hoc_lieu_3_gamification_keo_tha.html`: Tệp web độc lập HĐ Luyện tập (Gamification 3.0 Pro).
5. `hoc_lieu_4_dien_dan_rubric.html`: Tệp web độc lập HĐ Vận dụng (Forum & Rubric 10 điểm).
6. `scorm_api.js`: Adapter chuẩn kết nối SCORM 1.2 với Moodle, Canvas, K12Online.
7. `HOC_LIEU_LMS_BAI_6.md`: Toàn văn tài liệu đặc tả học liệu số.
8. `HUONG_DAN_TRIEN_KHAI_LMS.md`: Cẩm nang kỹ thuật và kịch bản phân cảnh chi tiết.
9. `Sach_Hoc_Sinh_Bai_6.md`: Sách học sinh và phiếu học tập khổ A4.

---

### 3.2. Danh mục tài liệu tham khảo chính thức:
* Chính phủ (2023), *Nghị định số 13/2023/NĐ-CP ngày 17/04/2023 về Bảo vệ dữ liệu cá nhân*.
* Bộ Giáo dục và Đào tạo (2018), *Chương trình Giáo dục phổ thông 2018: Môn Tin học*.
* Bộ Giáo dục và Đào tạo (2020), *Công văn số 5512/BGDĐT-GDTrH*.
* UNICEF (2021), *Policy Guidance on AI for Children 2.0*.
* Clark, R. C., & Mayer, R. E. (2011), *e-Learning and the Science of Instruction*.

