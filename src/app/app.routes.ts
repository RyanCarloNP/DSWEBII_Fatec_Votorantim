import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseComponent } from './course/course.component';

export const routes: Routes = [
  {path: "course", component: CourseComponent},
  {path: "course-details", component: CourseDetailsComponent},
  {path: "course/:id", component: CourseComponent}
];
