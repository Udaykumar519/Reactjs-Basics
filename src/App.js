//Always start with capital letters, can be function component or class component
// Avoid complexity in components

import Form from "./10.formHandling/Form";
import FormOne from "./10.formHandling/FormOne";

//normal styling
// import "./9.styling/appStyle.css"
// //css module..always import modules with a name
// import styles from "./9.styling/appStyle.module.css"

function App() {
  return (
    <div className="container">
      <h1 className="error">Welcome to ReactJS</h1>
      <FormOne />
    </div>
  );
}

export default App;
