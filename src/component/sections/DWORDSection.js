import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import BigEndianConverter from '../converter/BigEndianConverter';
import LittleEndianConverter from '../converter/LittleEndianConverter';
import Section from '../section/Section';

class DWORDSection extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <Section title="32 bit integer">
        <div className={classNames('row')}>
          <div className={classNames('col-12', 'col-sm-6', 'mb-3', 'mb-sm-0')}>
            <BigEndianConverter word={4} value={value} />
          </div>
          <div className={classNames('col-12', 'col-sm-6')}>
            <LittleEndianConverter word={4} value={value} />
          </div>
        </div>
      </Section>
    );
  }
}

DWORDSection.propTypes = {
  value: PropTypes.string
};

export default DWORDSection;
