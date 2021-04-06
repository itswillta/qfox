/* eslint-disable react/button-has-type */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';

const GameOver = ({ restartGame, time }) => {
  const { t } = useTranslation();
  return (
    <div className="justify-center">
      <h1>{t('Game Over!')}</h1>
      <h2>
        {time} {t('seconds — you can do it!')}
      </h2>
      <h3>
        {t('If you enjoyed playing this game, lets try to practice regularly')}{' '}
        (づ｡◕‿‿◕｡)づ
      </h3>
      <Button className="restart-button" onClick={restartGame}>
        {t('Restart Game')}
      </Button>
    </div>
  );
};

export default GameOver;
