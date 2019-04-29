import React from 'react';

import TermCard from './TermCard';

class MemoizedTermCard extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }

  render() {
    const { index, classes } = this.props;

    return <TermCard key={index} classes={classes} index={index} />;
  }
}

export default MemoizedTermCard;
