import { useState } from 'react';
import './AddUser.css';

export default function AddUser({ addUser }) {
  const shape = {
    uid: '',
    full_name: '',
    email: '',
  };
  const [user, setUser] = useState({ ...shape });

  function saveUser() {
    let temp = { ...user, uid: crypto.randomUUID() };
    addUser(temp);
    setUser(shape);
  }

  return (
    <div className="addUser">
      <p className="name">Add a user</p>
      <input type="text" autoFocus placeholder="full name" className="name" value={`${user.full_name}`} onChange={(ev) => setUser({ ...user, full_name: ev.target.value })} />
      <input type="email" placeholder="email address" className="email" value={user.email} onChange={(ev) => setUser({ ...user, email: ev.target.value })} />
      <div className="buttons">
        <button className="btnSave" onClick={saveUser}>
          <span className="material-symbols-outlined">person_add</span> Add
        </button>
      </div>
    </div>
  );
}
