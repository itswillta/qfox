import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import SidebarItem from './SidebarItem';

const SidebarDynamicUserItem = props => {
  const { item, authState } = props;

  const getUserItemPath = useCallback(path => path.replace(':userId', authState.userProfile.id), [
    authState
  ]);

  const newProps = {
    ...props,
    item: {
      ...item,
      path: getUserItemPath(item.path)
    }
  };

  return <SidebarItem {...newProps} />;
};

const mapStateToProps = state => ({
  authState: state.auth
});

export default connect(mapStateToProps)(SidebarDynamicUserItem);
