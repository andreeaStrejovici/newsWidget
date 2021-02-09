import React, { Component } from 'react';
import NewsItem from './Item/NewsItem'
import './NewsWidget.css'


class NewsWidget extends Component{
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            sources: [],
            currentPage: 1,
            selectedSource: ''
        }
    }

    numb = [1, 2, 3, 4, 5]

    render() {
        return (
            <div>
                <p>This is the NewsWidget!</p>
                <ul class='ul'>
                    {this.numb.map((value, index) => <li key={index}><NewsItem/></li>)}
                </ul>
            </div>
        )
    }
}

export default NewsWidget; 