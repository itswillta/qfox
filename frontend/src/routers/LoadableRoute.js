import Loadable from 'react-loadable';
import RouteLoading from '../components/RouteLoading';

const LoadableRoute = opts =>
  Loadable({
    ...opts,
    loading: RouteLoading,
    delay: 200,
    timeout: 10000
  });

export default LoadableRoute;
