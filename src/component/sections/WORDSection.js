import React from 'react';
import PropTypes from 'prop-types';

import Section from '../section/Section';

class WORDSection extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <Section title="16 bit integer">
        {value}
      </Section>
    );
  }
}

WORDSection.propTypes = {
  value: PropTypes.string
};

export default WORDSection;
