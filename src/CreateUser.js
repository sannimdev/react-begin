import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  //1. useContext를 사용하여 dispatch 가져오기
  //2. useInputs 커스텀 훅 사용
  //3. nextId 관리 이곳에서
  return (
    <div>
      <input name="username" placeholder="계정명" value={username} />
      <input name="email" placeholder="이메일" value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser);
