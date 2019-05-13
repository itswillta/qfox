/* eslint-disable react/no-array-index-key */
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldArray } from 'react-final-form-arrays';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import AddTermButtonIcon from '@material-ui/icons/LibraryAdd';

import { termDefaultObject } from './termDefaultObject';
import TermCard from './termEditorGroup/TermCard';
import { scrollToBottomOfElement } from '../../../services/scroll';

const TermEditorGroup = ({ classes }) => {
  const { t } = useTranslation();

  const addTermSectionRef = useRef(null);

  return (
    <FieldArray name="terms" subscription={{ data: false }}>
      {({ fields }) => {
        const isCardRemovable = fields.length > 2;

        const addNewTerm = () => {
          fields.push({ ...termDefaultObject });

          setTimeout(() => scrollToBottomOfElement(addTermSectionRef.current, 8), 0);
        };

        const removeTerm = index => () => fields.remove(index);

        return (
          <React.Fragment>
            {fields.map((cardName, index) => (
              <TermCard
                key={cardName}
                classes={classes}
                index={index}
                namePrefix={cardName}
                isRemovable={isCardRemovable}
                remove={removeTerm(index)}
              />
            ))}
            <Paper className={classes.termCard} ref={addTermSectionRef}>
              <Grid container justify="center" alignItems="center">
                <Grid item>
                  <Button color="primary" variant="text" onClick={addNewTerm}>
                    <AddTermButtonIcon className={classes.buttonIcon} />
                    {t('Add a new term card')}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </React.Fragment>
        );
      }}
    </FieldArray>
  );
};

export default TermEditorGroup;
