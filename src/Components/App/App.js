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
      playListTracks: [{name: 'Glue Boy', artist: 'Dillweed', album: 'Dingus', id: 4},
                       {name: 'Sasuke', artist: 'Muvment', album: 'Arkham', id: 5},
                       {name: 'Tsunade', artist: 'Muvment', album: 'Arkham', id: 6}]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
  }

  addTrack(track) {
    if(this.state.playListTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    this.state.playListTracks.push(track);
    this.setState({ playListTracks: this.state.playListTracks });
  }

  removeTrack(track) {
    let tracks = this.state.playListTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playListTracks: tracks });
  }

  updatePlayListName(name) {
    this.setState({ playListName: name })
  }

  savePlayList() {
    const trackURIs = this.state.playListTracks.map(track => track.uri)
  }
  
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <PlayList playListName={this.state.playListName} 
                    playListTracks={this.state.playListTracks} 
                    onRemove={this.removeTrack} 
                    onNameChange={this.updatePlayListName}
                    onSave={this.savePlayList} />
        </div>
      </div>
    </div>
    )
  }
}

export default App
