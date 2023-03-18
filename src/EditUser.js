import './ListItem.css';

export default function EditItem({ user, saveUser, chooseUser }) {
  return (
    <li className="user">
      <input type="text" autoFocus className="name" defaultValue={`${user.full_name}`} onChange={(ev) => (user.full_name = ev.target.value)} />
      <input type="email" className="email" defaultValue={user.email} onChange={(ev) => (user.email = ev.target.value)} />
      <div className="buttons">
        <button className="btnSave" onClick={() => saveUser(user)}>
          <span className="material-symbols-outlined">save</span> Save
        </button>
        <button className="btnCancel" onClick={() => chooseUser(null)}>
          <span className="material-symbols-outlined">cancel</span> Cancel
        </button>
      </div>
    </li>
  );
}
