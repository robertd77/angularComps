import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

data = [
  { name: 'James', age: 44, job: 'Plumber'},
  { name: 'Sam', age: 41, job: 'Hobo'},
  { name: 'Steve', age: 43, job: 'Window Washer'}
];

headers = [
  { key: 'name', label: 'Name'},
  { key: 'age', label: 'Age'},
  { key: 'job', label: 'Job'}
];

  constructor() { }

  ngOnInit(): void {
  }

}
