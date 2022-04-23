// booking APIs
import axios from 'axios';
const createBookPack = 'http://localhost:5000/api/v1/';

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return user.token;
  } else {
    return {};
  }
};

export const createBookPackage = async (data, packageId) => {
  const response = await axios({
    method: 'post',
    url: `${createBookPack}${packageId}/bookPackage`,
    data: data,
    headers: {
      'Content-Type': 'application/json',
      auth: authHeader(),
    },
  });
  return response;
};

export const getAllBooking = async () => {
  const response = await axios({
    method: 'get',
    url: `${createBookPack}bookPackages`,
    headers: {
      'Content-Type': 'application/json',
      auth: authHeader(),
    },
  });
  return response;
};

export const getOneBooking = async (id) => {
  const response = await axios({
    method: 'get',
    url: `${createBookPack}bookPackages/${id}`,
    headers: {
      'Content-Type': 'application/json',
      auth: authHeader(),
    },
  });
  return response;
};

export const updateBooking = async (data, id) => {
  const response = await axios({
    method: 'put',
    url: `${createBookPack}bookPackages/${id}`,
    data: data,
    headers: {
      'Content-Type': 'application/json',
      auth: authHeader(),
    },
  });
  return response;
};

export const deleteBooking = async (id) => {
  const response = await axios({
    method: 'delete',
    url: `${createBookPack}bookPackages/${id}`,
    headers: {
      'Content-Type': 'application/json',
      auth: authHeader(),
    },
  });
  return response;
};
