import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrscannerdataPage } from './qrscannerdata.page';

describe('QrscannerdataPage', () => {
  let component: QrscannerdataPage;
  let fixture: ComponentFixture<QrscannerdataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrscannerdataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrscannerdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
