import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BookService } from '../../db/book.service';
import { Book } from '../../db/book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id)
      .subscribe(book => this.book = book);
  }

  updateBook(form: NgForm): void {
    if (form.valid && this.book) {
      const updatedBook: Book = { ...this.book, ...form.value };
      this.bookService.updateBook(this.book.id, updatedBook)
        .subscribe(() => {
         
        });
    }
  }
}
