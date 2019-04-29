const syncValidate = schema => values => {
  const formErrors = {};
  try {
    schema.validateSync(values, { abortEarly: false });
  } catch (errors) {
    errors.inner.forEach(error => {
      formErrors[error.path] = error.message;
    });
  }
  return formErrors;
};

export default syncValidate;
