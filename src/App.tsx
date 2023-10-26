import { Component } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { SearchList } from './components/SearchList/SearchList';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Rick and Morty Search App</h2>
        <SearchBar />
        <SearchList />
      </div>
    );
  }
}

export default App;
