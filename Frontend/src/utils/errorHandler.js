// src/utils/errorHandler.js
import { toast } from 'react-toastify';

const handleError = (error) => {
  let message;
  if (error.response) {
    message = error.response.data?.message || 'Something went wrong on the server.';
    toast.error(message);
  } else if (error.request) {
    message = 'No response from server. Check your internet connection.';
    toast.error(message);
  } else {
    message = error.message || 'Unexpected error occurred.';
    toast.error(message);
  }
};

export default handleError;
