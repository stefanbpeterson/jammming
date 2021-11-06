import React, { Component } from 'react'
import TrackList from '../TrackList/TrackList'
import './PlayList.css'

export class PlayList extends Component {
    render() {
        return (
            <div className='PlayList'>
                <input defaultValue={'New Playlist'}/>
                <TrackList tracks={this.props.playListTracks} />
                <button className="PlayList-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default PlayList
