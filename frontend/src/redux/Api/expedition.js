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
  bodyFormData.append('available', data.available);
  const response = await axios({
    method: 'post',
    url: `${baseUrl}expedition`,
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
    url: `${baseUrl}expeditions`,
  });
  return response;
};

export const getExpedition = async (id) => {
  const response = await axios({
    method: 'get',
    url: `${baseUrl}expeditions/${id}`,
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
  bodyFormData.append('available', data.available);
  
  const response = await axios({
    method: 'put',
    url: `${baseUrl}expeditions/${id}`,
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
    url: `${baseUrl}expeditions/${id}`,
    headers: {
      auth: authHeader(),
    },
  });
  return response;
};
