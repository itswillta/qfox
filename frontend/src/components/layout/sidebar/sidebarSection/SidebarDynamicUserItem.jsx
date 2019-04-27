import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import SidebarItem from './SidebarItem';

const SidebarDynamicUserItem = props => {
  const { item } = props;

  const authState = useSelector(state => state.auth);

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

export default SidebarDynamicUserItem;
