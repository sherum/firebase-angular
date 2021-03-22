import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {storyRoutes} from './storyRoutes';



@NgModule({
  imports: [RouterModule.forChild(storyRoutes)],
  exports: [RouterModule]
})
export class StoryRoutingModule { }
