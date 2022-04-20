import axios from 'axios';
const loginUrl = 'http://localhost:5000/api/v1/signin';
const signupUrl = 'http://localhost:5000/api/v1/signup';
const createPackageUrl = 'http://localhost:5000/api/v1/package';
const getAll = 'http://localhost:5000/api/v1/packages';
const getOne = 'http://localhost:5000/api/v1/packages/';
const updatePackageUrl = 'http://localhost:5000/api/v1/packages/';

export const login = (data) => {
  return axios.post(loginUrl, data);
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
    url: signupUrl,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response;
};

export const createPackage = async (data) => {
  let bodyFormData = new FormData();
  let user;

  if (user != null) {
    user = JSON.parse(localStorage.getItem('user'));
    console.log(user, 'token in create package not empty');
  }
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
      auth: user,
    },
  });
  console.log(user, 'my new token');
  return response;
};

export const getPackages = () => {
  const response = axios({
    method: 'get',
    url: getAll,
  });
  return response;
};

export const getPackage = (id) => {
  const response = axios({
    method: 'get',
    url: `${getOne}${id}`,
  });
  return response;
};

export const updatePackage = (id, data) => {
  let bodyFormData = new FormData();

  bodyFormData.append('title', data.title);
  bodyFormData.append('description', data.description);
  bodyFormData.append('price', data.price);
  bodyFormData.append('imageUrls', data.imageUrls);
  bodyFormData.append('itineraire', data.itineraire);
  bodyFormData.append('metadata', data.metadata);
  bodyFormData.append('places', data.places);
  bodyFormData.append('tags', data.tags);

  const token = JSON.parse(localStorage.getItem('user').token);
  console.log(token, 'check toke error');

  const response = axios({
    method: 'put',
    url: `${updatePackageUrl}${id}`,
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
      auth: token,
    },
  });
  return response;
};
