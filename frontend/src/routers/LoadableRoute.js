import Loadable from 'react-loadable';
import RouteLoading from '../components/RouteLoading';

const LoadableRoute = opts =>
  Loadable({
    ...opts,
    loading: RouteLoading,
    delay: 500,
    timeout: 10000
  });

export default LoadableRoute;
