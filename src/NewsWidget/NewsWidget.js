import React, { Component } from 'react';
import NewsItem from '../Item/NewsItem'
import './NewsWidget.css'

import Article from '../Article.ts'

class NewsWidget extends Component{
    articles = [
        new Article("Too African for Jamaica, Too Jamaican for America, Too American for Nigeria", "New York Times", "02/02/2021", "https://www.nytimes.com/2021/02/02/books/review/louis-chude-sokei-floating-in-a-most-peculiar-way.html"),
        new Article("The Black American City That Almost Came to Be", "New York Times", "02/02/2021", "https://www.nytimes.com/2021/02/02/books/review/soul-city-thomas-healy.html"),
        new Article("Traveling to Canada during Covid-19: What you need to know before you go", "CNN", "11/02/2021", "https://edition.cnn.com/travel/article/canada-travel-covid-19/index.html"),
        new Article("Double masking can block 92% of infectious particles, CDC says", "CNN", "11/02/2021", "https://edition.cnn.com/2021/02/10/health/double-masking-cdc-study-escape-wellness/index.html"),
        new Article("What happens when books inspire real-life violence?", "Independent", "11/02/2021", "https://www.independent.co.uk/arts-entertainment/books/features/the-turner-diaries-capitol-insurrection-books-b1800572.html")
    ]
    someArticles = [
        new Article("Too African for Jamaica, Too Jamaican for America, Too American for Nigeria", "New York Times", "02/02/2021", "https://www.nytimes.com/2021/02/02/books/review/louis-chude-sokei-floating-in-a-most-peculiar-way.html"),
        new Article("The Black American City That Almost Came to Be", "New York Times", "02/02/2021", "https://www.nytimes.com/2021/02/02/books/review/soul-city-thomas-healy.html"),
        new Article("Traveling to Canada during Covid-19: What you need to know before you go", "CNN", "11/02/2021", "https://edition.cnn.com/travel/article/canada-travel-covid-19/index.html"),
        new Article("Double masking can block 92% of infectious particles, CDC says", "CNN", "11/02/2021", "https://edition.cnn.com/2021/02/10/health/double-masking-cdc-study-escape-wellness/index.html"),
        new Article("What happens when books inspire real-life violence?", "Independent", "11/02/2021", "https://www.independent.co.uk/arts-entertainment/books/features/the-turner-diaries-capitol-insurrection-books-b1800572.html")
    ]
    moreArticles =  [
        new Article("Too African for Jamaica, Too Jamaican for America, Too American for Nigeria", "New York Times", "02/02/2021", "https://www.nytimes.com/2021/02/02/books/review/louis-chude-sokei-floating-in-a-most-peculiar-way.html"),
        new Article("The Black American City That Almost Came to Be", "New York Times", "02/02/2021", "https://www.nytimes.com/2021/02/02/books/review/soul-city-thomas-healy.html"),
        new Article("Traveling to Canada during Covid-19: What you need to know before you go", "CNN", "11/02/2021", "https://edition.cnn.com/travel/article/canada-travel-covid-19/index.html"),
        new Article("Double masking can block 92% of infectious particles, CDC says", "CNN", "11/02/2021", "https://edition.cnn.com/2021/02/10/health/double-masking-cdc-study-escape-wellness/index.html"),
        new Article("What happens when books inspire real-life violence?", "Independent", "11/02/2021", "https://www.independent.co.uk/arts-entertainment/books/features/the-turner-diaries-capitol-insurrection-books-b1800572.html"),
        new Article("Prince Harry accepts apology and damages over ‘false and defamatory’ Mail articles", "Independent", "01/02/2021", "https://www.independent.co.uk/news/media/prince-harry-meghan-markle-mail-damages-b1795766.html"),
        new Article("How do lockdowns work and has England used them correctly?", "Independent", "05/06/2021", "https://www.independent.co.uk/life-style/health-and-families/covid-uk-lockdown-reduce-spread-b1797534.html"),
        new Article("Running Is a Total Body Affair", "New York Times", "10/02/2021", "https://www.nytimes.com/2021/02/10/well/move/running-body-evolution.html"),
        new Article("How to make pizza dough at home", "CNN", "09/02/2021", "https://edition.cnn.com/travel/article/stanley-tucci-pizza-dough-recipe-tucci-cookbook/index.html"),
        new Article("Netflix donates £500,000 to Sam Mendes’s theatre support fund after director criticised streaming service for ignoring the arts", " Independent", "06/07/2020", "https://www.independent.co.uk/arts-entertainment/theatre-dance/news/sam-mendes-theatre-artists-fund-coronavirus-netflix-government-oliver-dowden-a9603286.html")
    ]
    sources = ['CNN', 'Independent', 'New York Times']
    numb = [1, 2, 3, 4, 5];
    N = 5

    handleShowMore = () => {
        
        if(document.getElementById("mybtn").value === "Show More") {
            document.getElementById("mybtn").value = "Show Less"
            document.getElementById("canvas").style.paddingBottom = "55%"
            this.articles = this.moreArticles
            this.render()
        } else {
            document.getElementById("mybtn").value = "Show More"
            document.getElementById("canvas").style.paddingBottom = "30%"
            this.articles = this.someArticles
            this.render()
        }

    };


 
    render() {
 
        return (
            
            <div id="canvas" class="canvas">
                
                
                <div class="title">
                    News
                </div>
                <div class="dropdown">
                    <select class="dropbtn" value="Filter by source">
                        <option value="Filter by source" id="option">Filter by source</option>
                        {this.sources.map((source) => <option value={source} id="opt2">{source}</option>)}
                    </select>
                </div>

                <div>
                    <ul class='ul'>
                        
                        {this.articles.map((value, index) => <li class="li" key={index}><NewsItem title={value.title} source={value.source} date={value.date} link={value.link}/></li>)}
                    </ul>
                </div>

                <div>
                    <input type="button" class="showbtn" onClick={this.handleShowMore} value="Show More" id="mybtn"></input>
                </div>
            </div>
        )
    }



}

export default NewsWidget; 

