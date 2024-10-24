import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';

export const routes: Routes = [
  {
    path: "course-details", component: CourseDetailsComponent,
  }
];
