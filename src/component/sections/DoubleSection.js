import React from 'react';
import PropTypes from 'prop-types';

import Section from '../section/Section';

class DoubleSection extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <Section title="double">
        {value}
      </Section>
    );
  }
}

DoubleSection.propTypes = {
  value: PropTypes.string
};

export default DoubleSection;
