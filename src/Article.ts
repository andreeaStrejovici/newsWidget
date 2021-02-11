export default class Article {
    title: string;
    source: string;
    date: string
    link: string
    constructor(title : string,
        source : string,
        date : string, link : string) {
            this.title = title
            this.source = source
            this.date = date
            this.link = link
        }
}

