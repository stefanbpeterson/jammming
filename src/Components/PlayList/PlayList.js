import React, { Component } from 'react'
import TrackList from '../TrackList/TrackList'
import './PlayList.css'

export class PlayList extends Component {
    render() {
        return (
            <div>
                <input defaultValue={'New Playlist'}/>
                <TrackList />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default PlayList
