import React, { Component } from 'react'
import './Track.css'

export class Track extends Component {
    constructor(props) {
        super(props)
    }

    renderAction() {
        return <div>{this.props.isRemoval === false ? <button>+</button> : <button>-</button>}</div>
    }

    render() {
        return (
            <div>
                <div className="Track">
                    <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                    </div>
                    <button className="Track-action">{this.renderAction()}</button>
                </div>
            </div>
        )
    }
}

export default Track
