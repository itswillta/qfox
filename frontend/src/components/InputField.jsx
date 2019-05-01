import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field } from 'react-final-form';

import TextField from '@material-ui/core/TextField';

const renderTextField = ({
  label,
  input,
  variant = 'outlined',
  placeholder,
  serverError,
  meta: { touched, error },
  ...rest
}) => (
  <TextField
    label={label}
    placeholder={placeholder}
    error={touched && (!!serverError || !!error)}
    helperText={touched && (serverError || error)}
    variant={variant}
    fullWidth
    {...input}
    {...rest}
  />
);

const InputField = ({ name, label, ...rest }) => {
  const { t } = useTranslation();

  return <Field name={name} label={t(label)} component={renderTextField} {...rest} />;
};

export default InputField;
