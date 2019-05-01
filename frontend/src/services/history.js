import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const redirectTo = urlPath => history.push(urlPath);

export { history, redirectTo };
