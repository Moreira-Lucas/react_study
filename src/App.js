

//import MyButton from './Mybutton';
//import { Component } from "react";
import MyChildComponent from "./components/myChildComponent/index";
import StateComponent from "./components/StateComponent/index";

const App = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyChildComponent name="Lucas" age="27" />
      <StateComponent/>
    </div>
  );
}

export default App;