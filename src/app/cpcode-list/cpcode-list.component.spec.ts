import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpcodeListComponent } from './cpcode-list.component';

describe('CpcodeListComponent', () => {
  let component: CpcodeListComponent;
  let fixture: ComponentFixture<CpcodeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpcodeListComponent]
    });
    fixture = TestBed.createComponent(CpcodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
