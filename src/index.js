import React, { useState } from "react";
import ReactDOM from "react-dom";

function InputNumber(props) {
  console.log(props);
  return (
    <div>
      <input type="number" value={props.value} onChange={props.onChange} />
      <p>Val:{props.value}</p>
    </div>
  );
}

function App() {
  const [value, setValue] = useState("aaa");

  return (
    <div>
      <p>受控组件</p>
      <InputNumber
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <hr />
      <p>非受控组件</p>
      <InputNumber defaultValue="" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
