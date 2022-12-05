import axios from "axios";
const baseUrl = "https://kevent.onrender.com/api/v1/";

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    return user.token;
  } else {
    return {};
  }
};

export const createPackage = async (data) => {
  let bodyFormData = new FormData();
  let user;

  user = JSON.parse(localStorage.getItem("user"));
  console.log(user, "token in create package not empty");
  console.log(authHeader(), "check header function");

  bodyFormData.append("title", data.title);
  bodyFormData.append("description", data.description);
  bodyFormData.append("price", data.price);
  bodyFormData.append("imageUrls", data.imageUrls);
  bodyFormData.append("itineraire", data.itineraire);
  bodyFormData.append("metadata", data.metadata);
  bodyFormData.append("places", data.places);
  bodyFormData.append("tags", data.tags);
  bodyFormData.append("created_at", data.created_at);
  bodyFormData.append("available", data.available);

  const response = await axios({
    method: "post",
    url: `${baseUrl}package`,
    data: bodyFormData,
    headers: {
      "Content-Type": "multipart/form-data",
      auth: authHeader(),
    },
  });
  console.log(user.token, "my new token");
  return response;
};

export const getPackages = async () => {
  const response = await axios({
    method: "get",
    url: `${baseUrl}packages`,
  });
  return response;
};

export const getPackage = async (id) => {
  const response = await axios({
    method: "get",
    url: `${baseUrl}packages/${id}`,
  });
  return response;
};

export const updatePackage = async (id, data) => {
  let bodyFormData = new FormData();

  bodyFormData.append("title", data.title);
  bodyFormData.append("description", data.description);
  bodyFormData.append("price", data.price);
  bodyFormData.append("imageUrls", data.imageUrls);
  bodyFormData.append("itineraire", data.itineraire);
  bodyFormData.append("metadata", data.metadata);
  bodyFormData.append("places", data.places);
  bodyFormData.append("tags", data.tags);
  bodyFormData.append("available", data.available);

  const response = await axios({
    method: "put",
    url: `${baseUrl}packages/${id}`,
    data: bodyFormData,
    headers: {
      "Content-Type": "multipart/form-data",
      auth: authHeader(),
    },
  });
  return response;
};

export const deletePackage = async (id) => {
  const response = await axios({
    method: "delete",
    url: `${baseUrl}packages/${id}`,
    headers: {
      auth: authHeader(),
    },
  });
  return response;
};
