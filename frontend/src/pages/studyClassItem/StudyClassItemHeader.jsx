import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import LeftStudyClassItemHeader from './studyClassItemHeader/LeftStudyClassItemHeader';
import RightStudyClassItemHeader from './studyClassItemHeader/RightStudyClassItemHeader';
import AddSetsDialog from './studyClassItemHeader/AddSetsDialog';
import AddMembersDialog from './studyClassItemHeader/AddMembersDialog';
import EditStudyclassDialog from './studyClassItemHeader/EditStudyClassDialog';

const StudyClassHeader = ({
  classes,
  membersLength,
  studySetsLength,
  studyClassTitle,
  permission,
  tabValue,
  handleChangeTab
}) => {
  const [openDialogAddSet, setOpenDialogAddSet] = useState(false);
  const [openDialogAddMember, setOpenDialogAddMember] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);

  const handleOpenDialogAddSet = () => setOpenDialogAddSet(true);

  const handleCloseDialogAddSet = () => setOpenDialogAddSet(false);

  const handleOpenDialogAddMember = () => setOpenDialogAddMember(true);

  const handleCloseDialogAddMember = () => setOpenDialogAddMember(false);

  const handleOpenDialogEdit = () => setOpenDialogEdit(true);

  const handleCloseDialogEdit = () => setOpenDialogEdit(false);

  return (
    <div className={classes.header}>
      <Grid container direction="row" justify="space-between">
        <LeftStudyClassItemHeader
          classes={classes}
          studySetsLength={studySetsLength}
          membersLength={membersLength}
          studyClassTitle={studyClassTitle}
          tabValue={tabValue}
          handleChangeTab={handleChangeTab}
        />
        <RightStudyClassItemHeader
          classes={classes}
          handleOpenDialogAddSet={handleOpenDialogAddSet}
          handleOpenDialogAddMember={handleOpenDialogAddMember}
          handleOpenDialogEdit={handleOpenDialogEdit}
        />
      </Grid>
      <AddSetsDialog
        classes={classes}
        openDialogAddSet={openDialogAddSet}
        handleCloseDialogAddSet={handleCloseDialogAddSet}
      />
      <AddMembersDialog
        classes={classes}
        openDialogAddMember={openDialogAddMember}
        handleCloseDialogAddMember={handleCloseDialogAddMember}
      />
      <EditStudyclassDialog
        classes={classes}
        openDialogEdit={openDialogEdit}
        handleCloseDialogEdit={handleCloseDialogEdit}
        permission={permission}
      />
    </div>
  );
};

export default StudyClassHeader;
