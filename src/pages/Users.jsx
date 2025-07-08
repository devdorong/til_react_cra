import React, { useState } from "react";
import UserList from "../components/users/UserList";
import Button from "../components/ui/Button";
import styled from "@emotion/styled";
import { Wrap } from "./Posts";

function Users() {
  const Button = styled.button`
    background-color: ${props => {
      // 비활성화 된 경우
      if (props.disabled) return "#ccc";

      switch (props.variant) {
        case "primary":
          return "#007bff";
        case "danger":
          return "#dc3545";
        case "success":
          return "#28a745";
        default:
          return "#ff99a1";
      }
    }};

    color: white;
    padding: ${props => (props.size === "lg" ? "12px 24px" : "8px 16px")};
    border: none;
    border-radius: 4px;
    font-size: ${props => (props.size === "lg" ? "18px" : "14px")};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    margin: 5px;
    opacity: ${props => (props.disabled ? 0.6 : 1.0)};

    &:hover {
      opacity: ${props => (props.disabled ? 0.6 : 0.8)};
    }
  `;
  //js
  const [usersData, setusersData] = useState([]);
  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      console.log("Users 데이터");
      console.log(result);
      setusersData(result);
    } catch (error) {
      console.log(error);
    }
  };
  //   getUsers();
  //jsx
  return (
    <Wrap>
      <h1>
        Users 목록
        <div>
          <Button onClick={getUsers}>목록 가져오기</Button>
          <Button onClick={() => setusersData([])}>목록초기화</Button>
        </div>
      </h1>
      <div>
        {usersData.map((item, index) => {
          return (
            <UserList
              address={item.address}
              company={item.company}
              email={item.email}
              id={item.id}
              name={item.name}
              phone={item.phone}
              username={item.username}
              website={item.website}
              key={index}
            />
          );
        })}
      </div>
    </Wrap>
  );
}

export default Users;
