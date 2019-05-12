/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Header from './gameMatching/Header';
import Card from './gameMatching/Card';
import GameOver from './gameMatching/GameOver';
import { cardList } from './gameMatching/cardList';

import StartGameDialog from './gameMatching/StartGame';
import './gameMatching/style.css';

const GameMatching = () => {
  const Cards = () =>
    cardList.reduce(
      (preValue, current, index, array) => [
        ...preValue,
        current.term,
        current.definition
      ],
      []
    );

  const [isOpenDialog, setOpenDialog] = useState(true);
  const [isFlipped, setFlip] = useState(Array(cardList.length * 2).fill(false));
  const [shuffledCards, setShuffedCard] = useState(
    Cards().sort(() => Math.random() - 0.5)
  );
  const [clickCount, setClickCount] = useState(1);
  const [prevSelectedCard, setSelectedCard] = useState(-1);
  const [prevCardId, setCardId] = useState(-1);
  const [elapsed, setElapse] = useState(0);
  const [intervalAll, setIntervalAll] = useState(null);

  const handleStartGame = () => {
    setOpenDialog(false);
    const startTime = Date.now() - elapsed;
    const time = setInterval(() => setElapse(Date.now() - startTime), 50);
    setIntervalAll(time);
  };

  const isCardMatch = (card1, card2, card1Id, card2Id) => {
    const termObject = cardList.find(
      term => term.term === card1 || term.definition === card1
    );

    if (
      (termObject.term === card1 && termObject.definition === card2) ||
      (termObject.definition === card1 && termObject.term === card2)
    ) {
      const hideCards = [...shuffledCards];

      hideCards[card1Id] = -1;
      hideCards[card2Id] = -1;
      setTimeout(() => {
        setShuffedCard(hideCards);
      }, 500);

      return;
    }

    const flipBack = [...isFlipped];
    flipBack[card1Id] = false;
    flipBack[card2Id] = false;
    setTimeout(() => {
      setFlip(flipBack);
    }, 500);
  };

  const handleClick = event => {
    event.preventDefault();
    const cardId = event.target.id;
    const newFlipps = [...isFlipped];
    setSelectedCard(shuffledCards[cardId]);
    setCardId(cardId);

    if (newFlipps[cardId] === false) {
      newFlipps[cardId] = !newFlipps[cardId];
      setFlip(newFlipps);
      setClickCount(clickCount + 1);

      if (clickCount === 2) {
        setClickCount(1);
        const prevCardId2 = prevCardId;
        const newCard = shuffledCards[cardId];
        const previousCard = prevSelectedCard;

        isCardMatch(previousCard, newCard, prevCardId2, cardId);
      }
    }
  };

  const restartGame = () => {
    setFlip(Array(16).fill(false));
    setShuffedCard(Cards().sort(() => Math.random() - 0.5));
    setClickCount(1);
    setSelectedCard(-1);
    setCardId(-1);
    clearInterval(intervalAll);
    setOpenDialog(true);
    setElapse(0);
  };

  const isGameOver = () =>
    isFlipped.every((element, index, array) => element !== false);

  if (isGameOver()) {
    clearInterval(intervalAll);
  }

  const timer = Math.round(elapsed / 100);
  const seconds = (timer / 10).toFixed(1);
  return (
    <div>
      <StartGameDialog
        isOpen={isOpenDialog}
        handleStartGame={handleStartGame}
      />
      <Header restartGame={restartGame} timeCounter={seconds} />
      {isGameOver() ? (
        <GameOver restartGame={restartGame} time={seconds} />
      ) : (
        <div className="grid-container">
          {shuffledCards.map((cardNumber, index) => (
            <Card
              key={index}
              id={index}
              cardNumber={cardNumber}
              isFlipped={isFlipped[index]}
              handleClick={handleClick}
            />
          ))}
        </div>
      )}
    </div>
  );
  // }
};

export default GameMatching;
