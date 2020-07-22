import React, { createContext, useContext, useState } from "react";

const MyContext = createContext("기본값입력");

function Child() {
  const text = useContext(MyContext);
  return <div>안녕하세요 {text}</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}

function ContextSample() {
  const [value, setValue] = useState(true);
  return (
    //  Context객체의 Provider를 이용하여 값을 지정하면 Props를 이용하지 않고도 최종 목적지인 Child까지 전달이 가능하다
    <MyContext.Provider value={value ? "GOOD" : "BAD"}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>CLICK ME</button>
    </MyContext.Provider>
  );
}

export default ContextSample;
