import React from 'react';

const {
  Provider: RoomsServiceProvider,
  Consumer: RoomsServiceConsumer,
} = React.createContext();

export {
  RoomsServiceConsumer,
  RoomsServiceProvider
};