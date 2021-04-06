import moment from 'moment';
import groupBy from 'lodash/groupBy';

const getSameTimeUnitStudySets = (studySets, groupByTime, reverseFilter) => {
  if (reverseFilter) {
    return studySets.filter(studySet => !moment(studySet.updatedAt).isSame(moment(), groupByTime));
  }

  return studySets.filter(studySet => moment(studySet.updatedAt).isSame(moment(), groupByTime));
};

const getThisWeekStudySets = studySets => getSameTimeUnitStudySets(studySets, 'isoWeek');

const getThisMonthStudySets = studySets => getSameTimeUnitStudySets(studySets, 'month');

const getThisYearStudySets = studySets => getSameTimeUnitStudySets(studySets, 'year');

const getOtherYearStudySets = studySets => getSameTimeUnitStudySets(studySets, 'year', true);

const getMutallyExclusiveStudySets = (targetStudySets, ...otherStudySetList) => {
  const getUniqueValuesInArray = array => [...new Set(array)];

  const otherStudySetIds = getUniqueValuesInArray(
    otherStudySetList.map(studySets => studySets.map(studySet => studySet.id)).flat()
  );

  return targetStudySets.filter(studySet => !otherStudySetIds.includes(studySet.id));
};

const getGroupedByTimeStudySets = studySets => {
  const thisWeekStudySets = getThisWeekStudySets(studySets);

  let remainingStudySets = getMutallyExclusiveStudySets(studySets, thisWeekStudySets);

  const thisMonthStudySets = getThisMonthStudySets(remainingStudySets);

  remainingStudySets = getMutallyExclusiveStudySets(remainingStudySets, thisMonthStudySets);

  const otherYearStudySets = getOtherYearStudySets(remainingStudySets);

  const studySetsByYear = groupBy(otherYearStudySets, studySet =>
    moment(studySet.updatedAt).year()
  );

  remainingStudySets = getMutallyExclusiveStudySets(remainingStudySets, otherYearStudySets);

  const studySetsByMonth = groupBy(remainingStudySets, studySet =>
    moment(studySet.updatedAt).month()
  );

  return {
    thisWeek: thisWeekStudySets,
    thisMonth: thisMonthStudySets,
    otherMonths: studySetsByMonth,
    otherYears: studySetsByYear
  };
};

export {
  getThisWeekStudySets,
  getThisMonthStudySets,
  getThisYearStudySets,
  getOtherYearStudySets,
  getGroupedByTimeStudySets
};
