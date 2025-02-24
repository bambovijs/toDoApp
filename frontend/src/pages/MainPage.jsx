import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Filter from '../components/Filter';
import { listTasks, updateTask, deleteTask } from '../services/CardServices';

const MainPage = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = async () => {
    try {
      const response = await listTasks();
      if (Array.isArray(response.data)) {
        setTodos(response.data);
      } else {
        console.error('API response is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.status;
    if (filter === 'completed') return todo.status;

    return true;
  })

  const handleUpdate = async (id, updatedTask) => {
    try {
      console.log('Data being sent to update task:', updatedTask);
      await updateTask(id, updatedTask);
      getAllTodos();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      getAllTodos();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">ToDo List</h1>
      <Filter setFilter={setFilter} />
      <div className="grid gap-4">
        {filteredTodos.map((todo) => (
          <Card 
          id={todo.id}
          key={todo.id} 
          title={todo.title} 
          description={todo.description}
          status={todo.status}
          onUpdate={handleUpdate}
          onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;