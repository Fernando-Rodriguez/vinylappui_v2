const UserStore = {
  saveUser: (user) => {
    localStorage.setItem('localUser', JSON.stringify(user));
  },
  loadUser: () => {
    localStorage.getItem('localUser');
  },
  removeUser: () => {
    localStorage.removeItem('localUser');
  },
};

export default UserStore;
