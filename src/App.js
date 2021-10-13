//Always start with capital letters, can be function component or class component
// Avoid complexity in components

import NameListThree from "./8.list-rendering/NameListThree";
import Person from "./8.list-rendering/Person";

function App() {
  return (
    <div className="container">
      <h1>Welcome to ReactJS</h1>
      <NameListThree />
    </div>
  );
}

export default App;
