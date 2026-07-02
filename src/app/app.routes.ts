import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Skills } from './skills/skills';
import { Feedback } from './feedback/feedback';
import { AboutMe } from './about-me/about-me';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'skills', component: Skills },
  { path: 'about-me', component: AboutMe },
  { path: 'feedback', component: Feedback },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
