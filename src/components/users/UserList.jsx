import styled from "@emotion/styled";
import React from "react";

function UserList({
  address,
  company,
  email,
  id,
  name,
  phone,
  username,
  website,
}) {
  //js
  const UserCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #ff99a1;
    margin-bottom: 20px;
    padding: 20px;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const UserId = styled.div``;
  const UserAddress = styled.div`
    border: 1px solid #ff99a1;
    padding: 5px;
    border-radius: 15px;

    margin: 10px;
  `;
  const UserCompany = styled.div`
    border: 1px solid #ff99a1;
    padding: 5px;
    border-radius: 10px;
    margin: 10px;
  `;
  const UserEmail = styled.div``;
  const UserName = styled.div``;
  const UserPhone = styled.div``;
  const UserUsername = styled.div``;
  const UserWebsite = styled.div``;
  //jsx
  return (
    <UserCard>
      <UserId>Id : {id}</UserId>
      address :
      <UserAddress>
        city : {address.city}
        <br />
        lat : {address.geo.lat}
        <br />
        lng : {address.geo.lng}
        <br />
        street : {address.street}
        <br />
        suite : {address.suite}
        <br />
        zipcode : {address.zipcode}
        <br />
      </UserAddress>
      Company :
      <UserCompany>
        bs : {company.bs}
        <br />
        catchPhrase : {company.catchPhrase}
        <br />
        name : {company.name}
      </UserCompany>
      <UserEmail>Email : {email}</UserEmail>
      <UserName>Name : {name}</UserName>
      <UserPhone>Phone : {phone}</UserPhone>
      <UserUsername>Username : {username}</UserUsername>
      <UserWebsite>Website : {website}</UserWebsite>
    </UserCard>
  );
}

export default UserList;
