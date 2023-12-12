import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';



@NgModule({
  declarations: [
    TeacherListComponent,
    TeacherFormComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
  ]
})
export class TeacherModule { }
