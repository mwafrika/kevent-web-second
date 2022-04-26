import { toast } from 'react-toastify';

export const resolvePromise = (response, pendingMessage) => {
  const resolveAfter2Seconds = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
  toast.promise(
    resolveAfter2Seconds,
    {
      pending: pendingMessage,
      success: response.data.message,
      error: response.data.message,
    },
    {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    }
  );
};

export const rejectPromise = (error, pendingMessage) => {
  const rejectAfter2Seconds = new Promise((resolve, reject) => {
    setTimeout(reject, 2000);
  });

  toast.promise(
    rejectAfter2Seconds,
    {
      pending: pendingMessage,
      success: error.response.data.message,
      error: error.response.data.message,
    },
    {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    }
  );
};
