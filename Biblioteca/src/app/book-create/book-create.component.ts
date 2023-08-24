import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../../db/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  createBook(form: NgForm): void {
    if (form.valid) {
      const newBook = form.value;
      this.bookService.createBook(newBook)
        .subscribe(() => {
         
        });
    }
  }
}
