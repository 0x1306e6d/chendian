import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import BigEndianConverter from '../converter/BigEndianConverter';
import LittleEndianConverter from '../converter/LittleEndianConverter';
import Section from '../section/Section';

class QWORDSection extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <Section title="64 bit integer">
        <div className={classNames('row')}>
          <div className={classNames('col-12', 'col-sm-6', 'mb-3', 'mb-sm-0')}>
            <BigEndianConverter word={8} value={value} />
          </div>
          <div className={classNames('col-12', 'col-sm-6')}>
            <LittleEndianConverter word={8} value={value} />
          </div>
        </div>
      </Section>
    );
  }
}

QWORDSection.propTypes = {
  value: PropTypes.string
};

export default QWORDSection;
