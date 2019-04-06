import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import BigEndianConverter from '../converter/BigEndianConverter';
import LittleEndianConverter from '../converter/LittleEndianConverter';
import Section from '../section/Section';

class WORDSection extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <Section title="16 bit integer">
        <div className={classNames('row')}>
          <div className={classNames('col-12', 'col-sm-6', 'mb-3', 'mb-sm-0')}>
            <BigEndianConverter word={2} value={value} />
          </div>
          <div className={classNames('col-12', 'col-sm-6')}>
            <LittleEndianConverter word={2} value={value} />
          </div>
        </div>
      </Section>
    );
  }
}

WORDSection.propTypes = {
  value: PropTypes.string
};

export default WORDSection;
