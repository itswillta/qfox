/* eslint-disable operator-linebreak */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import VerticalDivider from '../../components/VerticalDivider';
import OwnerInfo from '../../components/OwnerInfo';
import StudySetHeaderButtons from './StudySetHeader/StudySetHeaderButtons';

const StudySetHeader = ({ classes, studySet }) => {
  const { t } = useTranslation();

  return (
    <div className={classes.header}>
      <Grid container direction="column" spacing={1}>
        {studySet.terms && (
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="subtitle2">
                  {studySet.terms.length} {studySet.terms.length > 1 ? 'terms' : 'term'}
                </Typography>
              </Grid>
              <VerticalDivider />
              <Grid item>
                <OwnerInfo owner={studySet.owner} />
              </Grid>
              <Grid item className="flex-grow">
                <Grid container justify="flex-end">
                  <Grid item>
                    <StudySetHeaderButtons classes={classes} studySet={studySet} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid item>
          <Typography variant="h3" className="uppercased-text bold-text">
            {studySet.title}
          </Typography>
        </Grid>
        <Grid item>
          {studySet.studyClasses && studySet.studyClasses.length === 0 ? (
            <Typography variant="subtitle2" className="bold-text">
              {t('not added to any class')}
            </Typography>
          ) : (
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="subtitle2" className="bold-text">
                  {t('added to')}
                </Typography>
              </Grid>
              {studySet.studyClasses &&
                studySet.studyClasses.map((studyClass, index) => (
                  <React.Fragment key={studyClass.id}>
                    <Grid item>
                      <Link
                        className="no-underline"
                        to={`/${studyClass.owner.id}/study-classes/${studyClass.id}`}
                      >
                        <Typography
                          variant="subtitle2"
                          className={classes.classLink}
                          color="primary"
                        >
                          {studyClass.name}
                        </Typography>
                      </Link>
                    </Grid>
                    {index < studySet.studyClasses.length - 1 && <VerticalDivider compact />}
                  </React.Fragment>
                ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default StudySetHeader;
