import './ListItem.css';

export default function ViewItem({ user, chooseUser, deleteUser }) {
  return (
    <li className="user">
      <h2 className="name">{user.full_name}</h2>
      <p className="email">{user.email}</p>
      <div className="buttons">
        <button className="btnEdit" onClick={() => chooseUser(user.uid)}>
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
