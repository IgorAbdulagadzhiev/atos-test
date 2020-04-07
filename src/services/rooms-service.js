export default class RoomsService {

  _apiBase = 'http://localhost:3004';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    return await res.json();
  }

  postResource = async (url, data) => {
    const response = await fetch(`${this._apiBase}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await response.json();
  }

  deleteResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`, {
      method: "DELETE"
    })
    return await response.json();
  }

  putResource = async (url, data) => {
    const response = await fetch(`${this._apiBase}${url}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  }

  getRooms = async () => {
    return await this.getResource('/rooms/');
  }

  getRoom = async (id) => {
    return await this.getResource(`/rooms/${id}`);
  }

  postRoom = async (data) => {
    return this.postResource(`/rooms`, data)
  }

  getUsers = async () => {
    return await this.getResource('/users/');
  }

  putUser = async (id, data) => {
    return await this.putResource(`/users/${id}`, data)
  }

  putRooms = async (id, data) => {
    return await this.putResource(`/rooms/${id}`, data)
  }

  deleteRoom = async (id) => {
    return await this.deleteResource(`/rooms/${id}`);
  }

  deleteRoomsQueue = async (id) => {
    return await this.deleteResource(`/roomsQueue/${id}`);
  }

  getRoomsQueue = async () => {
    return await this.getResource('/roomsQueue/');
  }

  postRoomsQueue = async (data) => {
    return await this.postResource('/roomsQueue/', data);
  }
}