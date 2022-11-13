import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';

import { CardsComponent } from './cards.component';

// describe('CardsComponent', () => {
//   let component: CardsComponent;
//   let fixture: ComponentFixture<CardsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ CardsComponent ],
//       imports:[
//         BrowserAnimationsModule,
//         HttpClientTestingModule,
//         MaterialModule,
//         HttpClientModule,
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(CardsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
