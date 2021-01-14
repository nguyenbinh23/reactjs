import { useState, useEffect } from "react";
import axios from 'axios';
function Login() {
  const [isAuth, setIsAuth] = useState(0);
  const [style, setStyle] = useState({
    display: "flex",
  });
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const validUser = [{ userName: "nguyenbinh", password: "binhem113" }];
  const authenticate = () => {
    validUser.forEach((user) => {
      user.userName === userName && user.password
        ? setIsAuth(1)
        : setIsAuth(2);
    });
    setUserName("");
    setPassword("");
  };
  useEffect(() => {
    isAuth ? setStyle({ display: "none" }) : setStyle({ display: "flex" });
  }, [isAuth]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center">Đăng nhập</h2>
          <div className="form-group">
            <label className="text-dark">Nhập email</label>
            <input
              type="email"
              name="email"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="form-control"
              placeholder="Hãy nhập email"
            />
            {
                isValid(isAuth)
            }
            <label className="text-dark">Nhập password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              placeholder="Hãy nhập password"
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              authenticate();
            }}
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}


function isValid(isAuth) {
    if(isAuth !== 0 && isAuth === 2) {
        return (
            <div className="mt-1">
                <span className="badge badge-danger">
                    <small>Sài tài khoản hoặc mật khẩu</small>
                </span>
            </div>
        );
    }if(isAuth !== 0 && isAuth === 1) {
        return (
            <div className="mt-1">
                <span className="badge badge-success">
                    <small>Đăng nhập thành công</small>
                </span>
            </div>
        );
    }else 
    return '';
}

export default Login;
