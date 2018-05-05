
import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { ArticalPageComponent} from './artical-page/artical-page.component';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';
import { HomePageComponent} from './home-page/home-page.component';
import {MapPageComponent} from './map-page/map-page.component';
import {ManageUsersComponent} from './admin-list/manage-users/manage-users.component';
import  {AdminMapComponent} from './admin-list/admin-map/admin-map.component';
import { ManageVendorsComponent } from './admin-list/manage-vendors/manage-vendors.component';
import {BusRoutesComponent} from './admin-list/bus-routes/bus-routes.component';

const routers: Routes =[
    {path:' ',component:AppComponent},
    {path:'login',component:LoginPageComponent},
    {path:'admin',component:AdminListComponent,canActivate:[AdminGuard]},
    {path:'article',component:ArticalPageComponent,canActivate:[SubscriberGuard]},
    {path:'home',component:HomePageComponent},
    {path:'Map',component:MapPageComponent},
    {path:'Manage-users',component:ManageUsersComponent,canActivate:[AdminGuard]},
    {path:'Admin-map',component:AdminMapComponent,canActivate:[AdminGuard]},
    {path:'Manage-vendors',component:ManageVendorsComponent,canActivate:[AdminGuard]},
    {path:'bus-routes',component:BusRoutesComponent,canActivate:[AdminGuard]}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routers)
     

    ],
    exports: [RouterModule],
    providers:[]
        
})

export class AppRoutingModule{}