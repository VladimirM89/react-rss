import { Component } from 'react';
import { RickAndMortySearch } from './components/RickAndMortySearch/RickAndMortySearch';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Rick and Morty Search App</h2>
        <RickAndMortySearch />
      </div>
    );
  }
}

export default App;
