import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  /*
  리액트에서는 가상돔을 기반으로 작성한다.
  그런데 프로그램에 따라서는 직접 DOM에 접근해야 할 필요가 있다.
  예를 들어 input 상자에 focus를 하거나, DOM의 크기 등을 구할 때는 불가피하게  직접 DOM에 접근한다.
  이러한 경우 useRef를 사용하는데, ref속성으로 useRef객체를 특정 DOM에 걸어(hook)두면 나중에 해당 ref객체로 접근하면 된다.
  이번 예제에서는 onReset 메서드에서 내용을 비운이후에 name input상자에 포커싱하는 작업을 다루어 보았다.
  */
  const nameInput = useRef();
  const { name, nickname } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    const nextInputs = {
      //기존의 상태를 복사한 뒤 변경된 상태만 덮어씌워야 한다.
      //이는 리액트에서 "불변성을 지킨다"고 한다.
      //이에 따라 리액트는 변경사항을 감지하고 필요한 부분만 렌더링을 하게 된다.
      ...inputs,
      [name]: value, //[name]의 키항목이 name이면 이름을 변경, nickname이면 nickname을 변경하도록 유동적으로 지정이 가능
    };
    // nextInputs[name] = value;
    setInputs(nextInputs);
  };

  const onReset = () => {
    setInputs({ name: "", nickname: "" });
    //useRef에서 current 객체를 이용하면 포커싱할 수 있다.
    nameInput.current.focus();
  };
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <strong>값 </strong>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
