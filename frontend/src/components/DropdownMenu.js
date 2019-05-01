import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field } from 'react-final-form';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Input from '@material-ui/core/Input';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  }

  return <FormHelperText>{touched && error}</FormHelperText>;
};

const SelectField = ({ label, input, name, items, variant, meta: { touched, error }, ...rest }) => {
  const { t } = useTranslation();

  let inputComponent = <FilledInput name={name} />;

  if (variant === 'outlined') {
    inputComponent = <OutlinedInput name={name} />;
  } else if (variant === 'standard') {
    inputComponent = <Input name={name} />;
  }

  return (
    <FormControl variant={variant} error={touched && error}>
      <InputLabel>{t(label)}</InputLabel>
      <Select input={inputComponent} {...input} {...rest}>
        {items.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {t(item.label)}
          </MenuItem>
        ))}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
};

const DropdownMenu = ({ variant = 'filled', name, label, items, ...rest }) => (
  <Field
    name={name}
    label={label}
    items={items}
    variant={variant}
    component={SelectField}
    {...rest}
  />
);

export default DropdownMenu;
