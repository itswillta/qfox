import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CreateStudySetIcon from '@material-ui/icons/AddToPhotos';
import appRoutes from '../../../routers/appRoutes';

const CreateButton = ({ classes }) => (
  <Link className={classes.link} to={appRoutes.CreateStudySet.url}>
    <Button variant="text" className={classes.createButton}>
      <CreateStudySetIcon className={classes.createButtonIcon} />
      Create
    </Button>
  </Link>
);

export default CreateButton;
