import React from 'react';
import { useTranslation } from 'react-i18next';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TermGroup from './TermList/TermGroup';

import { getGroupedTermInfo } from './TermList/groupTerms';

const TermList = ({ classes, terms = [] }) => {
  const { t } = useTranslation();

  const groupedTermInfo = getGroupedTermInfo(terms);

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="h5" className="bold-text">
          {`${t('Terms in this set')} (${terms.length})`}
        </Typography>
      </Grid>
      {Object.keys(groupedTermInfo).map(
        termGroupKey =>
          groupedTermInfo[termGroupKey].terms.length > 0 && (
            <Grid item key={termGroupKey}>
              <TermGroup termGroupInfo={groupedTermInfo[termGroupKey]} classes={classes} />
            </Grid>
          )
      )}
    </Grid>
  );
};

export default TermList;
