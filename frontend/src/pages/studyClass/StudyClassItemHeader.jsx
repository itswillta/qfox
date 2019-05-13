import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import LeftStudyClassItemHeader from './studyClassItemHeader/LeftStudyClassItemHeader';
import RightStudyClassItemHeader from './studyClassItemHeader/RightStudyClassItemHeader';
import AddSetsDialog from './studyClassItemHeader/AddSetsDialog';
import { openDialog } from '../../components/Dialogs';

const StudyClassHeader = ({
  classes,
  studyClass = { name: '', studySets: [], members: [] },
  tabValue,
  handleChangeTab
}) => {
  const [openDialogAddSet, setOpenDialogAddSet] = useState(false);

  const handleOpenDialogAddSet = () => setOpenDialogAddSet(true);

  const handleCloseDialogAddSet = () => setOpenDialogAddSet(false);

  const handleOpenEditDialog = () => {
    openDialog('upsertClass', 'edit', studyClass);
  };

  const handleDelete = () => {
    openDialog('deleteClass', studyClass);
  };

  return (
    <div className={classes.header}>
      <Grid container direction="row" justify="space-between">
        <LeftStudyClassItemHeader
          classes={classes}
          studySetsLength={studyClass.studySets ? studyClass.studySets.length : 0}
          membersLength={studyClass.members ? studyClass.members.length : 0}
          studyClassName={studyClass.name}
          tabValue={tabValue}
          handleChangeTab={handleChangeTab}
        />
        <RightStudyClassItemHeader
          classes={classes}
          handleOpenDialogAddSet={handleOpenDialogAddSet}
          handleOpenEditDialog={handleOpenEditDialog}
          handleDelete={handleDelete}
        />
      </Grid>
      <AddSetsDialog
        classes={classes}
        studyClass={studyClass}
        openDialogAddSet={openDialogAddSet}
        handleCloseDialogAddSet={handleCloseDialogAddSet}
      />
    </div>
  );
};

export default StudyClassHeader;
