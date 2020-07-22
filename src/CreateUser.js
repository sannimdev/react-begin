import React, { useContext, useRef } from "react";
import useInputs from "./UseInputs";
import { UserDispatch } from "./App";

function CreateUser() {
  //1. useContext를 사용하여 dispatch 가져오기
  //2. useInputs 커스텀 훅 사용
  //3. nextId 관리 이곳에서

  const dispatch = useContext(UserDispatch);
  const [form, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const { username, email } = form;
  const nextId = useRef(4);

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current++,
        username,
        email,
      },
    });
  };

  return (
    <div>
      <input name="username" placeholder="계정명" value={username} onChange={onChange} />
      <input name="email" placeholder="이메일" value={email} onChange={onChange} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser);
