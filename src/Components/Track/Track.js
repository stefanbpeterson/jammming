import React, { Component } from 'react'
import './Track.css'

export class Track extends Component {
    constructor(props) {
        super(props)
        this.addTrack = this.addTrack.bind(this)
    }

    renderAction() {
        if(this.props.isRemoval) {
            return <button className='Track-action'>-</button>
        } else {
            return <button onClick={this.addTrack} className='Track-action'>+</button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track)
    }

    render() {
        return (
            <div>
                <div className="Track">
                    <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                    </div>
                    <div>{this.renderAction()}</div>
                </div>
            </div>
        )
    }
}

export default Track
