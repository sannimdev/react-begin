import React, { useRef, useState, useMemo, useCallback } from "react";
import "./App.css";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자를 세는 중");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);
  //nextId값이 바뀐다고 해서 굳이 렌더링될 필요가 없다.
  //바로 이렇게 렌더링에 관련되지 않는 값들을 관리하고자 할 때도 useRef를 사용하기도 한다.
  //어떠한 변수를 기억하는데, 렌더링될 필요가 없는 사항들도 useRef로 관리하면 된다.
  const nextId = useRef(4);

  const onCreate = useCallback(
    () => {
      const user = {
        id: nextId.current,
        username,
        email,
      };
      setUsers((users) => [...users, user]);
      setInputs({
        username: "",
        email: "",
      });
      nextId.current += 1;
    },
    //depth에 참조를 명시하지 않으면 최초 렌더링 상태의 값을 참조할 수도 있음.
    [username, email]
  );

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) => (user.id === id ? { ...user, active: !user.active } : user))
    );
  }, []);

  //useMemo는 특정 값이 변했을 경우에만 재실행
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
