import React from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TermCard from './TermGroup/TermCard';

const TermGroup = ({ termGroupInfo, classes }) => {
  const { t } = useTranslation();

  return (
    <Grid container direction="column" className={classes.termGroupContainer}>
      <Grid item className={classes.termGroupTitle}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Typography
              variant="h6"
              className={clsx('bold-text', classes[termGroupInfo.colorClass])}
            >
              {t(termGroupInfo.name)}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{t(termGroupInfo.description)}</Typography>
          </Grid>
        </Grid>
      </Grid>
      {termGroupInfo.terms.map(term => (
        <Grid item key={term.id}>
          <TermCard term={term} classes={classes} colorClass={termGroupInfo.colorClass} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TermGroup;
