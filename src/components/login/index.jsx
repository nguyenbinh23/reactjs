import { useState, useEffect } from "react";
import axios from "axios";
function Login() {
  const [isAuth, setIsAuth] = useState(false);
  const [style, setStyle] = useState({
    display: "flex",
  });
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = () => {
    axios
      .post("http://localhost:4000/auth", {
        userData: {
            userName: userName,
            password: password,
        }
      })
      .then((res) => {
        console.log(res);
      });
    setUserName("");
    setPassword("");
  };
  useEffect(() => {
    isAuth ? setStyle({ display: "none" }) : setStyle({ display: "flex" });
  }, [isAuth]);

  return (
    <div className="container">
      <div className="row justify-content-center" style={style}>
        <div className="col-md-8">
          <h2 className="text-center">Đăng nhập</h2>
          <div className="form-group">
            <label htmlFor="email">Nhập email</label>
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
            <label htmlFor="password">Nhập password</label>
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

export default Login;
