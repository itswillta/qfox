import React from 'react';

import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

import ViewPermissionIcon from '@material-ui/icons/Visibility';
import EditPermissionIcon from '@material-ui/icons/Edit';

import InputField from '../../InputField';
import DropdownMenu from '../../DropdownMenu';
import { viewPermissions, editPermissions } from './studySetPermissions';

const CreateStudySetBasicFields = ({ classes }) => (
  <Grid className={classes.basicFieldGroup} container justify="space-between" alignItems="center">
    <Grid item md={6} xs={12}>
      <InputField
        required
        label="Title"
        name="title"
        variant="standard"
        placeholder="Subject, chapter, unit, etc"
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
            items={viewPermissions}
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
            items={editPermissions}
          />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default CreateStudySetBasicFields;
