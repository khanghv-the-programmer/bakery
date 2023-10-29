import React, { useRef, useState } from "react";

const Register = () => {
  // const name = useRef();
  // const surName = useRef();
  // const email = useRef();
  // const password = useRef();
  // const phoneNumber = useRef();

  // const handleClick = () => {
  //   if (
  //     name.current.value &&
  //     surName.current.value &&
  //     email.current.value &&
  //     password.current.value &&
  //     phoneNumber.current.value
  //   ) {
  //     localStorage.setItem(name.current.value)
  //     localStorage.setItem(surName.current.value)
  //     localStorage.setItem(email.current.value)
  //     localStorage.setItem(password.current.value)
  //     localStorage.setItem(phoneNumber.current.value)
  //     alert("Tạo tài khoản thành công")
  //   }
  // };
  const [formData, setFormData] = useState({
    surName: "",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // if(formData.password !== formData.confirmPassword) {
    //   alert("Password does not match");
    //   return;
    // }

    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Registed")

  }
  return (
    <div>
      <div className="title">ĐĂNG KÍ</div>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <div className="form-field">
            <input
              className="input-field"
              type="text"
              placeholder="Họ"
              id="sur-name"
              name="surName"
              value={formData.surName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <input
              className="input-field"
              type="text"
              placeholder="Tên"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <input
              className="input-field"
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <input
              className="input-field"
              type="text"
              placeholder="Số điện thoại"
              id="phone-num"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <input
              className="input-field"
              type="password"
              placeholder="Mật khẩu"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Đăng kí
          </button>
        </div>
      </form>

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
};

export default Register;



