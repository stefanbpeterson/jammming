import React, { Component } from 'react'
import './Track.css'

export class Track extends Component {
    constructor(props) {
        super(props)
    }

    renderAction() {
        return <div>{isRemoval === false ? <button>False</button> : <button>True</button>}</div>
    }

    render() {
        return (
            <div>
                <div className="Track">
                <div className="Track-information">
                <h3><!-- track name will go here --></h3>
                <p><!-- track artist will go here--> | <!-- track album will go here --></p>
            </div>
  <button className="Track-action"><!-- + or - will go here --></button>
</div>
            </div>
        )
    }
}

export default Track
