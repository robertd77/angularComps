import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

modalOpen = false;

items = [
  { title: "What's a Dog?", content: "bla bla bla bla bla bla bla bla bla bla" },
  { title: "What's a Cat?", content: "bla bla bla bla bla bla bla bla bla bla" },
  { title: "What's a Bird?", content: "bla bla bla bla bla bla bla bla bla bla" }
]
  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }

}
