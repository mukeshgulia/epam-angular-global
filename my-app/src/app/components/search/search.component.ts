import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string;

  constructor() { }

  ngOnInit(): void {
  }

  printSearch(): void {
    console.log(this.searchText);
  }
}
