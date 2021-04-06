export const isInClass = (studyClass, studySetId) => {
  const classStudySetIds = studyClass.studySets.map(studySet => studySet.id);

  return classStudySetIds.includes(studySetId);
};
