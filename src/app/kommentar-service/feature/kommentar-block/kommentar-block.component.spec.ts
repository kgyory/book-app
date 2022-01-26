import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KommentarBlockComponent } from './kommentar-block.component';

describe('kommentarblockComponent', () => {
  let component: KommentarBlockComponent;
  let fixture: ComponentFixture<KommentarBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KommentarBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KommentarBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
