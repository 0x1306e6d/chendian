import React from 'react';
import PropTypes from 'prop-types';

class SectionHeader extends React.Component {
  render() {
    const { title } = this.props;

    if (title) {
      return <h3>{title}</h3>;
    } else {
      return null;
    }
  }
}

SectionHeader.propTypes = {
  title: PropTypes.string
};

export default SectionHeader;
