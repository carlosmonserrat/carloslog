export const SAY_SOMETHING = 'SAY_SOMETHING';
export const SAID_SOMETHING_SUCCEED = 'SAID_SOMETHING_SUCCEED';

export const saySomething = (message,formik) => {
  return {
    type: SAY_SOMETHING,
    message: message,
    formik:formik
  }
};

export const saySomethingSucceed = (message) => ({
  type: SAID_SOMETHING_SUCCEED,
  message: message,
});


