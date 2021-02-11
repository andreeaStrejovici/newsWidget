import React, { Component } from 'react';
import NewsItem from './Item/NewsItem'
import './NewsWidget.css'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/DropdownItem'


class NewsWidget extends Component{
    
    sources = ['CNN', 'Independent', 'New York Times']
    numb = [1, 2, 3, 4, 5];
    render() {

        return (
            
            <div class="canvas">
                
                
                <div class="title">
                    News
                </div>
                <div class="dropdown">
                    <select class="dropbtn">
                        <option value="Filter by source">Filter by source</option>
                        {this.sources.map((source) => <option value={source}>{source}</option>)}
                    </select>
                </div>
                <p>This is the NewsWidget!</p>
                <ul class='ul'>
                    
                    {this.numb.map((value, index) => <li key={index}><NewsItem title="asdfasd" source="CNN" date="10.10.2020"/></li>)}
                </ul>
                <NewsItem/>
                <div class="showMore">
                    <button>Show More</button>
                </div>
            </div>
        )
    }

    myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

}

export default NewsWidget; 

