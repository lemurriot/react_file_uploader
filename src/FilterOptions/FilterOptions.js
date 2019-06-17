import React, { Component } from 'react'
import './FilterOptions.css'


class FilterOptions extends Component {
    render() {
        const { filterOption } = this.props;
        console.log(filterOption)
        return (
            <div className="FilterOptions">
                <div className="FilterOptions__option">
                    <label htmlFor="filter_all">
                        <input type="radio" value="All" id="filter_all" name="filter" checked={filterOption === "All"}/>
                    </label>
                </div>
                <div className="FilterOptions__option">
                    <label htmlFor="filter_uploaded">
                        <input type="radio" value="Uploaded" id="filter_uploaded" name="filter" checked={filterOption === "Uploaded"}/>
                    </label>
                </div>
                <div className="FilterOptions__option">
                    <label htmlFor="filter_synced">
                        <input type="radio" value="Synced" id="filter_synced" name="filter" checked={filterOption === "Synced"}/>
                    </label>
                </div>
                <div className="FilterOptions__option">
                    <label htmlFor="filter_new">
                        <input type="radio" value="New" id="filter_new" name="filter" checked={filterOption === "Synced"}/>
                    </label>
                </div>
            </div>
        )
    }
}

export default FilterOptions;