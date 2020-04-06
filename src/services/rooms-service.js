export default class RoomsService {

  _apiBase = 'http://localhost:3004';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    return await res.json();
  }

  getRooms = async () => {
    return await this.getResource('/rooms/');
  }

  getRoom = async (id) => {
    return await this.getResource(`/rooms/${id}`);
  }

  postRoom = async (data) => {
    const response = await fetch(`http://localhost:3004/rooms`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  }

  getUsers = async () => {
    return await this.getResource('/users/');
  }

  putUser = async (id, data) => {
    const response = await fetch(`${this._apiBase}/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  }

  putRooms = async (id, data) => {
    const response = await fetch(`${this._apiBase}/rooms/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),

    });
    return response.json();
  }

  deleteRoom = async (id) => {
    const response = await fetch(`${this._apiBase}/rooms/${id}`, {
      method: "DELETE"
    })

    return response.json();
  }

  deleteRoomsQueue = async (id) => {
    const response = await fetch(`${this._apiBase}/roomsQueue/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  }

  getRoomsQueue = async () => {
    return await this.getResource('/roomsQueue/');
  }

  postRoomsQueue = async (data) => {
    const response = await fetch(`${this._apiBase}/roomsQueue/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  }

  // getRooms() {
  //   return [
  //     {
  //       id: 1,
  //       name: '1',
  //       seats: 10,
  //       projector: true,
  //       board: true,
  //       description: 'самая маленькая комната, но самая совершенная(тут есть проектор и доска)',
  //       reservedTime: [
  //         {
  //           startDate: new Date(2020,1,26,13,0,0),
  //           endDate: new Date(2020,1,26,13,30,0),
  //           userName: 'Петров Петр'
  //         },
  //         {
  //           startDate: new Date(2020,1,26,13,0,0),
  //           endDate: new Date(2020,1,26,13,30,0),
  //           userName: 'Петров Петр'
  //         },
  //         {
  //           startDate: new Date(2020,1,26,13,0,0),
  //           endDate: new Date(2020,1,26,13,30,0),
  //           userName: 'Петров Петр'
  //         },
  //       ]
  //     },
  //     {
  //       id: 2,
  //       name: '2',
  //       seats: 11,
  //       projector: true,
  //       board: false,
  //       description: 'комната под номером 2',
  //       reservedTime: [
  //         {
  //           startDate: new Date(2020,1,26,13,0,0),
  //           endDate: new Date(2020,1,26,13,30,0),
  //           userName: 'Петров Петр'
  //         }
  //       ]
  //     },
  //     {
  //       id: 3,
  //       name: '3',
  //       seats: 11,
  //       projector: false,
  //       board: false,
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra lectus eget arcu dictum, at rutrum velit scelerisque. Maecenas dolor tortor, cursus vel fringilla vitae, mattis consectetur leo. Fusce condimentum pulvinar ante, eu egestas nibh pharetra id. Aliquam erat volutpat. Fusce et tellus turpis. Vestibulum non ultrices tellus. Etiam vulputate arcu odio, id porta nibh facilisis vitae. Cras faucibus augue vel orci tincidunt congue. Fusce tempus mauris eros, sed malesuada nisi pellentesque vitae. Suspendisse et nisl in ligula gravida varius nec ut felis. Donec et arcu et velit faucibus lacinia. In turpis ex, finibus at ipsum vel, tincidunt tempor risus.',
  //       reservedTime: [
  //         {
  //           startDate: new Date(2020,1,26,13,0,0),
  //           endDate: new Date(2020,1,26,13,30,0),
  //           userName: 'Петров Петр'
  //         }
  //       ]
  //     },
  //     {
  //       id: 4,
  //       name: '4',
  //       seats: 150,
  //       projector: false,
  //       board: true,
  //       description: '',
  //       reservedTime: []
  //     },
  //   ];
  // }

  // getRooms() {
  //   return [
  //     {
  //       id: 1,
  //       name: '1',
  //       seats: 10,
  //       projector: true,
  //       board: true,
  //       description: 'самая маленькая комната, но самая совершенная(тут есть проектор и доска)',
  //       reservedTime: [
  //         {
  //           date: '25.03.2016',
  //           startTime: '12:00',
  //           endTime: '13:00',
  //           userName: 'Петров Петр'
  //         },
  //         {
  //           date: '25.03.2016',
  //           startTime: '13:00',
  //           endTime: '14:00',
  //           userName: 'Петров Петр'
  //         },
  //         {
  //           date: '25.03.2016',
  //           startTime: '14:00',
  //           endTime: '15:00',
  //           userName: 'Петров Петр'
  //         },
  //       ]
  //     },
  //     {
  //       id: 2,
  //       name: '2',
  //       seats: 11,
  //       projector: true,
  //       board: false,
  //       description: 'комната под номером 2',
  //       reservedTime: [
  //         {
  //           date: '25.03.2016',
  //           startTime: '12:00',
  //           endTime: '13:00',
  //           userName: 'Петров Петр'
  //         }
  //       ]
  //     },
  //     {
  //       id: 3,
  //       name: '3',
  //       seats: 11,
  //       projector: false,
  //       board: false,
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra lectus eget arcu dictum, at rutrum velit scelerisque. Maecenas dolor tortor, cursus vel fringilla vitae, mattis consectetur leo. Fusce condimentum pulvinar ante, eu egestas nibh pharetra id. Aliquam erat volutpat. Fusce et tellus turpis. Vestibulum non ultrices tellus. Etiam vulputate arcu odio, id porta nibh facilisis vitae. Cras faucibus augue vel orci tincidunt congue. Fusce tempus mauris eros, sed malesuada nisi pellentesque vitae. Suspendisse et nisl in ligula gravida varius nec ut felis. Donec et arcu et velit faucibus lacinia. In turpis ex, finibus at ipsum vel, tincidunt tempor risus.',
  //       reservedTime: [
  //         {
  //           date: '25.03.2016',
  //           startTime: '12:00',
  //           endTime: '13:00',
  //           userName: 'Петров Петр'
  //         }
  //       ]
  //     },
  //     {
  //       id: 4,
  //       name: '4',
  //       seats: 150,
  //       projector: false,
  //       board: true,
  //       description: '',
  //       reservedTime: [
  //         {
  //           date: '25.03.2016',
  //           startTime: '12:00',
  //           endTime: '13:00',
  //           userName: 'Петров Петр'
  //         }
  //       ]
  //     },
  //   ];
  // }
}