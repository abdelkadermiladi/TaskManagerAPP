import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';

import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
//import { DragDropModule } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCreateComponent,
    TaskDetailsComponent,
    TaskUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add the FormsModule here
    HttpClientModule, // Add HttpClientModule here
    //DragDropModule,


  ],
  providers: [DatePipe]
,
  bootstrap: [AppComponent]
})
export class AppModule { }
