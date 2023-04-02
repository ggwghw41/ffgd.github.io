var loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var username = loginForm.querySelector('input[type="text"]').value;
  var password = loginForm.querySelector('input[type="password"]').value;
  
  // Kiểm tra xem thông tin đăng nhập có chính xác không
  if(username === 'admin' && password === '123456') {
    alert('Đăng nhập thành công!');
    window.location.href = 'file:///C:/Th%C3%A1i%20To%C3%A0n/.vscode/index.html'; // Chuyển hướng đến trang chủ
  } else {
    alert('Đăng nhập thất bại! Vui lòng kiểm tra lại tài khoản hoặc mật khẩu.');
  }
});
