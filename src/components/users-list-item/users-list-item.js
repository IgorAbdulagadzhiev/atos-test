import React, { useState, useContext } from 'react';

import RoomsServiceContext from '../rooms-service-context';

const UsersListItem = ({ user }) => {
  const roomsService = useContext(RoomsServiceContext);
  const [admin, setAdmin] = useState(user.admin);

  const checkboxHandler = (e) => {
    setAdmin(e.target.checked);
    const newUser = {
      ...user,
      admin: e.target.checked
    }
    roomsService.putUser(user.id ,newUser).then((data) => {
    });
  }


  return (
    <>
      <span>{user.name}</span>
      <input 
      type="checkbox"
      className="ml-4"
      checked={admin} 
      onChange={checkboxHandler} 
      />
    </>
  )
}

export default UsersListItem;