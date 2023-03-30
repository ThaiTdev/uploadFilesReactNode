import Axios from "../api/axios";

let upload = (data) => {
  return Axios.post(`/upload`, data);
};

export const accountServices = {
  upload,
};
