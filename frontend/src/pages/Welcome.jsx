import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

import logoWithBg from '/images/logo-with-bg.svg';
import appRoutes from '../routers/appRoutes';
import './welcome/Welcome.css';

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <img src={logoWithBg} className="Welcome-logo" alt="logo" />
        <p>
          <strong className="Welcome-text">
            <Trans i18nKey="Welcome to QFox">
              Welcome to <span className="Welcome-text-logo">QFox</span>
            </Trans>
          </strong>
          <br />
        </p>
        <Link className="Welcome-link" to={appRoutes.Main.url}>
          {t('Go to Main Page')}
        </Link>
      </header>
    </div>
  );
};

export default Welcome;
