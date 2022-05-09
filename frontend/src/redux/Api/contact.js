// booking APIs
import axios from 'axios';
const baseUrl = 'https://kevent-rdc.herokuapp.com/api/v1/';

// bookExpeditions
export const CreateMessage = async (data, expeditionId) => {
  const response = await axios({
    method: 'post',
    url: `${baseUrl}contact-us`,
    data: data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};
