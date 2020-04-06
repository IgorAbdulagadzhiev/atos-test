module.exports = () => {

  const data = {
    rooms: [
      {
        id: 1,
        name: '1',
        seats: 10,
        projector: true,
        board: true,
        description: 'самая маленькая комната, но самая совершенная(тут есть проектор и доска)',
        reservedTime: [
          {
            title: 'Мероприятие',
            startDate: new Date(2020,1,26,13,0,0),
            endDate: new Date(2020,1,26,13,30,0),
            userName: 'Петров Петр'
          },
          {
            title: 'Мероприятие',
            startDate: new Date(2020,1,26,13,0,0),
            endDate: new Date(2020,1,26,13,30,0),
            userName: 'Петров Петр'
          },
          {
            title: 'Мероприятие',
            startDate: new Date(2020,1,26,13,0,0),
            endDate: new Date(2020,1,26,13,30,0),
            userName: 'Петров Петр'
          },
        ]
      },
      {
        id: 2,
        name: '2',
        seats: 11,
        projector: true,
        board: false,
        description: 'комната под номером 2',
        reservedTime: [
          {
            title: 'Мероприятие',
            startDate: new Date(2020,1,26,13,0,0),
            endDate: new Date(2020,1,26,13,30,0),
            userName: 'Петров Петр'
          }
        ]
      },
      {
        id: 3,
        name: '3',
        seats: 11,
        projector: false,
        board: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra lectus eget arcu dictum, at rutrum velit scelerisque. Maecenas dolor tortor, cursus vel fringilla vitae, mattis consectetur leo. Fusce condimentum pulvinar ante, eu egestas nibh pharetra id. Aliquam erat volutpat. Fusce et tellus turpis. Vestibulum non ultrices tellus. Etiam vulputate arcu odio, id porta nibh facilisis vitae. Cras faucibus augue vel orci tincidunt congue. Fusce tempus mauris eros, sed malesuada nisi pellentesque vitae. Suspendisse et nisl in ligula gravida varius nec ut felis. Donec et arcu et velit faucibus lacinia. In turpis ex, finibus at ipsum vel, tincidunt tempor risus.',
        reservedTime: [
          {
            title: 'Мероприятие',
            startDate: new Date(2020,1,26,13,0,0),
            endDate: new Date(2020,1,26,13,30,0),
            userName: 'Петров Петр'
          }
        ]
      },
      {
        id: 4,
        name: '4',
        seats: 150,
        projector: false,
        board: true,
        description: '',
        reservedTime: []
      },
    ],
    users: [
      {
        id: 1,
        name: 'Вася Петров',
        login: 'user',
        password: '12345',
        admin: false,
      },
      {
        id: 2,
        name: 'Вася Васин',
        login: 'admin',
        password: '12345',
        admin: true
      }
    ],
    roomsQueue: [
      {
        id: 1,
        roomId: 1,
        reservedTime: 
          {
            title: 'Мероприятие',
            startDate: new Date(2020,1,26,13,0,0),
            endDate: new Date(2020,1,26,13,30,0),
            userName: 'Петров Петр'
          }
      }
    ]
  }
  return data;
}