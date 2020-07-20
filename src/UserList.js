import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];
  return (
    <div>
      {users.map((user, idx) => (
        //key는 각 원소마다 고윳값을 부여함으로써 리액트가 렌더링할 때 최적화를 할 수 있음.
        //그러나 웬만하면 key에 map에서 제공되는 기본적인  index값을 넣는 것은 권장하지 않음
        //왜냐하면, 배열의 개수나 원소의 값이 바뀔 때마다 어떠한 것을 렌더링하는지 리액트가 1:1 대응하는 정보를 알지 못하기 때문에...
        //렌더링 성능에서 비효율적으로 동작하게 될 가능성이 높기 때문이다.
        //단순히 새로운 원소가 중간에 삽입되거나 삭제된 경우에도 배열의 내용을 모두 덮어씌워버리고 남는 것이 있거나 모자라면 버리거나 추가하게 된다.
        <User user={user} key={user.id} />
        //그러나 고윳값이 있는 객체들이 존재한다면?
        //렌더링하기 전에 이미 리액트는 배열의 원소에서 어떠한 값을 렌더링하는지 1:1로 알고 있기 때문에
        //원소의 변화를 감지하고 효율적으로 렌더링 작업을 수행할 수 있다.
        //새로운 원소가 중간에 삽입되거나 삭제된 경우에는 배열의 내용 중에서 새롭게 감지된 값만 추가하거나 제거하므로 렌더링 성능이 올라갈 수밖에 없다.
      ))}
    </div>
  );
}

export default UserList;
