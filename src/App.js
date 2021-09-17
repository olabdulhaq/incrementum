import './sass/App.scss';
import Incrementum from './pages/Incrementum'
import {BrowserRouter as Router, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
      <Incrementum />
      </Switch>
    </Router>
  );
}

export default App;
