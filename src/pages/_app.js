import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { store } from '../app/store'

//const store = createStore(reducer)

export default function App({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}
