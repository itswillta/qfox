/* eslint-disable indent */
import React from 'react';
import clsx from 'clsx';
import { useSelector, useRedux } from 'react-redux';
import { useTranslation } from 'react-i18next';
// import { Prompt } from 'react-router-dom';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import StudySetBasicFields from './studySetEditorForm/StudySetBasicFields';
import TermEditorGroup from './studySetEditorForm/TermEditorGroup';
import createStudySetSchema from './studySetEditorForm/createStudySetSchema';
import syncValidate from '../../utils/formValidator/syncValidate';
import { viewPermissions, editPermissions } from './studySetEditorForm/studySetPermissions';
import { termDefaultObject } from './studySetEditorForm/termDefaultObject';
import { studySetActions } from '../../states/studySets';

const initialValues = {
  title: '',
  viewPermission: viewPermissions[0].value,
  editPermission: editPermissions[0].value,
  terms: [0, 1].map(() => ({ ...termDefaultObject }))
};

const StudySetEditorForm = ({ classes, mode, studySet }) => {
  const { t } = useTranslation();

  const currentUserProfile = useSelector(state => state.auth.userProfile);

  const [createAsyncStatus, { createStudySet }] = useRedux(
    state => state.studySetAsyncStatus.createStatus,
    {
      createStudySet: (userId, studySetInfo) =>
        studySetActions.create.pending({ userId, studySetInfo })
    }
  );

  const [updateAsyncStatus, { updateStudySet }] = useRedux(
    state => state.studySetAsyncStatus.updateStatus,
    {
      updateStudySet: (userId, studySetId, updateFields) =>
        studySetActions.update.pending({ userId, studySetId, updateFields })
    }
  );

  const handleSubmitStudySetForm = values => {
    if (mode === 'create') {
      createStudySet(currentUserProfile.id, values);
      return;
    }

    updateStudySet(studySet.owner.id, studySet.id, values);
  };

  return (
    <Form
      onSubmit={handleSubmitStudySetForm}
      initialValues={
        mode === 'create'
          ? initialValues
          : {
              title: studySet.title,
              viewPermission: studySet.viewPermission,
              editPermission: studySet.editPermission,
              terms: studySet.terms
            }
      }
      subscription={{ submitting: true, pristine: true }}
      mutators={{ ...arrayMutators }}
      validate={syncValidate(createStudySetSchema)}
      render={({ handleSubmit, form }) => (
        <React.Fragment>
          {/* <Prompt
             when={!pristine}
             message={t('You have some unsaved changes. Are you sure you want to leave now?')}
          /> */}
          <form
            name="createStudySetForm"
            onSubmit={handleSubmit}
            className={classes.form}
            disabled={createAsyncStatus.isLoading || updateAsyncStatus.isLoading}
            noValidate
          >
            <div className={classes.header}>
              <Grid container direction="row" justify="space-between">
                <Grid item>
                  <Typography className={classes.headerText} variant="h5">
                    {t('Create a new study set')}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    className={clsx('button-secondary', classes.headerCreateButton)}
                    variant="contained"
                    type="submit"
                    disabled={createAsyncStatus.isLoading || updateAsyncStatus.isLoading}
                  >
                    {t(mode === 'create' ? 'Create' : 'Edit')}
                  </Button>
                </Grid>
              </Grid>
              <StudySetBasicFields classes={classes} />
            </div>
            <div className={classes.body}>
              <TermEditorGroup classes={classes} />
              <Grid container justify="flex-end">
                <Grid item>
                  <Button
                    className={clsx('button-secondary', classes.bodyCreateButton)}
                    variant="contained"
                    type="submit"
                    disabled={createAsyncStatus.isLoading || updateAsyncStatus.isLoading}
                  >
                    {t(mode === 'create' ? 'Create' : 'Edit')}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </form>
        </React.Fragment>
      )}
    />
  );
};

export default StudySetEditorForm;
