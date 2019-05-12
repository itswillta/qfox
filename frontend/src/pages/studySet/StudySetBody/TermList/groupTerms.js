const isCorrectRatioAccepted = (term, lowerRatio, upperRatio) => {
  const ratio = term.correct / (term.correct + term.missed);

  return ratio > lowerRatio && ratio <= upperRatio;
};

const getMutallyExclusiveTerms = (targetTerms, ...otherTermList) => {
  const getUniqueValuesInArray = array => [...new Set(array)];

  const otherTermIds = getUniqueValuesInArray(
    otherTermList.map(terms => terms.map(term => term.id)).flat()
  );

  return targetTerms.filter(term => !otherTermIds.includes(term.id));
};

export const getGroupedTermInfo = terms => {
  const oftenMissedTerms = terms.filter(term => isCorrectRatioAccepted(term, 0, 0.1));
  const sometimesMissedTerms = terms.filter(term => isCorrectRatioAccepted(term, 0.1, 0.7));
  const rarelyMissedTerms = terms.filter(term => isCorrectRatioAccepted(term, 0.7, 1));
  const alwaysCorrectTerms = terms.filter(term => isCorrectRatioAccepted(term, 1, 1));
  const noAnswersYetTerms = getMutallyExclusiveTerms(
    terms,
    oftenMissedTerms,
    sometimesMissedTerms,
    rarelyMissedTerms,
    alwaysCorrectTerms
  );

  return {
    oftenMissed: {
      name: 'Often missed',
      description: 'Your recent answers have been mostly incorrect!',
      colorClass: 'oftenMissedColor',
      terms: oftenMissedTerms
    },
    sometimesMissed: {
      name: 'Sometimes missed',
      description: 'Your recent answers have been incorrect sometimes and correct other times.',
      colorClass: 'sometimesMissedColor',
      terms: sometimesMissedTerms
    },
    rarelyMissed: {
      name: 'Rarely missed',
      description: 'Your recent answers have been mostly correct!',
      colorClass: 'rarelyMissedColor',
      terms: rarelyMissedTerms
    },
    alwaysCorrect: {
      name: 'Always correct',
      description: "You've answered all of these correctly!",
      colorClass: 'alwaysCorrectColor',
      terms: alwaysCorrectTerms
    },
    noAnswersYet: {
      name: 'No answers yet',
      description: "You still haven't studied these!",
      colorClass: 'noAnswersYetColor',
      terms: noAnswersYetTerms
    }
  };
};
