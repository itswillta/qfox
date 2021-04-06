import Fuse from 'fuse.js';

const fuseFilterStudyClasses = (studyClasses, filter) => {
  const fuse = new Fuse(studyClasses, {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['name', 'description', 'owner.name']
  });

  return fuse.search(filter);
};

export { fuseFilterStudyClasses };
