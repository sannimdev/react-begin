import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  useEffect(() => {
    //props => state
    // REST API
    // 라이브러리 사용.. D3, Video.js 등
    //setInterval, setTimeout
    console.log("컴포넌트가 화면에 나타난 상태 이후...", username);
    return () => {
      //clearInterval, clearTimeout 작업
      //라이브러리 인스턴스 제거
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);
  return (
    <div>
      <b
        onClick={() => onToggle(id)}
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user, idx) => (
        //key는 각 원소마다 고윳값을 부여함으로써 리액트가 렌더링할 때 최적화를 할 수 있음.
        //그러나 웬만하면 key에 map에서 제공되는 기본적인  index값을 넣는 것은 권장하지 않음
        //왜냐하면, 배열의 개수나 원소의 값이 바뀔 때마다 어떠한 것을 렌더링하는지 리액트가 1:1 대응하는 정보를 알지 못하기 때문에...
        //렌더링 성능에서 비효율적으로 동작하게 될 가능성이 높기 때문이다.
        //단순히 새로운 원소가 중간에 삽입되거나 삭제된 경우에도 배열의 내용을 모두 덮어씌워버리고 남는 것이 있거나 모자라면 버리거나 추가하게 된다.
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
        //그러나 고윳값이 있는 객체들이 존재한다면?
        //렌더링하기 전에 이미 리액트는 배열의 원소에서 어떠한 값을 렌더링하는지 1:1로 알고 있기 때문에
        //원소의 변화를 감지하고 효율적으로 렌더링 작업을 수행할 수 있다.
        //새로운 원소가 중간에 삽입되거나 삭제된 경우에는 배열의 내용 중에서 새롭게 감지된 값만 추가하거나 제거하므로 렌더링 성능이 올라갈 수밖에 없다.
      ))}
    </div>
  );
}

export default UserList;
