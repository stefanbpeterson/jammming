import React, { Component } from 'react'
import TrackList from '../TrackList/TrackList'
import './PlayList.css'

export class PlayList extends Component {
    constructor(props) {
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value)
    }

    render() {
        return (
            <div className='PlayList'>
                <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
                <TrackList tracks={this.props.playListTracks} onRemove={this.props.onRemove} isRemoval={true} />
                <button className="PlayList-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default PlayList
