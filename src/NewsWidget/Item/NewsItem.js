import React, { Component } from 'react';


class NewsItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            sources: [],
            currentPage: 1,
            selectedSource: ''
        }
    }

    render() {
        return (
            <div>
                One Item
            </div>
        )
    }

}

export default NewsItem;