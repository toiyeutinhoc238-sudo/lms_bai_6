const pptxgen = require('c:/Users/BRAVO 15/Downloads/LMS bài 4/node_modules/pptxgenjs');
const path = require('path');

const pres = new pptxgen();

// Layout 16:9 Widescreen (13.33 x 7.5 inches)
pres.layout = 'LAYOUT_16x9';
pres.author = 'Giáo viên Tin học 6';
pres.company = 'Tổ Tin học - Trường THCS';
pres.subject = 'Tin học 6 - Bài 6: Dữ liệu cá nhân là tài sản của mỗi con người';
pres.title = 'Bài 6: Dữ liệu cá nhân là tài sản của mỗi con người';

// Colors (Canva Modern Tech & Privacy Education Palette)
const COLOR_BG = 'F8FAFC';
const COLOR_WHITE = 'FFFFFF';
const COLOR_NAVY = '0F172A';
const COLOR_TEXT = '1E293B';
const COLOR_MUTED = '64748B';
const COLOR_CYAN = '0284C7';
const COLOR_CYAN_BG = 'E0F2FE';
const COLOR_INDIGO = '4338CA';
const COLOR_INDIGO_BG = 'EEF2FF';
const COLOR_GREEN = '059669';
const COLOR_GREEN_BG = 'ECFDF5';
const COLOR_AMBER = 'D97706';
const COLOR_AMBER_BG = 'FFFBEB';
const COLOR_RED = 'DC2626';
const COLOR_RED_BG = 'FEF2F2';
const COLOR_BORDER = 'CBD5E1';

const FONT_TITLE = 'Arial';
const FONT_BODY = 'Arial';

// Helper for top navigation banner
function addTopBanner(slide, category, title, subtitle) {
  // Category Pill
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 0.45, w: 4.6, h: 0.38,
    fill: { color: COLOR_CYAN_BG },
    line: { color: 'BAE6FD', width: 1 },
    rectRadius: 0.19
  });
  slide.addText(category, {
    x: 0.8, y: 0.45, w: 4.6, h: 0.38,
    fontFace: FONT_TITLE, fontSize: 10, bold: true, color: '0369A1', align: 'center', valign: 'middle'
  });

  // Title
  slide.addText(title, {
    x: 0.8, y: 0.9, w: 11.73, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 23, bold: true, color: COLOR_NAVY, valign: 'middle'
  });

  // Subtitle
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.8, y: 1.5, w: 11.73, h: 0.35,
      fontFace: FONT_BODY, fontSize: 12.5, color: COLOR_MUTED, valign: 'top'
    });
  }
}

// Helper for slide footer
function addFooter(slide, slideNum, totalSlides = 7) {
  slide.addText(`TIN HỌC 6 • BÀI 6: DỮ LIỆU CÁ NHÂN LÀ TÀI SẢN CỦA MỖI CON NGƯỜI`, {
    x: 0.8, y: 6.95, w: 8.8, h: 0.3,
    fontFace: FONT_BODY, fontSize: 9.5, color: '94A3B8'
  });
  slide.addText(`Trang ${slideNum} / ${totalSlides}`, {
    x: 10.53, y: 6.95, w: 2.0, h: 0.3,
    fontFace: FONT_BODY, fontSize: 9.5, color: '94A3B8', align: 'right'
  });
}

// ==========================================
// SLIDE 1: COVER
// ==========================================
const s1 = pres.addSlide();
s1.background = { color: '0A0F1D' };

// Accent shapes
s1.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 0.8, w: 4.2, h: 0.45,
  fill: { color: '1E293B' },
  line: { color: '38BDF8', width: 1 },
  rectRadius: 0.22
});
s1.addText('🛡️ TIN HỌC 6 • AN TOÀN & BẢO MẬT SỐ', {
  x: 0.8, y: 0.8, w: 4.2, h: 0.45,
  fontFace: FONT_TITLE, fontSize: 10.5, bold: true, color: '38BDF8', align: 'center', valign: 'middle'
});

s1.addText('BÀI 6: DỮ LIỆU CÁ NHÂN LÀ\nTÀI SẢN CỦA MỖI CON NGƯỜI', {
  x: 0.8, y: 1.55, w: 11.73, h: 2.2,
  fontFace: FONT_TITLE, fontSize: 36, bold: true, color: COLOR_WHITE, valign: 'middle'
});

