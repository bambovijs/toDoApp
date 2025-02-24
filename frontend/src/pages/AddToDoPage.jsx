import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../services/CardServices';

const AddToDoPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            title,
            description,
            status: false,
        };

        try {
            const response = await createTask(newTask);
            console.log('Task created successfully:', response.data);
            navigate('/');
        } catch (error) {
            console.error('Error creating task:', error);
        }
    }
    

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Add New Task</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                />
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                />
                </div>
                <button
                type="submit"
                className="w-full bg-orange-500 text-white px-4 py-2 rounded-md"
                >
                Add Task
                </button>
            </form>
        </div>
    );
}

export default AddToDoPage