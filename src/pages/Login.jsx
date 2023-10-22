import React, { useState } from "react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <div>
            <section className="section-slider">
                <div className="section-img">
                    <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/slider_1.jpg?1694745247263" />
                    <div className="registing-form">
                        <div className="register-area">
                            <div class="title">Đăng nhập</div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-fields">
                                    <div className="form-field">
                                        <input
                                            class="input-field"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            name="email"

                                        /></div>
                                    <div className="form-field">
                                        <input class="input-field"
                                            value={pass}
                                            onChange={(e) => setPass(e.target.value)}
                                            type="password"
                                            placeholder="Mật khẩu"
                                            id="password"
                                            name="password"
                                        />
                                    </div>
                                    <button type="submit" class="btn-login">Đăng nhập</button>
                                </div>




                            </form>

                            <div class="instruction forgot-pass">Quên mật khẩu</div>
                            <div class="instruction">Hoặc đăng nhập bằng</div>
                            <div className="button-area">
                            <button type="submit" class="button-login-else btn-facebook">
                                <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1024px-Facebook_logo_36x36.svg.png"/>Facebook</button>
                            <button type="submit" class="button-login-else btn-google">
                            <img class="logo" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/social-square-google-plus1-2-512.png"/>
                                Google</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;