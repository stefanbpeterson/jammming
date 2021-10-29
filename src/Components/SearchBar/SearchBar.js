import React, { Component } from 'react'
import './SearchBar.css'

export class SearchBar extends Component {
    render() {
        return (
            <div>
                <input placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar
