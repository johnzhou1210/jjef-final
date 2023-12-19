import React, { useState } from 'react';

function Sidebar() {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');

  const handleCreateList = () => {
    if (newListName.trim() !== '') {
      setLists([...lists, newListName]);
      setNewListName('');
    }
  };

  return (
    <div className='sidebar'>
      <h2>Navigation</h2>

      <div className='sidebar-button'>
        <div>
          <label>Create New List:</label>
          <input
            type='text'
            placeholder='New List Name'
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
          />
          <button onClick={handleCreateList}>Create List</button>
        </div>
      </div>

      <div className='sidebar-button'>
        <h3>MyList</h3>
        <ul>
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
