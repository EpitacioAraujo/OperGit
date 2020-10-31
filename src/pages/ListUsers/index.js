import React, { useState } from "react";

import Header from "../../components/Header";
import UserCard from "../../components/UserCard";
import ProfileView from "../../components/ProfileView";

import "./styles.css";

export default function ListUsers() {
  const [name, setName] = useState("");

  const [users, setUsers] = useState([]);

  const [profileVisible, setProfileVisible] = useState(false);
  const [userRecurrent, setUserRecurrent] = useState(null);

  const toggleProfileVisible = (index) => {
    setUserRecurrent(index);
    setProfileVisible(!profileVisible);
  };

  return (
    <>
      <Header setUsers={setUsers} name={name} setName={setName} />

      {users && (
        <>
          <div className="finded-profiles">
            {users.map((user, index) => (
              <UserCard
                key={user.login}
                index={index}
                data={user}
                onClick={toggleProfileVisible}
              />
            ))}
          </div>

          <ProfileView
            visible={profileVisible}
            dataUsers={users}
            userRecurrent={userRecurrent}
            setProfileVisible={toggleProfileVisible}
          />
        </>
      )}
    </>
  );
}
