import React, { Component } from 'react'
import './FilterOptions.css'


class FilterOptions extends Component {
    render() {
        return (
            <div className="FilterOptions">
                <div className="FilterOptions__option">
                    <label htmlFor="filter_all">
                        <input type="radio" value="All" id="filter_all" name="filter"/>
                    </label>
                </div>
                <div className="FilterOptions__option">
                    <label htmlFor="filter_uploaded">
                        <input type="radio" value="Uploaded" id="filter_uploaded" name="filter"/>
                    </label>
                </div>
                <div className="FilterOptions__option">
                    <label htmlFor="filter_new">
                        <input type="radio" value="New" id="filter_new" name="filter"/>
                    </label>
                </div>
            </div>
        )
    }
}

export default FilterOptions;