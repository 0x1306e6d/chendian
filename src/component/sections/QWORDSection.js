import React from 'react';
import PropTypes from 'prop-types';

import Section from '../section/Section';

class QWORDSection extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <Section title="64 bit integer">
        {value}
      </Section>
    );
  }
}

QWORDSection.propTypes = {
  value: PropTypes.string
};

export default QWORDSection;
