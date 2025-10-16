// App.jsx
import React from "react";
import AddPost from "./AddPost";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Axios POST Request Example</h1>
      <AddPost />
    </div>
  );
};

export default App;
