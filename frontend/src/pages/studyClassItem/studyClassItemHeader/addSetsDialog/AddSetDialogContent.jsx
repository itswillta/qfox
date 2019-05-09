/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const studySets = [
  { title: 'h3ba', added: true },
  { title: 'ahuhu', added: false }
];

const AddSetDialogContent = ({ classes, history }) => {
  const [studySetsType, setStudySetsTtype] = useState(1);

  const handleChange = e => {
    setStudySetsTtype(e.target.value);
  };

  const handleCreateStudySet = () => history.push('/study-sets/create');

  return (
    <div className={classes.dialogContent}>
      <DialogContent>
        <div className={classes.dialogContentItem}>
          <Button color="primary" onClick={handleCreateStudySet}>
            + Create a new set
          </Button>
        </div>
        <FormControl variant="filled">
          <Select
            native
            value={studySetsType}
            onChange={handleChange}
            input={
              <OutlinedInput
                className={classes.dialogContentSelect}
                name="studySetsType"
              />
            }
          >
            <option value={1}>Your sets</option>
            <option value={2}>Studied sets</option>
          </Select>
        </FormControl>

        {studySets.map(studySet => (
          <div className={classes.dialogContentItem}>
            <Grid
              container
              direction="row"
              justify="space-between"
              // className={classes.dialogContentItem}
            >
              <Grid item>
                <Typography variant="subtitle1">{studySet.title}</Typography>
              </Grid>
              <Grid item>
                {studySet.added ? (
                  <Button color="primary" variant="outlined">
                    <Add />
                  </Button>
                ) : (
                  <Button color="secondary" variant="contained">
                    <Remove />
                  </Button>
                )}
              </Grid>
            </Grid>
          </div>
        ))}
      </DialogContent>
    </div>
  );
};

export default withRouter(AddSetDialogContent);
