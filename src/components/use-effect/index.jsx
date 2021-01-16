import { useState, useEffect } from "react";

function LearnUseEffect(props) {
  const [time, setTime] = useState(0);
  let [hello, setHello] = useState("hello");
  function clicked() {
    setTime(time + 1);
  }
  function sayHello() {
    setHello((hello += " hello"));
    console.log(hello);
  }
  function changeProps() {
    let user = {
      name: "Nguyễn Bình Changed",
      content: "WEB DEV CHANGED",
    };
    return user;
  }

  useEffect(() => {
    //chỗ này luôn luôn được gọi ít nhất 1 lần
    console.log(`Bạn đã click ${time} lần`); // sẽ gọi khi component được render và mount ở lần đầu tiên,
    //sau mỗi lần render thì cb cleanup sẽ được gọi trước sau đó mới tới ở trên
    return () => {
      console.log("cb"); //Những thứ cần cleanup thì để ở đây ví dụ như. cleanup các input hay các api setTimeout hoặc setInterval v.v
    };
  }, [time]);

  useEffect(() => {
    //chỗ này luôn luôn được gọi ít nhất 1 lần
    console.log(`Gọi api`); // sẽ gọi khi component được render và mount ở lần đầu tiên,
    //sau mỗi lần render thì cb cleanup sẽ được gọi trước sau đó mới tới ở trên
    return () => {
      console.log("cb api"); //Những thứ cần cleanup thì để ở đây ví dụ như. cleanup các input hay các api setTimeout hoặc setInterval v.v
    };
  });
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 bg-secondary p-2">
          <h2>{hello}</h2>
          <h2>{props.user.name}</h2>
          <h2>{props.user.content}</h2>
          <h2>You are clicked this {time}</h2>
          <button className="btn btn-success" onClick={() => clicked()}>
            Clicked!!!
          </button>
          <button className="btn btn-warning ml-2" onClick={() => sayHello()}>
            Say Hello
          </button>
          <button
            className="btn btn-primary ml-2"
            onClick={() => props.onUserChange(changeProps())}
          >
            Change Props
          </button>
        </div>
      </div>
    </div>
  );
}

export default LearnUseEffect;
