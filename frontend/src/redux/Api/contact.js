// booking APIs
import axios from 'axios';
const baseUrl = 'https://kevent-rdc.herokuapp.com/api/v1/';

// bookExpeditions
export const CreateMessage = async (data, id) => {
  const response = await axios({
    method: 'post',
    url: `${baseUrl}expeditions/${id}`,
    data: data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};
