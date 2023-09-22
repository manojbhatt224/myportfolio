import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes:Routes=[
  {path:'',component: HomeComponent},
{path:'Home',component: HomeComponent},  
{path:'Abouut',component: AboutComponent}, 
{path:'Portfolio',component: PortfolioComponent},
{path:'Resume',component: ResumeComponent},
{path:'Contact',component: ContactComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
    
  ]
})
export class AppRoutingModule { }
