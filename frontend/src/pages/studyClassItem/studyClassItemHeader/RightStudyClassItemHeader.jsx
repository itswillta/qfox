import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import GroupAdd from '@material-ui/icons/GroupAdd';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const RightStudyClassItemHeader = ({
  classes,
  handleOpenDialogAddSet,
  handleOpenDialogAddMember,
  handleOpenDialogEdit
}) => (
  <Grid item>
    <Grid container direction="column">
      <Grid item>
        <Tooltip title="Add sets">
          <Fab
            color="primary"
            aria-label="Add"
            size="small"
            className={classes.fab}
            onClick={handleOpenDialogAddSet}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Add members">
          <Fab
            color="primary"
            aria-label="Add"
            size="small"
            className={classes.fab}
            onClick={handleOpenDialogAddMember}
          >
            <GroupAdd />
          </Fab>
        </Tooltip>
        <Tooltip title="Edit">
          <Fab
            color="primary"
            aria-label="Edit"
            size="small"
            className={classes.fab}
            onClick={handleOpenDialogEdit}
          >
            <Edit />
          </Fab>
        </Tooltip>
        <Tooltip title="Delete">
          <Fab
            color="secondary"
            aria-label="Edit"
            size="small"
            className={classes.fab}
          >
            <Delete />
          </Fab>
        </Tooltip>
      </Grid>
      <Grid item className={classes.linkText}>
        <Typography variant="subtitle1">LINK TO JOIN CLASS</Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default RightStudyClassItemHeader;
