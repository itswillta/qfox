const asyncTypes = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

export default typeString =>
  Object.values(asyncTypes).reduce((acc, curr) => {
    acc[curr] = `${typeString}_${curr}`;
    return acc;
  }, {});
