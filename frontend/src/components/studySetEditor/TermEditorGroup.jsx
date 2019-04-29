/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { FieldArray, FormikConsumer } from 'formik';

import Button from '@material-ui/core/Button';

import MemoizedTermCard from './termEditorGroup/MemoizedTermCard';
import { termDefaultObject } from './termDefaultObject';

const TermEditorGroup = ({ classes }) => (
  <FormikConsumer>
    {({ values }) => {
      // console.log(values);

      return (
        <FieldArray
          name="terms"
          render={arrayHelpers => (
            <React.Fragment>
              {values.terms.map((term, index) => (
                <MemoizedTermCard
                  key={index}
                  classes={classes}
                  index={index}
                  value={values.terms[index].term}
                />
              ))}
              <Button
                variant="contained"
                color="primary"
                onClick={() => arrayHelpers.push({ ...termDefaultObject })}
              >
                Add a new term
              </Button>
            </React.Fragment>
          )}
        />
      );
    }}
  </FormikConsumer>
);

export default TermEditorGroup;
