import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '@material-ui/core/Button';
import CreateStudySetIcon from '@material-ui/icons/AddToPhotos';
import appRoutes from '../../../routers/appRoutes';

const CreateButton = ({ classes }) => {
  const { t } = useTranslation();
  return (
    <Link className={classes.link} to={appRoutes.CreateStudySet.url}>
      <Button variant="text" className={classes.createButton}>
        <CreateStudySetIcon className={classes.createButtonIcon} />
        {t('Create')}
      </Button>
    </Link>
  );
};
export default CreateButton;
