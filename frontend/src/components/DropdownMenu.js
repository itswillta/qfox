import React from 'react';
import { useTranslation } from 'react-i18next';
import { useField } from 'formik';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Input from '@material-ui/core/Input';

const DropdownMenu = ({ variant = 'filled', name, label, items, ...selectProps }) => {
  const [field, meta] = useField(name);
  const errorText = meta.touch && meta.error;

  const { t } = useTranslation();

  let inputComponent = <FilledInput name={name} />;

  if (variant === 'outlined') {
    inputComponent = <OutlinedInput name={name} />;
  } else if (variant === 'standard') {
    inputComponent = <Input name={name} />;
  }

  return (
    <FormControl variant={variant} error={!!errorText}>
      <InputLabel>{t(label)}</InputLabel>
      <Select input={inputComponent} {...field} {...selectProps}>
        {items.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {t(item.label)}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{t(errorText)}</FormHelperText>
    </FormControl>
  );
};

export default DropdownMenu;
