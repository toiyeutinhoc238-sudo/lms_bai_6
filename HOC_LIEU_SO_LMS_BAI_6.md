# HỆ THỐNG HỌC LIỆU SỐ TRÊN LMS (DO GIÁO VIÊN THIẾT LẬP)
## BÀI 6: DỮ LIỆU CÁ NHÂN LÀ TÀI SẢN CỦA MỖI CON NGƯỜI
**Môn học:** Tin học 6 — Chuyên đề Trí tuệ Nhân tạo  
**Thời lượng:** 01 tiết học trực tuyến trên LMS (60 phút)  
**Tài liệu tham chiếu:** *Kế hoạch bài dạy Bài 6*, *Nghị định 13/2023/NĐ-CP*, *Luật Trẻ em 2016*, *Tài liệu UNICEF 2021*.

---

### Danh mục tệp học liệu tương tác trong hệ thống:
* [`index.html`](./index.html): Cổng điều hướng trọn bộ học liệu số tích hợp dạy học trực tuyến 100% trên LMS.
* [`hoc_lieu_1_khao_sat.html`](./hoc_lieu_1_khao_sat.html): Khảo sát tình huống trực tuyến nhúng Google Forms và biểu đồ thời gian thực.
* [`hoc_lieu_2_video_scorm.html`](./hoc_lieu_2_video_scorm.html): Video tương tác 3 điểm neo chặn (link YouTube: `https://youtu.be/RNac5ZDIN-g`) tích hợp Trắc nghiệm quyền dữ liệu với cơ chế **Khóa tiên quyết tuyệt đối**.
* [`hoc_lieu_3_gamification_keo_tha.html`](./hoc_lieu_3_gamification_keo_tha.html): Game phân loại kho báu dữ liệu kéo thả tích hợp tính điểm Gradebook.
* [`hoc_lieu_4_dien_dan_rubric.html`](./hoc_lieu_4_dien_dan_rubric.html): Diễn đàn thảo luận kèm bảng chấm điểm Rubric 10 điểm (SpeedGrader).
* [`LMS_Bai6_Interactive_Module.html`](./LMS_Bai6_Interactive_Module.html): Ứng dụng Web HTML5 All-in-One mô phỏng trọn vẹn tiến trình học tập trên LMS.

---

