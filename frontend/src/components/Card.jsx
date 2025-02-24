import { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, title, description, status, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const [editStatus, setEditStatus] = useState(status);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(id, { title: editTitle, description: editDescription, status: editStatus });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditTitle(title);
    setEditDescription(description);
    setEditStatus(status);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div className='bg-neutral-100 rounded-md p-4 text-neutral-950'>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded-md"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded-md"
          />
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={editStatus}
              onChange={(e) => setEditStatus(e.target.checked)}
              className="mr-2"
            />
            Done
          </label>
          <div className='flex gap-2 justify-center'>
            <button
              className='w-[80px] h-[40px] bg-green-500 text-primary-50 flex justify-center items-center rounded-md'
              onClick={handleSaveClick}
            >
              Save
            </button>
            <button
              className='w-[80px] h-[40px] bg-red-500 text-primary-50 flex justify-center items-center rounded-md'
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className='font-title text-lg mb-2'>{title}</h3>
          <p className='text-sm text-neutral-700 mb-4'>{description}</p>
          <div className='flex gap-2 justify-center'>
            <button
              className='w-[80px] h-[40px] bg-blue-500 text-primary-50 flex justify-center items-center rounded-md'
              onClick={handleEditClick}
            >
              <span className='material-symbols-outlined'>edit</span>
            </button>

            <button
              className='w-[80px] h-[40px] bg-red-500 text-primary-50 flex justify-center items-center rounded-md'
              onClick={handleDeleteClick}
            >
              <span className='material-symbols-outlined'>delete</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;