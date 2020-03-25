import React from 'react';
import { RoomsServiceConsumer } from '../rooms-service-context';

const withRoomsService = () => (Wrapped) => {

  return (props) => {
    return (
      <RoomsServiceConsumer>
        {
          (roomsService) => {
            <Wrapped {...props} roomsService={roomsService}/>
          }
        }
      </RoomsServiceConsumer>
    );
  }
};

export default withRoomsService;