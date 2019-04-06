import React from 'react';
import PropTypes from 'prop-types';

import Section from '../section/Section';

class FloatSection extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <Section title="float">
        {value}
      </Section>
    );
  }
}

FloatSection.propTypes = {
  value: PropTypes.string
};

export default FloatSection;
