import React from 'react';
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';

import TextField from '@material-ui/core/TextField';

const renderTextField = ({
  label,
  input,
  placeholder,
  serverError,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={placeholder}
    error={touched && (!!serverError || invalid)}
    helperText={touched && (serverError || error)}
    {...input}
    {...custom}
  />
);

const InputField = ({
  label,
  name,
  onChange,
  variant = 'outlined',
  serverError,
  placeholder = '',
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <Field
      name={name}
      label={t(label)}
      placeholder={t(placeholder)}
      serverError={t(serverError)}
      variant={variant}
      component={renderTextField}
      fullWidth
      {...props}
    />
  );
};

export default InputField;
