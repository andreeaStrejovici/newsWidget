import React, { Component } from 'react';
import props from 'prop-types';
import './Item.css';

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
                    {this.props.date}
                    {this.props.source}
                    
                </div>
            </div>
        )
    }

}

export default NewsItem;