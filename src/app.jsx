import React from "react";
import './assets/scss/index.scss';
import Header from './views/shared/header';
import Footer from './views/shared/footer';
import Login from './components/login/index';
function App() {
  return (
    <div>
      <Header></Header>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;
