import { useState } from 'react';
import './App.css';
import { USERS } from './data/userdata';
import AddUser from './AddUser';
import ListItem from './ListItem';
// import ViewUser from './ViewUser';
// import EditUser from './EditUser';

export default function App() {
  const [users, setUsers] = useState(USERS);
  // const [selectedUser, setSelectedUser] = useState(null);
  // move this into ListItem.js as a Boolean instead

  function saveUser(newUser) {
    console.log(newUser);
    let updatedUsers = users.map((user) => {
      if (user.uid === newUser.uid) {
        return newUser;
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  }

  function addUser(u) {
    setUsers([u, ...users]);
  }

  function deleteUser(uid) {
    let updatedUsers = users.filter((user) => user.uid !== uid);
    setUsers(updatedUsers);
  }

  return (
    <div className="app">
      <header>
        <h1>State and Synthetic Events</h1>
      </header>
      <section>
        <AddUser addUser={addUser} />
      </section>
      <ul className="userlist">
        {users.map((user) => (
          <ListItem key={user.uid} user={user} saveUser={saveUser} deleteUser={deleteUser} />
        ))}
      </ul>
    </div>
  );
}

/*
{users.map((user) => (
          <ListItem key={user.uid} user={user} saveUser={saveUser} deleteUser={deleteUser} />
        ))}

{users.map((user) =>
          selectedUser === user.uid ? (
            <EditUser user={user} key={user.uid} chooseUser={setSelectedUser} saveUser={saveUser} />
          ) : (
            <ViewUser chooseUser={setSelectedUser} deleteUser={deleteUser} user={user} key={user.uid} />
          )
        )}
*/
