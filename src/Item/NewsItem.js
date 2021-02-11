import React, { Component } from 'react';
import props from 'prop-types';
import './NewsItem.css';

class NewsItem extends Component{
    title = ""
    source = ""
    date = ""

    setTitle(title) {
        this.title = title;
    }

    render() {
        return (
            <div>
                <div class="articleTitle"> 
                    {this.props.title}
                </div>

                <div>
                    
                    <ul class="ul" >
                    <li>{this.props.date}</li>
                    
                    <li>{this.props.source}</li>
                    </ul>
                    
                </div>
            </div>
        )
    }

}

export default NewsItem;