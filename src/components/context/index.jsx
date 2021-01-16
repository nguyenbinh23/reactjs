import { useState, useReducer } from "react";
import { count, countDispatch } from "./count";
import Child from "./child";

function coutReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count + 1,
      };
    }
    case "INCREMENT_500": {
      return {
        count: state.count + action.payload.value,
      };
    }
    case "DECREMENT": {
      return {
        count: state.count - 1,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LearnContext() {
  const [state, dispatch] = useReducer(coutReducer, { count: 30 });
  return (
    <count.Provider value={state}>
      <countDispatch.Provider value={dispatch}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 bg-secondary p-2 text-white">
              <h2 className="text-center">Learn Context</h2>
              <p>
                Context được thiết kế để chia sẽ data khi chúng được xem là
                “global data” của toàn bộ ứng dụng React, chẳng hạn như thông
                tin về user hiện tại đang đăng nhập, theme, hoặc ngôn ngữ mà
                người dùng đã chọn. Ví dụ, ở đoạn code bên dưới, chúng ta truyền
                một “theme” prop để style một Button component:
              </p>
              <p>
                Sử dụng context, chúng ta có thể tránh được việc truyền props
                qua các elements trung gian
              </p>
              <div>
                <h1>{state.count}</h1>
                <Child />
              </div>
            </div>
          </div>
        </div>
      </countDispatch.Provider>
    </count.Provider>
  );
}
export default LearnContext;
