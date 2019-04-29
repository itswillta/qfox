import React from 'react';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import useStyles from './studySetEditor/StudySetEditor.styles';
import StudySetBasicFields from './studySetEditor/StudySetBasicFields';
import { viewPermissions, editPermissions } from './studySetEditor/studySetPermissions';
import { termDefaultObject } from './studySetEditor/termDefaultObject';
import TermEditorGroup from './studySetEditor/TermEditorGroup';

const StudySetEditor = () => {
  const classes = useStyles();

  const handleSubmit = values => console.log(values);

  return (
    <div className={classes.root}>
      <form
        name="createStudySetForm"
        noValidate
        initialValues={{
          title: '',
          viewPermission: viewPermissions[0].value,
          editPermission: editPermissions[0].value,
          terms: [0, 1].map(() => ({ ...termDefaultObject }))
        }}
        onSubmit={handleSubmit}
        className={classes.form}
      >
        <div className={classes.header}>
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
          <StudySetBasicFields classes={classes} />
        </div>
        <div className={classes.body}>
          <TermEditorGroup classes={classes} />
        </div>
      </form>
    </div>
  );
};

export default StudySetEditor;
