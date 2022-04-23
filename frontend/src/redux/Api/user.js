import axios from 'axios';

// User Authentication
const loginUrl = 'http://localhost:5000/api/v1/signin';
const signupUrl = 'http://localhost:5000/api/v1/signup';

// packages
const createPackageUrl = 'http://localhost:5000/api/v1/package';
const getAll = 'http://localhost:5000/api/v1/packages';
const getOne = 'http://localhost:5000/api/v1/packages/';
const updatePackageUrl = 'http://localhost:5000/api/v1/packages/';
const deletePackageUrl = 'http://localhost:5000/api/v1/packages/';

// expeditions
const createExpeditionUrl = 'http://localhost:5000/api/v1/expedition';
const getAllExpedition = 'http://localhost:5000/api/v1/expeditions';
const getOneExpedition = 'http://localhost:5000/api/v1/expeditions/';
const updateExpeditionUrl = 'http://localhost:5000/api/v1/expeditions/';
const deleteExpeditionUrl = 'http://localhost:5000/api/v1/expeditions/';

export const login = async (data) => {
  return await axios.post(loginUrl, data);
};

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return user.token;
  } else {
    return {};
  }
};
// package
export const signup = async (data) => {
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

  const response = await axios({
    method: 'post',
    url: signupUrl,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response;
};

export const createPackage = async (data) => {
  let bodyFormData = new FormData();
  let user;

  user = JSON.parse(localStorage.getItem('user'));
  console.log(user, 'token in create package not empty');
  console.log(authHeader(), 'check header function');

  bodyFormData.append('title', data.title);
  bodyFormData.append('description', data.description);
  bodyFormData.append('price', data.price);
  bodyFormData.append('imageUrls', data.imageUrls);
  bodyFormData.append('itineraire', data.itineraire);
  bodyFormData.append('metadata', data.metadata);
  bodyFormData.append('places', data.places);
  bodyFormData.append('tags', data.tags);

  const response = await axios({
    method: 'post',
    url: createPackageUrl,
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
      auth: authHeader(),
    },
  });
  console.log(user.token, 'my new token');
  return response;
};

export const getPackages = async () => {
  const response = await axios({
    method: 'get',
    url: getAll,
  });
  return response;
};

export const getPackage = async (id) => {
  const response = await axios({
    method: 'get',
    url: `${getOne}${id}`,
  });
  return response;
};

export const updatePackage = async (id, data) => {
  let bodyFormData = new FormData();

  bodyFormData.append('title', data.title);
  bodyFormData.append('description', data.description);
  bodyFormData.append('price', data.price);
  bodyFormData.append('imageUrls', data.imageUrls);
  bodyFormData.append('itineraire', data.itineraire);
  bodyFormData.append('metadata', data.metadata);
  bodyFormData.append('places', data.places);
  bodyFormData.append('tags', data.tags);

  const response = await axios({
    method: 'put',
    url: `${updatePackageUrl}${id}`,
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
      auth: authHeader(),
    },
  });
  return response;
};

export const deletePackage = async (id) => {
  const response = await axios({
    method: 'delete',
    url: `${deletePackageUrl}${id}`,
    headers: {
      auth: authHeader(),
    },
  });
  return response;
};

// expeditions
export const createExpedition = async (data) => {
  let bodyFormData = new FormData();

  bodyFormData.append('title', data.title);
  bodyFormData.append('description', data.description);
  bodyFormData.append('price', data.price);
  bodyFormData.append('imageUrls', data.imageUrls);
  bodyFormData.append('itineraire', data.itineraire);
  bodyFormData.append('metadata', data.metadata);
  bodyFormData.append('places', data.places);
  bodyFormData.append('tags', data.tags);
  bodyFormData.append('start_date', data.start_date);
  bodyFormData.append('end_date', data.end_date);

  const response = await axios({
    method: 'post',
    url: createExpeditionUrl,
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
      auth: authHeader(),
    },
  });
  return response;
};

export const getExpeditions = async () => {
  const response = await axios({
    method: 'get',
    url: getAllExpedition,
  });
  return response;
};

export const getExpedition = async (id) => {
  const response = await axios({
    method: 'get',
    url: `${getOneExpedition}${id}`,
  });
  return response;
};

export const updateExpedition = async (id, data) => {
  let bodyFormData = new FormData();

  bodyFormData.append('title', data.title);
  bodyFormData.append('description', data.description);
  bodyFormData.append('price', data.price);
  bodyFormData.append('imageUrls', data.imageUrls);
  bodyFormData.append('itineraire', data.itineraire);
  bodyFormData.append('metadata', data.metadata);
  bodyFormData.append('places', data.places);
  bodyFormData.append('tags', data.tags);
  bodyFormData.append('start_date', data.start_date);
  bodyFormData.append('end_date', data.end_date);

  const response = await axios({
    method: 'put',
    url: `${updateExpeditionUrl}${id}`,
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
      auth: authHeader(),
    },
  });
  return response;
};

export const deleteExpedition = async (id) => {
  const response = await axios({
    method: 'delete',
    url: `${deleteExpeditionUrl}${id}`,
    headers: {
      auth: authHeader(),
    },
  });
  return response;
};

// Booking APIs for user
