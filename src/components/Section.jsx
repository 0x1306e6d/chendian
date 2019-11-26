import React from 'react';
import PropTypes from 'prop-types';

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import EndiannessConverter from './EndiannessConverter';

const Section = (TypeComponent) => {
  return ({ array, byteLength, title }) => {
    const TypeEndiannessConverter = EndiannessConverter(TypeComponent);

    return (
      <ExpansionPanel defaultExpanded={true}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid spacing={16} container>
            <Grid xs={12} lg={6} item>
              <TypeEndiannessConverter
                array={array}
                byteLength={byteLength}
                endianness="big" />
            </Grid>
            <Grid xs={12} lg={6} item>
              <TypeEndiannessConverter
                array={array}
                byteLength={byteLength}
                endianness="little" />
            </Grid>
            {byteLength > 2 &&
              <Grid xs={12} lg={6} item>
                <TypeEndiannessConverter
                  array={array}
                  byteLength={byteLength}
                  endianness="middleBig" />
              </Grid>
            }
            {byteLength > 2 &&
              <Grid xs={12} lg={6} item>
                <TypeEndiannessConverter
                  array={array}
                  byteLength={byteLength}
                  endianness="middleLittle" />
              </Grid>
            }
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

Section.propTypes = {
  array: PropTypes.array.isRequired,
  byteLength: PropTypes.oneOf([2, 4, 8]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;