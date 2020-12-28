import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
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
import { map, startWith, tap } from 'rxjs/operators';
import { filter } from 'lodash';

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

  @Output() public authors: Author[];

  @ViewChild('authorInput') public authorInput: ElementRef<HTMLInputElement>;

  public filteredAuthors: Observable<Author[]>;

  constructor() {}

  public ngOnInit(): void {
    const temp = JSON.stringify(this.allAuthors);
    console.log(`author editor: ${temp}`);
    this.filteredAuthors = this.authorControl.valueChanges.pipe(
      // tslint:disable-next-line:deprecation
      startWith(null),
      tap((name) => console.log(`tap ${name}`)),
      map((author: Author | null) =>
        author ? this._filter(author) : this.allAuthors.slice()
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
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    this.authors.push(event.option.value);
    this.authorInput.nativeElement.value = '';
    this.authorControl.setValue(null);
  }

  private _filter(author: any): Author[] {
    console.log(`_filter: ${author}`);
    const filterName: string = author.name
      ? author.name.trim().toLowerCase()
      : author.trim().toLowerCase();
    return this.allAuthors.filter((a) => {
      return filterName.includes(' ')
        ? a.name.toLowerCase().indexOf(filterName.split(' ')[0]) === 0 &&
          a.name.toLowerCase().indexOf(` ${filterName.split(' ')[1]}`) === 0
        : a.name.toLowerCase().indexOf(filterName) === 0;
    }
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
