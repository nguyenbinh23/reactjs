import { useState, useEffect } from "react";

function Header() {
  const [fistTime, setFirstTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [timePast, setTimePast] = useState(0);
  let setCurrentTime = () => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  };
  setCurrentTime();
  // Tương tự như componentDidMount và componentDidUpdate:
  useEffect(() => {
    let newTimePast = Math.ceil((date.getTime() - fistTime.getTime()) / 1000);
    setTimePast(newTimePast);
  }, [date]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/nothing">
        Nguyễn App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/nothing">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <div className="nav-link" href="/nothing">
              {`${date.toLocaleTimeString()} - ${date.getDate()} / ${
                date.getMonth() + 1
              } / ${date.getFullYear()}`}
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" href="/nothing">
              Thời gian đã trôi qua {timePast}
            </div>
          </li>
        </ul>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
