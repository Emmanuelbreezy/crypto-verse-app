import '../node_modules/antd/dist/antd.css';
import '../styles/css/globals.css';
import { Provider } from 'react-redux';

import store from '../store/store';

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>;
}

export default MyApp