s1.addText('Mức độ nhận thức: Đánh giá & Ra quyết định (Evaluate) • Dạy học trực tuyến 100% trên LMS (E-Learning)', {
  x: 0.8, y: 3.75, w: 11.73, h: 0.55,
  fontFace: FONT_BODY, fontSize: 15, color: '94A3B8'
});

// Card highlight on cover
s1.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 4.6, w: 11.73, h: 1.9,
  fill: { color: '0F172A' },
  line: { color: '0284C7', width: 1.5 },
  rectRadius: 0.2
});
s1.addText('🎯 YÊU CẦU CẦN ĐẠT CỐT LÕI (YCCĐ 6.A3.3):\n• Nhận biết dữ liệu cá nhân là tài sản của mỗi con người; chỉ chủ sở hữu mới có quyền quyết định việc chia sẻ hoặc cho phép sử dụng dữ liệu đó.\n• Phân biệt được dữ liệu cá nhân cơ bản và nhạy cảm theo Nghị định 13/2023/NĐ-CP.\n• Biết cách bảo vệ quyền riêng tư số, nhận diện các bẫy xin quyền trên không gian mạng.', {
  x: 1.1, y: 4.75, w: 11.13, h: 1.6,
  fontFace: FONT_BODY, fontSize: 13, color: 'E2E8F0', lineSpacingMultiple: 1.25
});

// ==========================================
// SLIDE 2: TIẾN TRÌNH 4 HOẠT ĐỘNG TRÊN LMS
// ==========================================
const s2 = pres.addSlide();
s2.background = { color: COLOR_BG };
addTopBanner(s2, 'CẤU TRÚC TIẾN TRÌNH DẠY HỌC E-LEARNING', 'Tiến Trình 4 Hoạt Động Tuần Tự Trên Hệ Thống LMS', 'Cấu hình luồng học tập mở khóa có điều kiện (Conditional Restrict Access) theo chuẩn Công văn 5512');

const actData = [
  { num: 'HĐ 1 (5p)', title: 'Khởi động', tool: 'Bảng hỏi khảo sát', desc: 'Tình huống Google Maps chỉ đường tắt qua khu đất trống; quan sát biểu đồ ý kiến cả lớp & phản hồi tự động.', bg: COLOR_INDIGO_BG, border: 'C7D2FE', color: '3730A3' },
  { num: 'HĐ 2.1 (15p)', title: 'Hình thành KT 1', tool: 'Gói SCORM Video', desc: 'Video "Dấu chân kỹ thuật số của bạn" với 2 điểm neo chặn tại 0:50 và 1:40 (chặn tua nhanh, bắt buộc trả lời đúng).', bg: COLOR_CYAN_BG, border: 'BAE6FD', color: '0284C7' },
  { num: 'HĐ 2.2 (15p)', title: 'Hình thành KT 2', tool: 'Băng chuyền vi mạch', desc: 'Game Dây chuyền sản xuất Quyền chủ thể dữ liệu (kéo thả chip vi mạch vào kiện hàng đang di chuyển).', bg: COLOR_GREEN_BG, border: 'A7F3D0', color: '065F46' },
  { num: 'HĐ 3 & 4 (25p)', title: 'Luyện tập & Vận dụng', tool: 'Game & Diễn đàn Rubric', desc: 'HĐ 3: Game Cyberpunk phân loại 10 thẻ dữ liệu (chuẩn >=8đ). HĐ 4: Diễn đàn "Lời mời hấp dẫn" + Rubric 10đ.', bg: COLOR_AMBER_BG, border: 'FDE68A', color: '92400E' }
];

actData.forEach((act, idx) => {
  const x = 0.8 + idx * 2.95;
  s2.addShape(pres.ShapeType.roundRect, {
    x: x, y: 2.05, w: 2.8, h: 4.5,
    fill: { color: COLOR_WHITE },
    line: { color: act.border, width: 2 },
    rectRadius: 0.15
  });

  // Badge
  s2.addShape(pres.ShapeType.roundRect, {
    x: x + 0.2, y: 2.25, w: 2.4, h: 0.35,
    fill: { color: act.bg },
    rectRadius: 0.1
  });
  s2.addText(act.num, {
    x: x + 0.2, y: 2.25, w: 2.4, h: 0.35,
    fontFace: FONT_TITLE, fontSize: 10, bold: true, color: act.color, align: 'center', valign: 'middle'
  });

  // Activity title
  s2.addText(act.title, {
    x: x + 0.2, y: 2.7, w: 2.4, h: 0.45,
    fontFace: FONT_TITLE, fontSize: 14, bold: true, color: COLOR_NAVY, align: 'center'
  });

  // Tool tag
  s2.addText(`Công cụ: ${act.tool}`, {
    x: x + 0.2, y: 3.2, w: 2.4, h: 0.35,
    fontFace: FONT_BODY, fontSize: 10, bold: true, color: act.color, align: 'center'
  });

  // Desc
  s2.addText(act.desc, {
    x: x + 0.2, y: 3.65, w: 2.4, h: 2.7,
    fontFace: FONT_BODY, fontSize: 11, color: COLOR_TEXT, lineSpacingMultiple: 1.2
  });
});

