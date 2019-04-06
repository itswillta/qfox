import React from 'react';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

import ViewPermissionIcon from '@material-ui/icons/Visibility';
import EditPermissionIcon from '@material-ui/icons/Edit';

import useStyles from './createStudySet/CreateStudySet.styles';
import Form from '../components/Form';
import InputField from '../components/InputField';
import DropdownMenu from '../components/DropdownMenu';

const viewPermission = [
  { value: 'everyone', label: 'Everyone' },
  { value: 'logged_in_users', label: 'Logged-in users' },
  { value: 'just_me', label: 'Just me' }
];

const editPermission = [
  { value: 'logged_in_users', label: 'Logged-in users' },
  { value: 'just_me', label: 'Just me' }
];

const CreateStudySet = () => {
  const classes = useStyles();

  const handleSubmit = values => console.log(values);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Form
          name="createStudySetForm"
          noValidate
          initialValues={{
            title: '',
            viewPermission: viewPermission[0].value,
            editPermission: editPermission[0].value
          }}
          onSubmit={handleSubmit}
        >
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography className={classes.headerText} variant="h5">
                Create a new study set
              </Typography>
            </Grid>
            <Grid item>
              <Button
                className={clsx('button-secondary', classes.headerCreateButton)}
                variant="contained"
                type="submit"
              >
                Create
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="space-between" alignItems="center">
            <Grid item md={6} xs={12}>
              <InputField
                required
                label="Title"
                name="title"
                variant="standard"
                helperText="Subject, chapter, unit, etc"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid container justify="flex-end" spacing={2}>
                <Grid item>
                  <DropdownMenu
                    name="viewPermission"
                    label="Visible to"
                    startAdornment={
                      <InputAdornment position="start">
                        <ViewPermissionIcon />
                      </InputAdornment>
                    }
                    items={viewPermission}
                  />
                </Grid>
                <Grid item>
                  <DropdownMenu
                    name="editPermission"
                    label="Editable by"
                    startAdornment={
                      <InputAdornment position="start">
                        <EditPermissionIcon />
                      </InputAdornment>
                    }
                    items={editPermission}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </div>
    </div>
  );
};

export default CreateStudySet;
