import { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/usuarios');
      setUsers(response.data);
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  };

  const handleCreateOrUpdateUser = async (userData) => {
    if (editingUser) {
      // Editar usuario existente
      await axios.put(`http://localhost:8080/api/usuarios/${editingUser.id}`, userData);
    } else {
      // Crear nuevo usuario
      await axios.post('http://localhost:8080/api/usuarios', userData);
    }
    fetchUsers();
    setEditingUser(null); // Limpiar el estado de ediciónñ
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleDeleteUser = async (userId) => {
    await axios.delete(`http://localhost:8080/api/usuarios/${userId}`);
    fetchUsers();
  };

  return (
    <div className="App">
      <h1>Usuarios</h1>
      <UserTable users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
      <h2>{editingUser ? 'Editar Usuario' : 'Crear Nuevo Usuario'}</h2>
      <UserForm onSubmit={handleCreateOrUpdateUser} initialUser={editingUser} />
    </div>
  );
}

export default App;
