import { Component, OnInit } from '@angular/core';
import { Book } from '../../db/book.model';
import { BookService } from '../../db/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id)
      .subscribe(() => {
        this.getBooks();
      });
  }
}
