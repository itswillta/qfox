import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';

import ActionDropdown from '../../ActionDropdown';

const StudySetActions = ({
  classes,
  handleDelete,
  handleEdit,
  handleRemoveFromClass,
  handleAddToClass,
  isInClass,
  studySetPath,
  studySetId,
  type
}) => {
  const { t } = useTranslation();

  const removeFromClass = () => {
    handleRemoveFromClass(studySetId);
  };

  const addToClass = () => {
    handleAddToClass(studySetId);
  };

  if (type === 'addToClass') {
    return !isInClass ? (
      <Button color="primary" variant="outlined" onClick={addToClass}>
        <AddIcon />
      </Button>
    ) : (
      <Button color="secondary" variant="contained" onClick={removeFromClass}>
        <RemoveIcon />
      </Button>
    );
  }

  const dropdownDetails = {
    buttonProps: {},
    buttonChildren: <MoreIcon />,
    dropdownItems: [
      {
        key: 'share',
        children: (
          <CopyToClipboard text={studySetPath}>
            <span className={classes.flexItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <ShareIcon />
              </ListItemIcon>
              <ListItemText className={classes.listItemText} inset disableTypography>
                <Typography variant="body1">{t('Copy shareable link')}</Typography>
              </ListItemText>
            </span>
          </CopyToClipboard>
        )
      },
      {
        key: 'edit',
        onClick: handleEdit,
        children: (
          <React.Fragment>
            <ListItemIcon className={classes.listItemIcon}>
              <EditIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItemText} inset disableTypography>
              <Typography variant="body1">{t('Edit set')}</Typography>
            </ListItemText>
          </React.Fragment>
        )
      }
    ]
  };

  if (type !== 'search') {
    dropdownDetails.dropdownItems.push({
      key: type === 'classSets' ? 'remove' : 'delete',
      onClick: type === 'classSets' ? removeFromClass : handleDelete,
      children: (
        <React.Fragment>
          <ListItemIcon className={classnames(classes.listItemIcon, classes.deleteColor)}>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText
            className={classnames(classes.listItemText, classes.deleteColor)}
            inset
            disableTypography
          >
            <Typography color="inherit" variant="body1">
              {t(type === 'classSets' ? 'Remove from class' : 'Delete set')}
            </Typography>
          </ListItemText>
        </React.Fragment>
      )
    });
  }

  return <ActionDropdown dropdownDetails={dropdownDetails} isIconButton />;
};

export default StudySetActions;
