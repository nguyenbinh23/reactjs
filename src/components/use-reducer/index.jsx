import { useReducer, useEffect } from "react";

function LearnUseReducer() {
  const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case "FETCH_FAILURE":
        return {
          data: [],
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(dataFetchReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch({ type: "FETCH_INIT" });
    setTimeout(
      () =>
        dispatch({
          type: "FETCH_SUCCESS",
          payload: [
            { id: 1, username: "Nguyễn", old: 22 },
            { id: 2, username: "Duy", old: 22 },
            { id: 3, username: "Khang", old: 22 },
          ],
        }),
      3000
    );
    setTimeout(() => dispatch({ type: "FETCH_FAILURE" }), 6000);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8  bg-secondary p-2">
          <h2 className="text-center">Learn UseReducer</h2>
          {state.data.map((user) => (
            <div key={user.id}>
              {user.username} - {user.old}
            </div>
          ))}
          {state.isLoading && (
            <div className="badge badge-warning">isLoading</div>
          )}
          {state.isError && <div className="badge badge-danger">Error</div>}
        </div>
        <div className="col-md-8 mt-3 bg-secondary p-2 text-dark">
          <h3 className="text-white">Dùng useState khi:</h3>
          <ul className="list-group">
            <li className="list-group-item">
              JavaScript primitives as state (state là các kiểu dữ liệu cấu trúc
              sơ khai(undefined, boolean, number, string, bigInt, Symbol)
            </li>
            <li className="list-group-item">
              simple state transitions (các cái thay đổi thay đơn giản)
            </li>
            <li className="list-group-item">
              business logic within your component (code logic ở trong component
              luôn)
            </li>
            <li className="list-group-item">
              different properties that don't change in any correlated way and
              can be managed by multiple useState hooks (các state khác nhau
              không phụ thuộc lẫn nhau và có thể quản lí bằng nhiều useState
              riêng biệt)
            </li>
            <li className="list-group-item">
              state co-located to your component (các state dính kèm với
              component, cái này ví dụ như là hàm onChange của Input nè)
            </li>
            <li className="list-group-item">
              a small application (but the lines are blurry here)
            </li>
          </ul>
          <h3 className="text-white">Dùng useReducer khi:</h3>
          <ul className="list-group">
            <li className="list-group-item">
              JavaScript objects or arrays as state (state là object hoặc array)
            </li>
            <li className="list-group-item">
              complex state transitions (các thay đổi state phức tạp hơn)
            </li>
            <li className="list-group-item">
              complicated business logic more suitable for a reducer function
              (có business logic phức tạp thì nên bỏ logic vô reducer để tập
              trung lại một chỗ)
            </li>
            <li className="list-group-item">
              different properties tied together that should be managed in one
              state object (các state liên quan/ phụ thuộc lẫn nhau thì nên được
              quản lí bằng một state object)
            </li>
            <li className="list-group-item">
              the need to update state deep down in your component tree
            </li>
            <li className="list-group-item">
              a medium-sized application (NB: the lines are blurry here)
            </li>
            <li className="list-group-item">
              need for an easier time testing it
            </li>
            <li className="list-group-item">
              need for a more predictable and maintainable state architecture
              (cái này thì quá dễ thấy rồi)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LearnUseReducer;
