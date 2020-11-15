import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call printSearch when click Search button', fakeAsync(() => {
    spyOn(component, 'printSearch');
    const search = fixture.debugElement.nativeElement.querySelector('button');
    search.click();
    tick();
    expect(component.printSearch).toHaveBeenCalled();
  }));

  it('should console log when click Search button', fakeAsync(() => {
    spyOn(console, 'log');
    const search = fixture.debugElement.nativeElement.querySelector('button');
    search.click();
    tick();
    expect(console.log).toHaveBeenCalled();
  }));

});
