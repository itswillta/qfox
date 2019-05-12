import Fuse from 'fuse.js';

const fuseFilterStudySets = (studySets, filter) => {
  const fuse = new Fuse(studySets, {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['title', 'owner.name']
  });

  return fuse.search(filter);
};

export { fuseFilterStudySets };
