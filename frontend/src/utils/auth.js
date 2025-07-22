export const setToken = (token) => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');
export const removeToken = () => localStorage.removeItem('token');

export const setUser = (user) => localStorage.setItem('user', JSON.stringify(user));
export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
export const removeUser = () => localStorage.removeItem('user');


export const isAuthorized = () => {
  const token = getToken();
  const user = getUser();
  return !!token && !!user; /// Boolean(token)
};

// "rumaha" !username === flase
// "rumaha" !!username === true
// 0 !!username === flase