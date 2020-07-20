import React from "react";
import Hello from "./Hello";
import "./App.css";
import Wrapper from "./Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        {/* 속성 값을 지정하지 않으면 기본으로 true로 지정한다 */}
        <Hello name="react" color="red" isSpecial />
        <Hello isSpecial={false} />
      </Wrapper>
    </>
  );
}

export default App;
