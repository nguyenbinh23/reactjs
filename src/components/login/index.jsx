import { useState, useEffect } from "react";

function Login() {
  const [isAuth, setIsAuth] = useState(false);
  const [status, setStatus] = useState(0);
  const [style, setStyle] = useState({
    display: "flex",
  });
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const validUser = [{ userName: "nguyenbinh", password: "binhem113" }];

  const authenticate = () => {
    setStatus(0);
    validUser.forEach((user) => {
      if (user.userName === userName && user.password) {
        setIsAuth(true);
        setStatus(2);
      } else {
        setStatus(1);
        setIsAuth(false);
        setUserName("");
        setPassword("");
      }
    });
  };

  useEffect(() => {
    isAuth ? setStyle({ display: "none" }) : setStyle({ display: "flex" });
  }, [isAuth]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      authenticate();
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center" style={style}>
        <div
          className="col-md-8"
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        >
          <h2 className="text-center text-dark">Đăng nhập</h2>
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
            {isValid(status)}
            <label className="mt-2 text-dark">Nhập password</label>
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

function isValid(status) {
  if (status !== 0 && status === 1) {
    return (
      <div className="mt-1">
        <span className="badge badge-danger">
          <small>Sài tài khoản hoặc mật khẩu</small>
        </span>
      </div>
    );
  } else return "";
}

export default Login;
