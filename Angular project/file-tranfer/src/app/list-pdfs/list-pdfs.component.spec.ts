import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPdfsComponent } from './list-pdfs.component';

describe('ListPdfsComponent', () => {
  let component: ListPdfsComponent;
  let fixture: ComponentFixture<ListPdfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPdfsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPdfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
