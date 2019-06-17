import React, { Component } from 'react'
import './FilterableList.css'
import ListItem from '../ListItem/ListItem'

class FilterableList extends Component {
    render() {
        const list = this.props.files 
            .map((file, key) => 
            //what is the spread operator doing here?
                <ListItem {...file} key={key} />
            );
        return (
            <div>
                {list}
            </div>
        )
    }
}

FilterableList.defaultProps = {
    files: []
}

export default FilterableList;
