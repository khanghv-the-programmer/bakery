import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Register from "./Register";
import { styled } from "@mui/material/styles";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  // const initialValues = { username: "", password: "" };
  // const [formValues, setFromValues] = useState(initialValues);
  // const [value, setValue] = React.useState("1");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const userData = JSON.parse(localStorage.getItem("userData"));

    if (
      !userData ||
      userData.email !== formData.email ||
      userData.password !== formData.password
    ) {
      alert("Email or password does not match!");
      return;
    }
    alert("Login successfully");
  };

  const AntTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
      backgroundColor: "#d09c44",
    },
  });

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: "rgba(255, 255, 255, 0.7)",
      "&.Mui-selected": {
        color: "#fff",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)",
      },
    })
  );

  const AntTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      minWidth: 0,
      [theme.breakpoints.up("sm")]: {
        minWidth: 0,
      },
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(1),
      color: "rgba(0, 0, 0, 0.85)",
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:hover": {
        color: "#d09c44",
        opacity: 1,
      },
      "&.Mui-selected": {
        color: "#d09c44",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&.Mui-focusVisible": {
        backgroundColor: "#d1eaff",
      },
      borderBottom: "1px solid #e8e8e8",
      "& .MuiTabs-indicator": {
        backgroundColor: "#d09c44",
        color: "#d09c44",
      },
    })
  );

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <div>
        <section className="section-slider">
          <div className="section-img">
            <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/slider_1.jpg?1694745247263" />
            <div className="registing-form">
              <div className="register-area">
                <TabContext  value1="1"  value2="2">
                  <div className="switching">
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        className="header-dangki-dangnhap"
                      >
                        <AntTab label="ĐĂNG NHẬP" value="1" />
                        <AntTab label="ĐĂNG KÍ" value="2" />
                      </TabList>
                    </Box>
                  </div>
                  <TabPanel value1="1">
                    <div className="title">ĐĂNG NHẬP</div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-fields">
                        <div className="form-field">
                          <input
                            className="input-field"
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={formData.username}
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
                          Đăng nhập
                        </button>
                      </div>
                    </form>
                    <div className="instruction forgot-pass">Quên mật khẩu</div>
                    <div className="instruction">Hoặc đăng nhập bằng</div>
                    <div className="button-area">
                      <button
                        type="submit"
                        className="button-login-else btn-facebook"
                      >
                        <img
                          className="logo"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1024px-Facebook_logo_36x36.svg.png"
                        />
                        Facebook
                      </button>
                      <button
                        type="submit"
                        className="button-login-else btn-google"
                      >
                        <img
                          className="logo"
                          src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/social-square-google-plus1-2-512.png"
                        />
                        Google
                      </button>
                    </div>
                  </TabPanel>
                  <TabPanel value2="2">
                    <Register></Register>
                  </TabPanel>
                </TabContext>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Box>
  );
};

export default Login;
