export default class Book {
    constructor(title, numberOfPages, author, category) {

        this.title = title;
        this.numberOfPages = numberOfPages;
        this.author = author;
        this.category = category;
    }
  
    getTitle() {
        return `${this.title}`
    }
  
    getDescription() {
        return `Written by ${this.author}, Total no of pages is ${this.numberOfPages}`
    }
}