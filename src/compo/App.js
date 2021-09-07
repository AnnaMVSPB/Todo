import { Provider } from 'react-redux';
import Pole from './Pole'
import './App.css';
import Arr from './arr';
import store from '../redux/store';


function App() {
  return (
    <Provider store={store}>
      <Pole />
      <Arr />
    </Provider>
  );
}

export default App;
