import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCursoComponent } from './editar-curso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';

// describe('EditarCursoComponent', () => {
//   let component: EditarCursoComponent;
//   let fixture: ComponentFixture<EditarCursoComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [EditarCursoComponent],
//       imports: [
//         BrowserAnimationsModule,
//         HttpClientTestingModule,
//         MaterialModule,
//         HttpClientModule,
//       ],
//       providers:
//         [
//           {
//             provide: ActivatedRoute,
//             useValue: {
//               paramMap: { params: { id: '24fkzrw3487943uf358lovd' } }
//             }
//           }
//         ]
//     })
//       .compileComponents();

//     fixture = TestBed.createComponent(EditarCursoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