addFooter(s2, 2);

// ==========================================
// SLIDE 3: DẤU CHÂN KỸ THUẬT SỐ & KHAI THÁC THƯƠNG MẠI
// ==========================================
const s3 = pres.addSlide();
s3.background = { color: COLOR_BG };
addTopBanner(s3, 'CƠ SỞ KHOA HỌC & ĐẶC TẢ VIDEO SCORM (2:34)', 'Dấu Chân Kỹ Thuật Số & Bản Chất Khai Thác Dữ Liệu', 'Dựa trên báo cáo UNICEF (2021) và nội dung video "Dấu chân kỹ thuật số của bạn"');

// Box Left: Digital Footprint
s3.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 2.05, w: 5.7, h: 4.5,
  fill: { color: COLOR_WHITE },
  line: { color: COLOR_BORDER, width: 1.5 },
  rectRadius: 0.15
});
s3.addText('👣 1. Dấu Chân Kỹ Thuật Số Là Gì?', {
  x: 1.1, y: 2.25, w: 5.1, h: 0.4,
  fontFace: FONT_TITLE, fontSize: 14, bold: true, color: COLOR_CYAN
});
s3.addText('• Định nghĩa cốt lõi (Neo chặn 1 - 0:50):\nDấu chân kỹ thuật số (Digital Footprint) là toàn bộ dấu vết thông tin mà em để lại trên không gian mạng: lượt thích, bình luận, video đã xem, địa điểm check-in, lịch sử tìm kiếm.\n\n• Tính chất vĩnh viễn & Rủi ro:\nDữ liệu một khi đã tải lên mạng rất khó xóa bỏ hoàn toàn. Nó có thể được sao lưu, phân tán và theo em suốt quá trình trưởng thành, học tập và xin việc trong tương lai.\n\n• Nguyên tắc chủ động:\nChỉ chia sẻ những gì em sẵn sàng cho cả thế giới nhìn thấy!', {
  x: 1.1, y: 2.75, w: 5.1, h: 3.5,
  fontFace: FONT_BODY, fontSize: 11.5, color: COLOR_TEXT, lineSpacingMultiple: 1.25
});

// Box Right: Commercialization
s3.addShape(pres.ShapeType.roundRect, {
  x: 6.8, y: 2.05, w: 5.7, h: 4.5,
  fill: { color: COLOR_CYAN_BG },
  line: { color: 'BAE6FD', width: 1.5 },
  rectRadius: 0.15
});
s3.addText('💰 2. Doanh Nghiệp Công Nghệ Thu Thập Để Làm Gì?', {
  x: 7.1, y: 2.25, w: 5.1, h: 0.4,
  fontFace: FONT_TITLE, fontSize: 14, bold: true, color: '0369A1'
});
s3.addText('• Mục đích thực tế (Neo chặn 2 - 1:40):\nCác nền tảng không thu thập dữ liệu "cho vui" hay chỉ để lưu kho. Dữ liệu là "mỏ dầu mới" được AI phân tích để:\n  - Xây dựng hồ sơ hành vi người dùng (Profiling).\n  - Huấn luyện thuật toán gợi ý giữ chân người dùng.\n  - Bán quảng cáo cá nhân hóa siêu trúng đích để kiếm lợi nhuận khổng lồ.\n\n• Nhận thức của học sinh:\n"Khi một dịch vụ trực tuyến là miễn phí, chính dữ liệu cá nhân của em là món hàng được đem bán!"', {
  x: 7.1, y: 2.75, w: 5.1, h: 3.5,
  fontFace: FONT_BODY, fontSize: 11.5, color: '0C4A6E', lineSpacingMultiple: 1.25
});

addFooter(s3, 3);

