import React, { Component } from 'react'
import './SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBox extends Component {
    render() {
        return (
            <div>
                <div className="SearchBox">
                    <FontAwesomeIcon icon={faSearch}/>
                    <input 
                        type="text" 
                        placeholder="Search term"
                        value={this.props.searchTerm}
                        onChange={e => this.props.handleUpdate(e.target.value)}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBox;