import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22,
      label: 'Number of Users',
    },
    { value: 900,
      label: 'Revenue',
    },
    { value: 50,
      label: 'Satisfaction Score',
    }
  ];

items = [
  { image: 'assets/mountains.jpg', title: 'Mountain', description: 'What a Mountain!'},
  { image: 'assets/bgroundPic.jpg', title: 'Nice', description: 'What a Thing!'}
]

  constructor() { }

  ngOnInit(): void {
  }

}
