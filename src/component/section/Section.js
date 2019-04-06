import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Container from '../Container';
import SectionHeader from './SectionHeader';

class Section extends React.Component {
  render() {
    return (
      <Container className={classNames('pt-5', 'pb-3')} fluid>
        <SectionHeader title={this.props.title} />
        {this.props.children}
      </Container>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string
};

export default Section;