// ==========================================
// SLIDE 4: PHÂN LOẠI DỮ LIỆU CÁ NHÂN THEO PHÁP LUẬT
// ==========================================
const s4 = pres.addSlide();
s4.background = { color: COLOR_BG };
addTopBanner(s4, 'CĂN CỨ PHÁP LÝ • NGHỊ ĐỊNH 13/2023/NĐ-CP (ĐIỀU 2)', 'Phân Biệt Dữ Liệu Cá Nhân Cơ Bản & Dữ Liệu Cá Nhân Nhạy Cảm', 'Cơ sở lý thuyết của Game tương tác Kéo - Thả "Bảo vệ Kho báu dữ liệu" (HĐ 3)');

// Card Left: Dữ liệu cơ bản
s4.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 2.05, w: 5.7, h: 4.5,
  fill: { color: COLOR_GREEN_BG },
  line: { color: 'A7F3D0', width: 2 },
  rectRadius: 0.15
});
s4.addText('📂 DỮ LIỆU CÁ NHÂN CƠ BẢN (Khoản 3 Điều 2)', {
  x: 1.1, y: 2.25, w: 5.1, h: 0.4,
  fontFace: FONT_TITLE, fontSize: 13.5, bold: true, color: '065F46'
});
s4.addText('Là dữ liệu gắn với con người cụ thể nhưng mang tính nhận diện thông thường:\n\n• Họ, chữ đệm và tên khai sinh\n• Ngày, tháng, năm sinh\n• Giới tính\n• Nơi sinh, quê quán, địa chỉ thường trú\n• Quốc tịch, ảnh chụp chân dung\n• Số điện thoại liên lạc cá nhân\n• Địa chỉ thư điện tử (email)\n• Học vấn, trình độ lớp học', {
  x: 1.1, y: 2.75, w: 5.1, h: 3.5,
  fontFace: FONT_BODY, fontSize: 11.5, color: COLOR_TEXT, lineSpacingMultiple: 1.25
});

// Card Right: Dữ liệu nhạy cảm
s4.addShape(pres.ShapeType.roundRect, {
  x: 6.8, y: 2.05, w: 5.7, h: 4.5,
  fill: { color: COLOR_RED_BG },
  line: { color: 'FECACA', width: 2 },
  rectRadius: 0.15
});
s4.addText('🚨 DỮ LIỆU CÁ NHÂN NHẠY CẢM (Khoản 4 Điều 2)', {
  x: 7.1, y: 2.25, w: 5.1, h: 0.4,
  fontFace: FONT_TITLE, fontSize: 13.5, bold: true, color: '991B1B'
});
s4.addText('Nếu bị xâm phạm sẽ ảnh hưởng trực tiếp đến quyền riêng tư, an toàn tính mạng & tài sản:\n\n• Dữ liệu định vị vị trí cá nhân thời gian thực (GPS)\n• Thông tin tài khoản ngân hàng, mật khẩu số\n• Dữ liệu sinh trắc học (vân tay, mống mắt, FaceID)\n• Thông tin bệnh án, sức khỏe đời tư\n• Tin nhắn bí mật, nhật ký cuộc gọi\n• Dữ liệu trẻ em dưới 16 tuổi (Điều 20: Bắt buộc có sự đồng ý của trẻ em >=7 tuổi & cha mẹ/người giám hộ)', {
  x: 7.1, y: 2.75, w: 5.1, h: 3.5,
  fontFace: FONT_BODY, fontSize: 11.5, color: COLOR_TEXT, lineSpacingMultiple: 1.25
});

addFooter(s4, 4);

// ==========================================
// SLIDE 5: QUYỀN CỦA CHỦ THỂ DỮ LIỆU
// ==========================================
const s5 = pres.addSlide();
s5.background = { color: COLOR_BG };
addTopBanner(s5, 'CƠ CHẾ PHÁP LÝ & AN TOÀN SỐ • ĐIỀU 9 NGHỊ ĐỊNH 13', 'Quyền Của Chủ Thể Dữ Liệu (Học Sinh & Người Dùng Số)', 'Học sinh hiểu rõ vị thế của mình là Chủ sở hữu tài sản dữ liệu, không thụ động chấp nhận');