## 1. BẢNG HỎI KHẢO SÁT NHANH (HĐ KHỞI ĐỘNG — 5 PHÚT)
* **Tên hoạt động trên LMS:** Khảo sát tình huống: *"Em có những tài sản số nào?"* (Qua Google Forms)
* **Công cụ thiết lập:** Biểu mẫu trực tuyến **Google Forms** nhúng trực tiếp qua thẻ `<iframe>` trên LMS kết hợp liên kết mở tab mới.
  * **Liên kết Google Forms chính thức:** [https://docs.google.com/forms/d/e/1FAIpQLSdu_Ms_gAXaeezflkU8zBLYFxMbRIjs3rvtsUfSroXKo40p7A/viewform](https://docs.google.com/forms/d/e/1FAIpQLSdu_Ms_gAXaeezflkU8zBLYFxMbRIjs3rvtsUfSroXKo40p7A/viewform)
  * **Đường dẫn nhúng (Embedded URL):** `https://docs.google.com/forms/d/e/1FAIpQLSdu_Ms_gAXaeezflkU8zBLYFxMbRIjs3rvtsUfSroXKo40p7A/viewform?embedded=true`
* **Nội dung tình huống thực tế:**
  > *"Khi dùng ứng dụng bản đồ (Google Maps) để tìm đường đi xe đạp đến nhà một người bạn, ứng dụng chỉ một đường tắt rất gần giúp tiết kiệm 10 phút, nhưng con đường này phải đi xuyên qua một bãi đất trống vắng người và nhiều cỏ dại rậm rạp. **Em sẽ quyết định thế nào?**"*
* **3 Phương án lựa chọn (Khớp 100% biểu mẫu Google Forms):**
  * **A.** Đi theo đường tắt ngay vì Google Maps là ứng dụng thông minh nhất, chỉ đường ngắn nhất là tốt nhất.
  * **B.** Không đi đường tắt; chọn con đường quen thuộc, có đèn đường và đông người qua lại dù xa hơn một chút.
  * **C.** Dừng lại quan sát thực tế và gọi điện hỏi ý kiến bố mẹ hoặc người lớn trước khi quyết định.
* **Cơ chế LMS & Trực quan hóa dữ liệu:**
  * Học sinh hoàn thành gửi biểu mẫu trên Google Forms, sau đó bấm nút *"Tôi đã gửi form & xem biểu đồ của lớp"*.
  * Hệ thống tự động tổng hợp và hiển thị biểu đồ phân bố % ý kiến cả lớp theo thời gian thực (Live Analytics):
    * Lựa chọn A (Tin cậy máy móc): ~15%.
    * Lựa chọn B (Con người tự chủ quyết định an toàn): ~52%.
    * Lựa chọn C (Kiểm chứng thực tế / hỏi người lớn): ~33%.
  * Hiển thị thông điệp dẫn dắt sư phạm tự động của Giáo viên:
    > *"Ứng dụng công nghệ có thể tính toán khoảng cách rất nhanh, nhưng nó không biết đường đi đó có an toàn hay phù hợp với chiếc xe đạp của em hay không. **Hôm nay, chúng ta sẽ học cách tự mình đưa ra quyết định cuối cùng nhé!**"*
  * Điều kiện hoàn thành: Gửi phản hồi $\rightarrow$ Tự động mở khóa Hoạt động 2.

---

## 2. GÓI SCORM VIDEO TƯƠNG TÁC (HĐ 2.1 — 15 PHÚT)
* **Tên hoạt động:** Khám phá *"Dấu chân kỹ thuật số của bạn"* (Your Digital Footprint).
* **Nguồn Video & YouTube:** File video bài giảng chuẩn hóa tích hợp link YouTube chính thức: [https://youtu.be/RNac5ZDIN-g](https://youtu.be/RNac5ZDIN-g).
* **Công cụ:** Gói SCORM 1.2 / HTML5 Video tương tác tích hợp API SCORM (`scorm_api.js`).
* **Cơ chế neo chặn & chống tua (Gatekeeping):** 
  * Khóa hoàn toàn thanh tiến trình (Disable Forward Seeking), không cho phép tua vượt trước nội dung chưa học.
  * Khi video chạm đến mốc thời gian quy định, video tự động tạm dừng (pause) và bật cửa sổ câu hỏi tương tác (checkpoint modal). Học sinh bắt buộc phải trả lời đúng mới được mở khóa xem tiếp.
* **Chi tiết 3 điểm neo chặn chuẩn xác:**
  * **Neo chặn 1 (Giây 0:50):**
    * *Câu hỏi:* Những lượt like, bình luận của em trên không gian mạng được gọi chung là gì?
    * *Đáp án đúng:* **Dấu chân kỹ thuật số** (Digital Footprint).
    * *Căn cứ pháp lý:* Nghị định 13/2023/NĐ-CP (Điều 2 Khoản 3 mục k) - Dữ liệu phản ánh hoạt động, lịch sử hoạt động trên mạng là dữ liệu cá nhân cơ bản.
  * **Neo chặn 2 (Giây 1:40):**
    * *Câu hỏi:* Các công ty công nghệ thu thập dữ liệu này của người dùng để làm gì?
    * *Đáp án đúng:* **Để quảng cáo kiếm tiền** (Phân tích sở thích, xây dựng hồ sơ hành vi người dùng).
    * *Phản hồi giải thích:* Dữ liệu của em chính là tài sản sinh lời cho các nền tảng thương mại số, vì vậy em cần học cách quản lý và bảo vệ.
  * **Neo chặn 3 (Giây 2:25):**
    * *Câu hỏi:* Với trẻ em từ đủ 7 tuổi trở lên, việc xử lý dữ liệu cá nhân cần có sự đồng ý của ai?
    * *Đáp án đúng:* **Cả trẻ em VÀ cha mẹ / người giám hộ hợp pháp.**
    * *Căn cứ pháp lý:* Điều 20 Nghị định 13/2023/NĐ-CP & Luật Trẻ em 2016.
* **Cơ chế Khóa tiên quyết tuyệt đối (Strict Prerequisite):**
  * Học sinh **bắt buộc phải xem 100% video và trả lời đúng cả 3 câu hỏi neo chặn** thì hệ thống mới tự động tháo gỡ ổ khóa `🔒` để cho phép truy cập sang HĐ 2.2.
  * Nếu chưa xem hết video, Tab HĐ 2.2 hiển thị trạng thái `🔒 ĐANG KHÓA (TIÊN QUYẾT: HOÀN THÀNH VIDEO HĐ 2.1)`.
  * *Lưu ý:* Phần Tab Sách học sinh (Tab 3 cũ) đã được tinh giản, loại bỏ hoàn toàn khỏi giao diện theo yêu cầu.

---

## 3. TRẮC NGHIỆM TÌNH HUỐNG PHÁP LÝ TƯƠNG TÁC (HĐ 2.2 — 15 PHÚT)
* **Tên hoạt động:** Khám phá *"Quyền của chủ thể dữ liệu"*.
* **Công cụ:** Module Trắc nghiệm tình huống tương tác (Interactive Scenario Quiz) chuẩn sư phạm hiện đại.
* **Hệ thống Dashboard chỉ số thời gian thực (HUD):**
  * 🛡️ **Mức độ an toàn dữ liệu (Safety):** Tăng từ 30% $\rightarrow$ 100%.
  * ⚖️ **Hiểu biết pháp luật Nghị định 13 (Legal):** Tăng từ 0% $\rightarrow$ 100%.
  * 🏅 **Danh hiệu cấp độ bảo vệ:** Học viên số $\rightarrow$ Trợ lý bảo vệ $\rightarrow$ Chiến binh số $\rightarrow$ Hiệp sĩ dữ liệu.
* **3 Thử thách tình huống thực tế theo Nghị định 13/2023/NĐ-CP:**
  * **Thử thách 1 (Quyền sở hữu & đồng ý):** Cài đặt ứng dụng game online hỏi về quyền quyết định chia sẻ thông tin cá nhân.
    * *Đáp án đúng:* **Chủ thể dữ liệu (Chính bản thân em)**.
    * *Căn cứ:* Khoản 1 & 2 Điều 9 Nghị định 13/2023/NĐ-CP.
  * **Thử thách 2 (Quyền thu hồi & yêu cầu xóa dữ liệu):** Ứng dụng giải trí đòi quyền vị trí GPS và danh bạ bất thường.
    * *Đáp án đúng:* **Quyền rút lại sự đồng ý & yêu cầu ngừng xử lý, xóa dữ liệu cá nhân ngay lập tức**.
    * *Căn cứ:* Khoản 3 & 5 Điều 9 Nghị định 13/2023/NĐ-CP.
  * **Thử thách 3 (Bảo vệ dữ liệu cá nhân trẻ em):** Trang web mạng xã hội/mua sắm thu thập dữ liệu học sinh lớp 6.
    * *Đáp án đúng:* **Phải có sự đồng ý của cả trẻ em VÀ cha mẹ / người giám hộ hợp pháp**.
    * *Căn cứ:* Khoản 1 & 2 Điều 20 Nghị định 13/2023/NĐ-CP & Luật Trẻ em 2016.
* **Cơ chế tương tác & Phản hồi:**
  * Thẻ câu hỏi trắc nghiệm trực quan, dễ thao tác trên cả PC và điện thoại.
  * Lựa chọn đúng: Hiển thị ngay lời khen và điều luật pháp lý trích dẫn.
  * Lựa chọn sai: Hệ thống phân tích rủi ro và cho phép suy nghĩ thử lại.
  * Hoàn thành: Màn hình vinh danh Huy hiệu Hiệp sĩ dữ liệu 🏆, pháo hoa Confetti và ghi nhận SCORM 100/100 điểm.
* **Điều kiện hoàn thành:** Vượt qua cả 3 thử thách $\rightarrow$ Tự động mở khóa Hoạt động 3 (Game Kho báu).

---

## 4. TRÒ CHƠI TƯƠNG TÁC KÉO - THẢ (HĐ 3: LUYỆN TẬP — 10 PHÚT)
* **Tên game:** *"Bảo vệ Kho báu dữ liệu"* (Data Treasure Guard).
* **Công cụ:** Game tương tác HTML5 / Gamification 3.0 Pro tích hợp Gradebook.
* **Thiết kế:** 2 chiếc giỏ phân loại và 10 thẻ thông tin thực tế:
  * **Giỏ 1 — Dữ liệu cá nhân cơ bản (5 thẻ):**
    1. Họ, chữ đệm và tên khai sinh.
    2. Ngày, tháng, năm sinh.
    3. Giới tính.
    4. Số điện thoại cá nhân.
    5. Địa chỉ Email cá nhân.
  * **Giỏ 2 — Dữ liệu cá nhân nhạy cảm (5 thẻ):**
    6. Vị trí định vị GPS thời gian thực.
    7. Tình trạng sức khỏe & Hồ sơ bệnh án.
    8. Dữ liệu sinh trắc học (Vân tay, Nhận diện khuôn mặt FaceID).
    9. Mật khẩu & Tài khoản ngân hàng.
    10. Lịch sử di chuyển, hành trình cá nhân chi tiết.
* **Cơ chế tính điểm & Điều kiện đạt:**
  * Mỗi thẻ đúng = 1 điểm (Thang 10 điểm). Chấm điểm tự động tức thì.
  * **Điểm chuẩn mở khóa:** Học sinh phải đạt tối thiểu **8/10 điểm** mới được qua bước tiếp theo. Cho phép chơi lại không giới hạn lần, hệ thống tự động ghi nhận điểm cao nhất.

---

## 5. DIỄN ĐÀN THẢO LUẬN & BẢNG RUBRIC 10 ĐIỂM (HĐ 4: VẬN DỤNG — 15 PHÚT)
* **Tên hoạt động:** Xử lý tình huống *"Lời mời hấp dẫn"*.
* **Công cụ:** LMS Forum tích hợp công cụ chấm Rubric của Giáo viên (SpeedGrader).
* **Nội dung chủ đề thảo luận:**
  > *"Có một ứng dụng học Toán bằng AI rất hay. Khi em tải về, ứng dụng thông báo: **'Để kích hoạt tài khoản VIP 30 ngày miễn phí, vui lòng cho phép ứng dụng truy cập toàn bộ Danh bạ điện thoại và Vị trí GPS của bạn'**.*  
  >  
  > **Yêu cầu dành cho học sinh:**  
  > 1. Em sẽ đưa ra **QUYẾT ĐỊNH** gì trong tình huống này? Giải thích rõ lý do vì sao?  
  > 2. Nếu hôm qua em đã lỡ tay bấm **'ĐỒNG Ý'**, hôm nay em sẽ làm gì để khắc phục?  
  > 3. Đọc bài viết của ít nhất **01 bạn cùng lớp**, thả tim và viết bình luận nhận xét, góp ý cho bạn."
* **Cài đặt kỹ thuật trên diễn đàn:**
  * Bật chế độ: *"Phải đăng bài trước mới được xem thảo luận của bạn khác"* để kích thích tư duy độc lập.

### Bảng Rubric 10 điểm tích hợp ngầm trên LMS:

| Tiêu chí | Mức Tốt (8 - 10 điểm) | Mức Đạt (5 - 7 điểm) | Cần cố gắng (< 5 điểm) |
| :--- | :--- | :--- | :--- |
| **1. Khả năng giải quyết tình huống** *(6 điểm)* | **(5 - 6 điểm)**<br>Đầy đủ 2 vế:<br>• Dứt khoát **từ chối** cấp quyền vì ứng dụng học Toán không cần đến danh bạ/GPS.<br>• Biết cách khắc phục khi lỡ tay: Vào Cài đặt máy để **rút lại sự đồng ý** (tắt quyền) hoặc xóa ứng dụng. | **(3 - 4 điểm)**<br>Trả lời được 1 trong 2 vế (biết từ chối nhưng không biết cách khắc phục nếu lỡ đồng ý, hoặc ngược lại). | **(0 - 2 điểm)**<br>Đồng ý cấp quyền vô điều kiện vì ham quà khuyến mãi VIP; không nhận thức được rủi ro lộ lọt thông tin. |
| **2. Lập luận dựa trên kiến thức pháp lý** *(2 điểm)* | **(2 điểm)**<br>Sử dụng đúng thuật ngữ: *Dữ liệu cá nhân, Chủ thể dữ liệu, Quyền đồng ý, Quyền rút lại sự đồng ý* (Nghị định 13/2023/NĐ-CP). | **(1 điểm)**<br>Lập luận hợp lý nhưng theo cảm tính cá nhân, chưa dùng đúng từ khóa đã học. | **(0 điểm)**<br>Không đưa ra được căn cứ hoặc lập luận sai lệch. |
| **3. Tương tác & Trách nhiệm số** *(2 điểm)* | **(2 điểm)**<br>Đăng bài đúng hạn, đúng chính tả; có tương tác phản hồi lịch sự, xây dựng với ít nhất 1 bài của bạn bè. | **(1 điểm)**<br>Đăng bài đúng hạn nhưng không tương tác với bạn, hoặc còn mắc lỗi chính tả. | **(0 điểm)**<br>Nộp bài đối phó, sao chép hoặc dùng từ ngữ không phù hợp. |
