//Always start with capital letters, can be function component or class component

import Greet from "./1.components/1.function/Greet";
import { NamedClass } from "./1.components/2.class.js/NamedClass";
import Welcome from "./1.components/2.class.js/Welcome";
import Sample from "./Sample";

function App() {
  return (
    <div className="container">
      <h1>Welcome to ReactJS</h1>
      <Greet />
      <Welcome />
      <NamedClass />
      <Sample />
    </div>
  );
}

export default App;
