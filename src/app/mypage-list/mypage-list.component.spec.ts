import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypageListComponent } from './mypage-list.component';

describe('MypageListComponent', () => {
  let component: MypageListComponent;
  let fixture: ComponentFixture<MypageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
