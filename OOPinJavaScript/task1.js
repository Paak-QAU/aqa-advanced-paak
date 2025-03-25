// task1.js
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const ebook1 = new EBook("1984", "George Orwell", 1949, "PDF");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

const books = [book1, book2, ebook1];
console.log("Oldest book:", Book.oldestBook(books));

const newEBook = EBook.convertToEBook(book1, "EPUB");
newEBook.printInfo();
