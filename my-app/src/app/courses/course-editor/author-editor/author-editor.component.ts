import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/core/services/course/model/author';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, startWith, tap } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-author-editor',
  templateUrl: './author-editor.component.html',
  styleUrls: ['./author-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorEditorComponent implements OnInit {
  public visible: boolean = true;
  public selectable: boolean = true;
  public removable: boolean = true;
  public addOnBlur: boolean = true;
  public readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public authorControl = new FormControl();

  @Input() public authorsFromEditor: Author[];
  @Input() public allAuthors: Author[];
  @Output() public authorsChanged = new EventEmitter<Author[]>();
  public authors: Author[];


  @ViewChild('authorInput') public authorInput: ElementRef<HTMLInputElement>;

  public filteredAuthors: Observable<Author[]>;

  constructor() {}

  public ngOnInit(): void {
    const temp = JSON.stringify(this.allAuthors);
    this.filteredAuthors = this.authorControl.valueChanges.pipe(
      // tslint:disable-next-line:deprecation
      startWith(''),
      filter((name) => typeof name === 'string'),
      map((name: string | null) =>
        name ? this._filter(name) : this.allAuthors.slice()
      )
    );
    this.authors =
      this.authorsFromEditor?.length > 0 ? this.authorsFromEditor : [];
  }

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add new author
    if ((value || '').trim()) {
      this.authors.push(this.createAuthor(value));
      this.authorsChanged.emit(_.cloneDeep(this.authors));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.authorControl.setValue(null);
  }

  public remove(author: Author): void {
    const index = this.authors.indexOf(author);

    if (index >= 0) {
      this.authors.splice(index, 1);
      this.authorsChanged.emit(_.cloneDeep(this.authors));
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    this.authors.push(event.option.value);
    this.authorInput.nativeElement.value = '';
    this.authorControl.setValue(null);
    this.authorsChanged.emit(_.cloneDeep(this.authors));
  }

  private _filter(query: string): Author[] {
    return this.allAuthors.filter(
      (author) =>
        this.authors.findIndex(
          (alreadySelectedAuthor) =>
            alreadySelectedAuthor.name.toLowerCase() ===
            author.name.toLowerCase()
        ) === -1 && author.name.toLowerCase().indexOf(query.toLowerCase()) === 0
    );
  }

  private getId(): number {
    return Math.random() * 1000;
  }

  private createAuthor(value: string): Author {
    const values: string[] = value.split(' ');
    const firstName: string = values[0];
    const lastName: string = values.splice(1).join(' ');

    return new Author(this.getId(), firstName, lastName);
  }
}