const rights = [
  { icon: '👑', title: '1. Chủ thể dữ liệu', desc: 'Em là người tạo ra dữ liệu, chính là CHỦ SỞ HỮU hợp pháp. Dữ liệu gắn liền với em, không ai có quyền tự tiện chiếm đoạt.' },
  { icon: '✅', title: '2. Quyền Đồng ý', desc: 'Chỉ em (và cha mẹ/người giám hộ) mới có quyền cho phép ứng dụng truy cập và sử dụng thông tin của mình hay không.' },
  { icon: '🛑', title: '3. Quyền Rút lại đồng ý', desc: 'Đã từng bấm "Đồng ý", em vẫn có toàn quyền Rút lại bất cứ lúc nào qua Cài đặt thiết bị để tắt quyền hoặc xóa app!' },
  { icon: '🗑️', title: '4. Quyền Yêu cầu xóa', desc: 'Khi ngừng sử dụng dịch vụ, em có quyền yêu cầu nhà mạng/nhà cung cấp nền tảng xóa vĩnh viễn mọi dữ liệu cá nhân của mình.' }
];

rights.forEach((item, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = 0.8 + col * 5.95;
  const y = 2.05 + row * 2.25;

  s5.addShape(pres.ShapeType.roundRect, {
    x: x, y: y, w: 5.75, h: 2.05,
    fill: { color: COLOR_WHITE },
    line: { color: COLOR_BORDER, width: 1.5 },
    rectRadius: 0.12
  });

  s5.addText(`${item.icon} ${item.title}`, {
    x: x + 0.3, y: y + 0.25, w: 5.15, h: 0.35,
    fontFace: FONT_TITLE, fontSize: 13.5, bold: true, color: COLOR_INDIGO
  });

  s5.addText(item.desc, {
    x: x + 0.3, y: y + 0.65, w: 5.15, h: 1.25,
    fontFace: FONT_BODY, fontSize: 11.5, color: COLOR_TEXT, lineSpacingMultiple: 1.2
  });
});

addFooter(s5, 5);

// ==========================================
// SLIDE 6: TÌNH HUỐNG THẢO LUẬN "LỜI MỜI HẤP DẪN"
// ==========================================
const s6 = pres.addSlide();
s6.background = { color: COLOR_BG };
addTopBanner(s6, 'HỌC LIỆU 4: VẬN DỤNG & ĐÁNH GIÁ NĂNG LỰC SỐ', 'Tình Huống Thảo Luận: "Lời Mời Hấp Dẫn" Của Ứng Dụng VIP', 'Bài tập thực tế rèn luyện kỹ năng nhận diện cạm bẫy xin quyền trên thiết bị di động');

// Scenario Card Left
s6.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 2.05, w: 5.7, h: 4.5,
  fill: { color: COLOR_AMBER_BG },
  line: { color: 'FDE68A', width: 2 },
  rectRadius: 0.15
});
s6.addText('📱 Tình Huống Giả Định Thực Tế', {
  x: 1.1, y: 2.25, w: 5.1, h: 0.4,
  fontFace: FONT_TITLE, fontSize: 14, bold: true, color: '92400E'
});
s6.addText('Học sinh cài đặt một ứng dụng "Giải Toán Siêu Tốc VIP" được quảng cáo miễn phí 100% trên mạng xã hội.\n\nTuy nhiên, ngay khi mở app, hệ thống hiện thông báo bắt buộc:\n👉 "Yêu cầu cấp quyền truy cập TOÀN BỘ DANH BẠ ĐIỆN THOẠI và VỊ TRÍ GPS CHÍNH XÁC của thiết bị để tiếp tục sử dụng."\n\n❓ CÂU HỎI RA QUYẾT ĐỊNH CHO HỌC SINH:\n1. Em có nên nhấn "Cho phép tất cả" hay không? Tại sao?\n2. App giải toán có thực sự cần Danh bạ và GPS hay không?\n3. Hậu quả gì xảy ra nếu gia đình em bị lộ danh bạ?', {
  x: 1.1, y: 2.75, w: 5.1, h: 3.5,
  fontFace: FONT_BODY, fontSize: 11, color: COLOR_TEXT, lineSpacingMultiple: 1.25
});

