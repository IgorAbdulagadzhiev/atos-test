import {useEffect, useContext } from 'react';
import RoomsServiceContext from '../components/rooms-service-context';

const useRoomsLoaded = (actionCreator) => {
  const roomsService = useContext(RoomsServiceContext);
  
  useEffect(() => {
    roomsService.getRooms().then((data) => {
      actionCreator(data);
    })
  }, [actionCreator, roomsService]);
}

export default useRoomsLoaded;