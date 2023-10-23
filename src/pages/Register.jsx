import React from 'react'

const Register = () => {
return (
    <div>
      <div className="title">ĐĂNG KÍ</div>
              <form>
                <div className="form-fields">
                  <div className="form-field">
                    <input
                      className="input-field"
                      
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="form-field">
                    <input
                      className="input-field"
                      onChange={(e) => setPass(e.target.value)}
                      type="password"
                      placeholder="Mật khẩu"
                      id="password"
                      name="password"
                    />
                  </div>
                  <button type="submit" className="btn-login">
                    Đăng nhập
                  </button>
                </div>
              </form>
              <div className="instruction forgot-pass">Quên mật khẩu</div>
              <div className="instruction">Hoặc đăng nhập bằng</div>
              <div className="button-area">
                <button type="submit" className="button-login-else btn-facebook">
                  <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1024px-Facebook_logo_36x36.svg.png"
                  />
                  Facebook
                </button>
                <button type="submit" className="button-login-else btn-google">
                  <img
                    className="logo"
                    src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/social-square-google-plus1-2-512.png"
                  />
                  Google
                </button>
              </div>
    </div>
  );
}


export default Register