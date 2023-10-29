import { Component } from 'react';
import { SearchPage } from './components/RickAndMortySearch/SearchPage';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Rick and Morty Search App</h2>
        <SearchPage />
      </div>
    );
  }
}

export default App;
