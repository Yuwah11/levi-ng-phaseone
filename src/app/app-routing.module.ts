import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectListsComponent } from './components/project-lists/project-lists.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
    {path: '', component: HomeTwoComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'services', component: ServiceComponent},
    {path: 'contactus', component: ContactusComponent},
    {path: 'projects', component: ProjectListsComponent},
    //{path: ':category/:name', component: ProjectDetailComponent},
    {path: ':cat/:name', component: ProjectDetailComponent},
    {path: ':cat', component: ProjectListsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }