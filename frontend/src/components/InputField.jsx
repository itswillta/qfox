import React from 'react';
import { useField } from 'formik';
import { useTranslation } from 'react-i18next';

import TextField from '@material-ui/core/TextField';

const InputField = ({ label, name, onChange, variant, serverError, ...props }) => {
  const [field, meta] = useField(name);
  const errorText = meta.touch && meta.error;

  const { t } = useTranslation();

  return (
    <TextField
      required
      label={t(label)}
      margin="normal"
      variant={variant || 'outlined'}
      name={name}
      helperText={t(errorText) || t(serverError)}
      error={!!errorText || !!serverError}
      fullWidth
      {...field}
      {...props}
    />
  );
};

export default InputField;
