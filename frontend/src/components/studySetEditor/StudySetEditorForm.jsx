import React from 'react';
import clsx from 'clsx';
import { useSelector, useRedux } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Prompt } from 'react-router-dom';
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

const StudySetEditorForm = ({ classes }) => {
  const { t } = useTranslation();

  const currentUserProfile = useSelector(state => state.auth.userProfile);

  const [createAsyncStatus, { createStudySet }] = useRedux(
    state => state.studySetAsyncStatus.createStatus,
    {
      createStudySet: (userId, studySetInfo) =>
        studySetActions.create.pending({ userId, studySetInfo })
    }
  );

  const handleCreateStudySet = values => {
    createStudySet(currentUserProfile.id, values);
  };

  return (
    <Form
      onSubmit={handleCreateStudySet}
      initialValues={{
        title: '',
        viewPermission: viewPermissions[0].value,
        editPermission: editPermissions[0].value,
        terms: [0, 1].map(() => ({ ...termDefaultObject }))
      }}
      subscription={{ submitting: true, pristine: true }}
      mutators={{ ...arrayMutators }}
      validate={syncValidate(createStudySetSchema)}
      render={({ handleSubmit, form, pristine }) => (
        <React.Fragment>
          {!createAsyncStatus.isLastRequestSuccess && (
            <Prompt
              when={!pristine}
              message={t('You have some unsaved changes. Are you sure you want to leave now?')}
            />
          )}
          <form
            name="createStudySetForm"
            onSubmit={handleSubmit}
            className={classes.form}
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
                  >
                    {t('Create')}
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
                  >
                    {t('Create')}
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
