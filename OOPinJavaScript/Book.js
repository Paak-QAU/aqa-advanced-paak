// Book.js
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    
    get title() { return this._title; }
    set title(value) {
        if (!value) throw new Error("Title cannot be empty");
        this._title = value;
    }
    
    get author() { return this._author; }
    set author(value) {
        if (!value) throw new Error("Author cannot be empty");
        this._author = value;
    }
    
    get year() { return this._year; }
    set year(value) {
        if (!Number.isInteger(value) || value < 0) throw new Error("Invalid year");
        this._year = value;
    }
    
    printInfo() {
        console.log(`${this.title} by ${this.author}, published in ${this.year}`);
    }
    
    static oldestBook(books) {
        return books.reduce((oldest, book) => book.year < oldest.year ? book : oldest, books[0]);
    }
}