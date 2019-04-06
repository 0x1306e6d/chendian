import React from 'react';
import PropTypes from 'prop-types';

import Section from '../section/Section';

class DWORDSection extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <Section title="32 bit integer">
        {value}
      </Section>
    );
  }
}

DWORDSection.propTypes = {
  value: PropTypes.string
};

export default DWORDSection;
