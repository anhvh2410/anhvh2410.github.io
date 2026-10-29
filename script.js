document.querySelectorAll('.copy').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var el = document.getElementById(btn.dataset.copy);
    var text = el.textContent.trim();
    var done = function () { btn.textContent = 'Đã chép'; setTimeout(function () { btn.textContent = 'Sao chép'; }, 1600); };
    var fallback = function () { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = 'Đã chọn'; };
    try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
  });
});
document.getElementById('brief').addEventListener('submit', function (e) {
  e.preventDefault();
  var msg = document.getElementById('form-msg');
  var f = function (id) { return document.getElementById(id).value.trim(); };
  var name = f('f-name'), phone = f('f-phone');
  msg.hidden = false;
  if (!name || !phone) { msg.style.color = 'var(--brand-deep)'; msg.textContent = 'Vui lòng điền tên và số Zalo để chúng tôi liên hệ lại.'; return; }
  msg.style.color = '';
  var body = 'Tên: ' + name + '\nZalo/điện thoại: ' + phone + '\nCần làm: ' + f('f-type') + '\nNgân sách: ' + f('f-budget') + '\n\nMô tả quy trình:\n' + f('f-idea');
  msg.textContent = 'Cảm ơn ' + name + '! Ứng dụng email của bạn sẽ mở với nội dung đã điền, bạn bấm Gửi để hoàn tất. Hoặc gọi/nhắn Zalo 0989 986 590.';
  window.location.href = 'mailto:zenflorix@gmail.com?subject=' + encodeURIComponent('Yêu cầu báo giá từ ' + name) + '&body=' + encodeURIComponent(body);
});
