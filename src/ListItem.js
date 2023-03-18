import './ListItem.css';
import { useState } from 'react';

export default function ListItem({ user, saveUser, deleteUser }) {
  const [isSelected, setIsSelected] = useState(false);
  //moving isSelected into the ListItem means preventing the need to rerender the whole list

  if (isSelected) {
    return (
      <li className="user">
        <input type="text" autoFocus className="name" defaultValue={`${user.full_name}`} onChange={(ev) => (user.full_name = ev.target.value)} />
        <input type="email" className="email" defaultValue={user.email} onChange={(ev) => (user.email = ev.target.value)} />
        <div className="buttons">
          <button
            className="btnSave"
            onClick={() => {
              setIsSelected(false);
              saveUser(user);
            }}
          >
            <span className="material-symbols-outlined">save</span> Save
          </button>
          <button className="btnCancel" onClick={() => setIsSelected(false)}>
            <span className="material-symbols-outlined">cancel</span> Cancel
          </button>
        </div>
      </li>
    );
  } else {
    return (
      <li className="user">
        <h2 className="name">{user.full_name}</h2>
        <p className="email">{user.email}</p>
        <div className="buttons">
          <button className="btnEdit" onClick={() => setIsSelected(true)}>
            <span className="material-symbols-outlined">edit</span> Edit
          </button>
          <button
            className="btnDelete"
            onClick={() => {
              if (window.confirm('Are you sure about the deletion?')) {
                deleteUser(user.uid);
              }
            }}
          >
            <span className="material-symbols-outlined">delete</span> Delete
          </button>
        </div>
      </li>
    );
  }
}
