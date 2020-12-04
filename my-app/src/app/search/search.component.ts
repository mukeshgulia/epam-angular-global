import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  @Output() public search = new EventEmitter<string>();

  public searchText: string;

  public onTextSearch$: Subject<string>;

  constructor() { }

  public ngOnInit(): void {
    this.onTextSearch$
        .pipe(
            debounceTime(1000),
            filter(text => text && text.length >= 3))
        .subscribe(
            text => {
              this.printSearch(text);
              this.search.emit(text);
            }
        );
  }

  private printSearch(text: string): void {
    console.log(`Searching ${text}`);
  }

  // public onSearch(): void {
  //   this.search.emit(this.searchText);
  // }
}
