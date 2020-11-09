import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() public search = new EventEmitter<string>();

  public searchText: string;

  constructor() { }

  public printSearch(): void {
    console.log(this.searchText);
  }

  public onSearch(): void {
    this.search.emit(this.searchText);
  }
}
