import Fuse from 'fuse.js';

const fuseFilterUsers = (users, filter) => {
  const fuse = new Fuse(users, {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['name', 'username']
  });

  return fuse.search(filter);
};

export { fuseFilterUsers };
