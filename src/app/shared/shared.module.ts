import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
SidebarComponent
  ],
  declarations: [SharedComponent,SidebarComponent]
})
export class SharedModule { }
