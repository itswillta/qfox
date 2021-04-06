/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useActions, useSelector } from 'react-redux';

import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import AddStudySetIcon from '@material-ui/icons/LibraryAdd';

import { redirectTo } from '../../../../services/history';
import appRoutes from '../../../../routers/appRoutes';
import StudySetList from '../../../../components/StudySetList';
import { studySetActions, allStudySetSelector } from '../../../../states/studySets';
import { fullStudyClassActions } from '../../../../states/fullStudyClass';

const AddSetDialogContent = ({ classes, studyClass }) => {
  const { t } = useTranslation();

  const authState = useSelector(state => state.auth);

  const allStudySets = useSelector(state => allStudySetSelector(state.ormDB));

  const { fetchStudySets } = useActions({
    fetchStudySets: userId => studySetActions.fetch.pending(userId)
  });

  const handleCreateStudySet = () => redirectTo(appRoutes.CreateStudySet.url);

  const { removeStudySet, addStudySet } = useActions({
    removeStudySet: (userId, studyClassId, studySetIds) =>
      fullStudyClassActions.removeStudySets.pending({ userId, studyClassId, studySetIds }),
    addStudySet: (userId, studyClassId, studySetId) =>
      fullStudyClassActions.addStudySet.pending({ userId, studyClassId, studySetId })
  });

  const handleRemoveFromClass = studySetId => {
    removeStudySet(studyClass.owner.id, studyClass.id, [studySetId]);
  };

  const handleAddToClass = studySetId => {
    addStudySet(studyClass.owner.id, studyClass.id, studySetId);
  };

  useEffect(() => {
    fetchStudySets(authState.userProfile.id);
  }, []);

  return (
    <div className={classes.dialogContent}>
      <DialogContent>
        <Paper className={classes.dialogContentItem}>
          <Button color="primary" onClick={handleCreateStudySet}>
            <AddStudySetIcon className={classes.buttonIcon} />
            {t('Create a new study set')}
          </Button>
        </Paper>
        <div>
          <StudySetList
            noGrouping
            studyClass={studyClass}
            studySets={allStudySets}
            handleRemoveFromClass={handleRemoveFromClass}
            handleAddToClass={handleAddToClass}
            type="addToClass"
          />
        </div>
      </DialogContent>
    </div>
  );
};

export default AddSetDialogContent;
