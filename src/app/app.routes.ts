import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { CodeCorrectorComponent } from './code-corrector/code-corrector.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'learn', component: LearnComponent },
    { path: 'code', component: CodeCorrectorComponent }
];
