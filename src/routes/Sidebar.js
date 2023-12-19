import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveList, addList, removeList } from '../app/userListsSlice';
import { Link } from 'react-router-dom';

function Sidebar() {
  const dispatch = useDispatch();
  const { lists, activeListId } = useSelector((state) => state.userLists);

  const [newListName, setNewListName] = useState('');

  const handleListClick = (listId) => {
    dispatch(setActiveList(listId));
  };

  const handleNewListClick = () => {
    if (newListName.trim() !== '') {
      dispatch(addList({ name: newListName }));
      setNewListName('');
    }
  };

  const handleRemoveList = (listId) => {
    dispatch(removeList(listId));
  };

  return (
    <div className='sidebar'>
      <h2>Navigation</h2>
      {/* New List Button */}
      <div>
        <input
          type="text"
          placeholder="Enter list name"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
        />
        <button className='new-list-button' onClick={handleNewListClick}>
          New List
        </button>
      </div>
      <div className='sidebar-button'>Home</div>

      <h3>My Lists</h3>
      <ul className="lists">
        {lists.map((list) => (
          <li
            key={list.id}
            onClick={() => handleListClick(list.id)}
            className={list.id === activeListId ? 'active-list' : ''}
          >
            {list.name || `List ${list.id}`}
            {/*<button onClick={() => handleRemoveList(list.id)}>Delete</button>*/}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
