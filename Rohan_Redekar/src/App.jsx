import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <button className='btn btn-success'>success</button>
    </div>
  );
}

export default App;
