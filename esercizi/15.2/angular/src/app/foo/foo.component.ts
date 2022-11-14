import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foo } from './foo.model'

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  data!: Foo[];
  o!: Observable<Foo[]>

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  getPosts(): void {
    this.http
      .get<Foo[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.data = data;
      });
  }
}
