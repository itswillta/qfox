import React from 'react';
import { useFormik, FormikProvider } from 'formik';

const Form = ({ initialValues, validationSchema, onSubmit, children, ...props }) => {
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} {...props}>
        {children}
      </form>
    </FormikProvider>
  );
};

export default Form;
