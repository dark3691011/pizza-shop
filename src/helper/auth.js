import jwt_decode from 'jwt-decode';

export const IsAuth = () => {
  const token = localStorage.getItem('token');
  if (token) return true;
  return false;
};

export const IsAdmin = () => {
  if (IsAuth()) {
    const token = localStorage.getItem('token');
    const role = jwt_decode(token).roles[0].authority;
    if (role.includes('ADMIN')) return true;
    return false;
  }
};
