import axios from 'axios';
const baseUrl = 'https://kevent-rdc.herokuapp.com/api/v1/';

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return user.token;
  } else {
    return {};
  }
};



export const login = (data) => {
  return axios.post(`${baseUrl}signin`, data);
};

export const signup = (data) => {
  let bodyFormData = new FormData();
  bodyFormData.append('email', data.email);
  bodyFormData.append('password', data.password);
  bodyFormData.append('firstName', data.firstName);
  bodyFormData.append('lastName', data.lastName);
  bodyFormData.append('surname', data.surname);
  bodyFormData.append('phone', data.phone);
  bodyFormData.append('address', data.address);
  bodyFormData.append('sexe', data.sexe);
  bodyFormData.append('profession', data.profession);
  bodyFormData.append('imageUrls', data.imageUrls);
  bodyFormData.append('role', data.role);

  const response = axios({
    method: 'post',
    url: `${baseUrl}signup`,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response;
};

export const getUser = async (id) => {
  const response = await axios({
    method: 'get',
    url: `${baseUrl}users/${id}`,
    headers: {
      'Content-Type': 'application/json',
      auth: authHeader(),
    },
  });
  return response;
};

export const getUsers = async () => {
  const response = await axios({
    method: 'get',
    url: `${baseUrl}users`,
    headers: {
      'Content-Type': 'application/json',
      auth: authHeader(),
    },
  });
  return response;
};

export const updateUser = async (data, id) => {
  const response = await axios({
    method: 'put',
    url: `${baseUrl}users/${id}`,
    data: data,
    headers: {
      'Content-Type': 'application/json',
      auth: authHeader(),
    },
  });

  return response;
};

export const deleteUser = async (id) => {
  const response = await axios({
    method: 'delete',
    url: `${baseUrl}users/${id}`,
    headers: {
      'Content-Type': 'application/json',
      auth: authHeader(),
    },
  });
  return response;
};

export const resetPassword = async (data) => {
  console.log(data, 'data');
  const response = await axios({
    method: 'post',
    url: `${baseUrl}password-reset`,
    data: { email: data },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(response, 'response');

  return response;
};
// /api/v1/password-reset/:userId/:token
export const resetPasswordConfirm = async (data, userId, token) => {
  console.log(data, 'data');
  const response = await axios({
    method: 'post',
    url: `${baseUrl}password-reset/${userId}/${token}`,
    data: { password: data },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(response, 'response');

  return response;
};
