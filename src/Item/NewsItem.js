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
                <div class="articleTitle"><a class="a" href={this.props.link}>
                    {this.props.title}</a>
                </div>
                <div >
                    <ul class="ul">
                        <li class="li date">{this.props.date}</li>
                        <li class="li source"> {this.props.source}</li>
                    </ul>   
                    
                
                </div>
            </div>
        )
    }

}

export default NewsItem;