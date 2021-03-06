import React /*, { useState }*/ from "react";

import "./assets/scss/index.scss";
import Header from "./views/shared/header";
import Footer from "./views/shared/footer";
import LearnRedux from "./components/learn-redux";

import { Provider } from "react-redux";
import store from "./store";

/*
import Login from "./components/login";
import LearnUseEffect from "./components/use-effect";
import LearnUseReducer from "./components/use-reducer";
import LearnContext from "./components/context";
import Calculator from "./components/temperature";
*/

function App() {
  // const [user, setUser] = useState({ name: "Nguyễn Bình", content: "WEB DEV" });
  return (
    <Provider store={store}>
      <Header></Header>
      {/*       
      <LearnContext/>
      <LearnUseEffect
        user={user}
        onUserChange={(value) => {
          setUser(value);
        }}
      ></LearnUseEffect>
      <LearnUseReducer/>
      <Login></Login>
      */}
      <div className="container text-dark">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <LearnRedux />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Provider>
  );
}

export default App;
