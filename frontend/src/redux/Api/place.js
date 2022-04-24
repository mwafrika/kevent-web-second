import axios from 'axios';
const baseUrl = 'http://localhost:5000/api/v1/';

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return user.token;
  } else {
    return {};
  }
};
export const createPlace = async (data) => {
  let bodyFormData = new FormData();

  bodyFormData.append('name', data.name);
  bodyFormData.append('addresse', data.addresse);
  bodyFormData.append('description', data.description);
  bodyFormData.append('tags', data.tags);
  bodyFormData.append('latLng', data.latLng);
  bodyFormData.append('imageUrls', data.imageUrls);

  const response = await axios({
    method: 'post',
    url: `${baseUrl}place`,
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
      auth: authHeader(),
    },
  });
  return response;
};

export const getPlaces = async () => {
  const response = await axios({
    method: 'get',
    url: `${baseUrl}places`,
  });
  return response;
};

export const getPlace = async (id) => {
  const response = await axios({
    method: 'get',
    url: `${baseUrl}places/${id}`,
  });
  return response;
};

export const updatePlace = async (id, data) => {
  let bodyFormData = new FormData();
  bodyFormData.append('name', data.name);
  bodyFormData.append('addresse', data.addresse);
  bodyFormData.append('description', data.description);
  bodyFormData.append('tags', data.tags);
  bodyFormData.append('latLng', data.latLng);
  bodyFormData.append('imageUrls', data.imageUrls);

  const response = await axios({
    method: 'put',
    url: `${baseUrl}places/${id}`,
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
      auth: authHeader(),
    },
  });
  return response;
};

export const deletePlace = async (id) => {
  const response = await axios({
    method: 'delete',
    url: `${baseUrl}places/${id}`,
    headers: {
      auth: authHeader(),
    },
  });
  return response;
};
