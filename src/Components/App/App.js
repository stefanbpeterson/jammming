import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import PlayList from '../PlayList/PlayList'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{name: 'Crinkles and Pringles', artist: 'jimmy jarlon', album: 'My Life Is a Bagel', id: 1},
                      {name: 'Ranch Dressing Ballet', artist: 'jimmy jarlon', album: 'My Life Is a Bagel', id: 2},
                      {name: 'Diss Track Flashback', artist: 'jimmy jarlon', album: 'My Life Is a Bagel', id: 3}],
      playListName: `Stefan's Super Sick Playlist`,
      playListTracks: [{name: 'Glue Boy', artist: 'Dillweed', album: 'Dingus', id: 1},
                       {name: 'Sasuke', artist: 'Muvment', album: 'Arkham', id: 2},
                       {name: 'Tsunade', artist: 'Muvement', album: 'Arkham', id: 3}]
    }
  }
  
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <PlayList playListName={this.state.playListName} playListTracks={this.state.playListTracks} />
        </div>
      </div>
    </div>
    )
  }
}

export default App
