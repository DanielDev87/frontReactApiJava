/* eslint-disable react/prop-types */

const UserRow = ({ user, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(user);
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <tr>
      <td>{user.nombre}</td>
      <td>{user.email}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  );
};

export default UserRow;
