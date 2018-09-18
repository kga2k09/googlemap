import React, { Component } from 'react';
import './index.css'
class Search extends Component{
    render(){
        return(
            <div id='pac-container'>
              <input id='pac-input' type='text' placeholder='Enter a location' />
            </div>
        );
    }
}
export default Search;