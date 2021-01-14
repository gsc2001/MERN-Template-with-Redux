import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../components/Home';
import Main from '../components/Main';
import './App.css';

import store from './store';

function App() {
    return (
        <StoreProvider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/profile" exact component={Profile} />
                </Switch>
            </Router>
        </StoreProvider>
    );
}

export default App;
