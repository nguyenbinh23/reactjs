import { connect } from "react-redux";
import { useState, createRef } from "react";

function LearnRedux(props) {
  const [user, setUser] = useState({
    name: props.user.name,
    token: props.user.token,
  });
  const [category, setCategory] = useState({
    name: props.category.name,
    parentId: props.category.parentId,
  });
  const [isLoading, setIsLoading] = useState(false);
  const inputCategoryName = createRef();
  const inputCategoryParentId = createRef();

  return (
    <div>
      <h2>
        {props.user.name} - {props.user.token}
      </h2>
      <h2>
        {props.category.name} - {props.category.parentId}
      </h2>

      <div className="fourm-group">
        <label>Tên</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ name: e.target.value, token: user.token })}
          className="form-control"
        />
        <label>Token</label>
        <input
          type="text"
          value={user.token}
          onChange={(e) => setUser({ name: user.name, token: e.target.value })}
          className="form-control"
        />
        <button
          className="btn btn-success mt-2"
          onClick={() => props.changeUser(user.name, user.token)}
        >
          Thay đổi user
        </button>
      </div>
      <div className="fourm-group mt-4">
        <label>Tên Category</label>
        <input
          type="text"
          ref={inputCategoryName}
          value={category.name}
          onChange={(e) =>
            setCategory({ name: e.target.value, parentId: category.parentId })
          }
          className="form-control"
        />
        <label>Parent Id</label>
        <input
          type="text"
          ref={inputCategoryParentId}
          value={category.parentId}
          onChange={(e) =>
            setCategory({ name: category.name, parentId: e.target.value })
          }
          className="form-control"
        />
        <button
          className="btn btn-warning mt-2"
          disabled={isLoading}
          onClick={() =>
            props.changeCategory(category.name, category.parentId, setIsLoading)
          }
        >
          Thay đổi Category
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  category: state.category.currentCategory,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeUser: (name, token) => {
      dispatch({ type: "CHANGE_USER", payload: { name: name, token: token } });
    },
    changeCategory: async (name, parentId, setIsLoading) => {
      return new Promise((res, rej) => {
        setIsLoading(true);
        setTimeout(() => {
          res("okeee");
        }, 2000);
      })
        .then((res) => {
          dispatch({
            type: "CHANGE_CATEGORY",
            payload: { name: name, parentId: parentId },
          });
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnRedux);
