import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

class BigEndianInteger extends React.Component {
  constructor(props) {
    super(props);

    this.renderByteOrder = this.renderByteOrder.bind(this);
  }

  renderByteOrder() {
    const { size } = this.props;

    switch (size) {
      case 16:
        return 'AB';
      case 32:
        return 'AB CD';
      case 64:
        return 'AB CD EF GH';
      default:
        return null;
    }
  }

  render() {
    const { size, hexString } = this.props;
    const wordSize = ((size / 8) * 2);

    // TODO(@ghkim3221): big endian
    let wordArray = [];
    for (let i = 0; i < hexString.length; i += wordSize) {
      wordArray.push(hexString.slice(i, i + wordSize));
    }

    return (
      <React.Fragment>
        <Typography color="textPrimary" variant="h5">
          Big Endian
        </Typography>
        <Typography color="textSecondary" variant="h6">
          {this.renderByteOrder()}
        </Typography>
        <List>
          {/* TODO(@ghkim3221): modularization */}
          {wordArray.map((word, index) => (
            <ListItem key={index} divider>
              <Grid spacing={16} container>
                <Grid xs={12} item>
                  <Typography variant="subtitle1">
                    {word.toString(16)}
                  </Typography>
                </Grid>
                <Grid xs={6} item>
                  <Typography variant="overline">
                    Signed
                  </Typography>
                  <Typography variant="body1">
                    {/* TODO(@ghkim3221): signed integer */}
                    {parseInt(word, 16).toLocaleString()}
                  </Typography>
                </Grid>
                <Grid xs={6} item>
                  <Typography variant="overline">
                    Unsigned
                  </Typography>
                  <Typography variant="body1">
                    {/* TODO(@ghkim3221): unsigned integer */}
                    {parseInt(word, 16).toLocaleString()}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </React.Fragment>
    );
  }
}

BigEndianInteger.propTypes = {
  size: PropTypes.oneOf([16, 32, 64]).isRequired,
  hexString: PropTypes.string.isRequired,
};

export default BigEndianInteger;