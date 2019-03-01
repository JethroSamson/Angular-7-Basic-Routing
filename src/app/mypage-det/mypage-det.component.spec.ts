import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypageDetComponent } from './mypage-det.component';

describe('MypageDetComponent', () => {
  let component: MypageDetComponent;
  let fixture: ComponentFixture<MypageDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypageDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypageDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
