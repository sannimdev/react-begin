import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
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
  };
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
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
