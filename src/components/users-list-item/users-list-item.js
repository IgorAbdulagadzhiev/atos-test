import React, { useState, useContext } from 'react';

import RoomsServiceContext from '../rooms-service-context';

const UsersListItem = ({ user }) => {
  const roomsService = useContext(RoomsServiceContext);
  const [admin, setAdmin] = useState(user.admin);
  console.log(admin);

  const checkboxHandler = (e) => {
    setAdmin(e.target.checked);
    const newUser = {
      ...user,
      admin: e.target.checked
    }
    console.log(newUser);
    roomsService.putUser(user.id ,newUser).then((data) => {
      console.log(data);
    });
  }


  return (
    <>
      <span>{user.name}</span>
      <input 
      type="checkbox" 
      checked={admin} 
      onChange={checkboxHandler} 
      />
    </>
  )
}

export default UsersListItem;