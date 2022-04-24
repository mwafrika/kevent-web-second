import axios from 'axios';
const baseUrl = 'http://localhost:5000/api/v1/';

export const login = async (data) => {
  return await axios.post(`${baseUrl}signin`, data);
};

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
    url: `${baseUrl}signup`,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response;
};
