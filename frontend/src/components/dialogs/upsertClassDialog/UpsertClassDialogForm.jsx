/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import React from 'react';
import { useRedux, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-final-form';

import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import InputField from '../../InputField';
import upsertClassFormSchema from './upsertClassDialogContent/upsertClassFormSchema';
import syncValidate from '../../../utils/formValidator/syncValidate';
import studyClassActions from '../../../states/studyClasses/actions';

const UpsertClassDialogContent = ({ classes, mode, studyClass, handleCloseDialog }) => {
  const { t } = useTranslation();

  const authState = useSelector(state => state.auth);

  const [studyClassAsyncStatus, { updateStudyClass, createStudyClass }] = useRedux(
    state => state.studyClassAsyncStatus,
    {
      updateStudyClass: (userId, studyClassId, updateFields) =>
        studyClassActions.update.pending({ userId, studyClassId, updateFields }),
      createStudyClass: (userId, studyClassInfo) =>
        studyClassActions.create.pending({ userId, studyClassInfo })
    }
  );

  const handleSubmitUpsertClassForm = values => {
    if (mode === 'edit') {
      updateStudyClass(studyClass.owner.id, studyClass.id, values);

      return;
    }

    createStudyClass(authState.userProfile.id, values);
  };

  return (
    <Form
      onSubmit={handleSubmitUpsertClassForm}
      initialValues={
        mode === 'edit'
          ? {
              name: studyClass.name,
              description: studyClass.description || ''
            }
          : { name: '', description: '', permission: 'allow' }
      }
      validate={syncValidate(upsertClassFormSchema)}
      subscription={{ submitting: true, pristine: true }}
      render={({ handleSubmit, form }) => (
        <form name="registerForm" onSubmit={handleSubmit} noValidate>
          <DialogContent className={classes.dialogContent}>
            <Grid container direction="column" spacing={2} className={classes.dialogContentItem}>
              <Grid item xs={12}>
                <InputField required label="Class name" name="name" variant="standard" />
              </Grid>
              <Grid item xs={12}>
                <InputField label="Description" name="description" variant="standard" />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button type="reset" color="primary" onClick={handleCloseDialog}>
              {t('Close')}
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={
                studyClassAsyncStatus.updateStatus.isLoading ||
                studyClassAsyncStatus.createStatus.isLoading
              }
            >
              {t(mode === 'edit' ? 'Edit' : 'Create')}
            </Button>
          </DialogActions>
        </form>
      )}
    />
  );
};

export default UpsertClassDialogContent;