// Solution Card Right
s6.addShape(pres.ShapeType.roundRect, {
  x: 6.8, y: 2.05, w: 5.7, h: 4.5,
  fill: { color: COLOR_WHITE },
  line: { color: 'A7F3D0', width: 2 },
  rectRadius: 0.15
});
s6.addText('💡 Khuyến Nghị Hành Động 3 Bước', {
  x: 7.1, y: 2.25, w: 5.1, h: 0.4,
  fontFace: FONT_TITLE, fontSize: 14, bold: true, color: '065F46'
});
s6.addText('Bước 1: TỪ CHỐI DỨT KHOÁT\nMột app giải toán chỉ xử lý văn bản/hình ảnh bài tập, hoàn toàn KHÔNG CÓ LÝ DO chính đáng để đòi Danh bạ và GPS. Đây là dấu hiệu thu thập trái phép.\n\nBước 2: XÓA APP HOẶC TẮT QUYỀN\nThực thi Quyền Rút lại sự đồng ý: Vào Cài đặt ứng dụng -> Quyền riêng tư -> Gỡ bỏ ứng dụng lạ ngay lập tức.\n\nBước 3: THAM VẤN NGƯỜI LỚN\nBáo cho cha mẹ hoặc thầy cô khi gặp ứng dụng có hành vi lừa đảo hoặc xin quyền nhạy cảm bất thường.', {
  x: 7.1, y: 2.75, w: 5.1, h: 3.5,
  fontFace: FONT_BODY, fontSize: 11.5, color: COLOR_TEXT, lineSpacingMultiple: 1.25
});

addFooter(s6, 6);

// ==========================================
// SLIDE 7: BẢNG KIỂM RUBRIC 10 ĐIỂM
// ==========================================
const s7 = pres.addSlide();
s7.background = { color: COLOR_BG };
addTopBanner(s7, 'CÔNG CỤ ĐÁNH GIÁ ĐỊNH LƯỢNG • CÔNG VĂN 5512/BGDĐT', 'Bảng Kiểm Rubric 10 Điểm Đánh Giá Hoạt Động Vận Dụng', 'Giáo viên đánh giá tự động trên LMS SpeedGrader dựa trên 3 tiêu chí hành vi rõ ràng');

const rubricRows = [
  { tc: 'Tiêu chí 1: Năng lực ra quyết định (0 - 6 điểm)', m3: '6 điểm: Quyết định từ chối cấp quyền rõ ràng; phân tích đúng việc app Toán không cần Danh bạ & GPS; chỉ ra nguy cơ lừa đảo.', m2: '4 điểm: Từ chối cấp quyền nhưng giải thích chung chung ("sợ lộ bí mật").', m1: '0-2 điểm: Đồng ý cấp quyền hoặc chưa có quyết định rõ ràng.' },
  { tc: 'Tiêu chí 2: Lập luận pháp lý & công nghệ (0 - 2 điểm)', m3: '2 điểm: Nêu đúng Dữ liệu cơ bản vs Dữ liệu nhạy cảm hoặc nhắc tới Quyền của chủ thể dữ liệu.', m2: '1 điểm: Nhận diện được rủi ro nhưng chưa dùng thuật ngữ môn học.', m1: '0 điểm: Chưa lập luận được cơ sở bảo mật số.' },
  { tc: 'Tiêu chí 3: Kỹ năng tương tác số & Trách nhiệm (0 - 2 điểm)', m3: '2 điểm: Đặt tiêu đề đúng cú pháp [Họ tên - Lớp]; phản hồi lịch sự, văn minh cho ít nhất 1 bạn cùng lớp.', m2: '1 điểm: Thiếu một trong các quy ước định dạng hoặc phản hồi ngắn.', m1: '0 điểm: Bài đăng thiếu nghiêm túc.' }
];

rubricRows.forEach((row, idx) => {
  const y = 2.05 + idx * 1.5;
  s7.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: y, w: 11.73, h: 1.35,
    fill: { color: COLOR_WHITE },
    line: { color: COLOR_BORDER, width: 1.5 },
    rectRadius: 0.1
  });

  // Criteria header
  s7.addText(row.tc, {
    x: 1.0, y: y + 0.1, w: 11.33, h: 0.3,
    fontFace: FONT_TITLE, fontSize: 12, bold: true, color: COLOR_INDIGO
  });

  // Criteria content
  s7.addText(`• Mức Tốt: ${row.m3}\n• Mức Đạt: ${row.m2}   |   • Cần Cố Gắng: ${row.m1}`, {
    x: 1.0, y: y + 0.45, w: 11.33, h: 0.75,
    fontFace: FONT_BODY, fontSize: 10.5, color: COLOR_TEXT, lineSpacingMultiple: 1.2
  });
});

addFooter(s7, 7);

// Save presentation
const outputPath = path.join(__dirname, 'bai_6_canva_slide.pptx');
pres.writeFile({ fileName: outputPath }).then(() => {
  console.log('✅ Generated PowerPoint presentation successfully:', outputPath);
}).catch(err => {
  console.error('❌ Error generating PPTX:', err);
});

