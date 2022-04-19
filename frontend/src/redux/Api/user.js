import axios from 'axios';
const loginUrl = 'http://localhost:5000/api/v1/signin';
const signupUrl = 'http://localhost:5000/api/v1/signup';

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
