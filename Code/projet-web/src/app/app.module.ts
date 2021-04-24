import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Menu1Component } from './menu1/menu1.component';
import { ContactComponent } from './contact/contact.component';
import { ServecComponent } from './servec/servec.component';
import { FooterComponent } from './footer/footer.component';
import { ConsulterPlat1Component } from './consulter-plat1/consulter-plat1.component';
import { ImgeComponent } from './imge/imge.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { RomveDishComponent } from './romve-dish/romve-dish.component';
import { EditDishComponent } from './edit-dish/edit-dish.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarMenu2Component } from './navbar-menu2/navbar-menu2.component';
import { MenuSladeComponent } from './menu-slade/menu-slade.component';
import { MenuDessertComponent } from './menu-dessert/menu-dessert.component';
import { MenuDishComponent } from './menu-dish/menu-dish.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { MenuContuneComponent } from './menu-contune/menu-contune.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { FooterConsultComponent } from './footer-consult/footer-consult.component';
import { MenuComponent } from './menu/menu.component';
import {ConsulterPlatComponent} from './sauthentifier/consulter-plat.component';
import { ApplicationViewComponent } from './application-view/application-view.component';
import {RouterModule, Routes} from "@angular/router";
import { ValidCarteComponent } from './valid-carte/valid-carte.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CartComponent } from './cart/cart.component';
import { AuthService } from './services/auth.service';

const appRoutes: Routes=[
   { path: 'application', component :ApplicationViewComponent},
   {path:'menu',component :MenuComponent , canActivate:[AuthService]},
   {path:'consult' ,component:ConsulterPlat1Component , canActivate:[AuthService]},
   {path:'validcarte' ,component:ValidCarteComponent},
   {path:'formulaire',component:FormulaireComponent},
   {path: '',component : ApplicationViewComponent},
   {path:'cart' , component:CartComponent} , 
   {path:'Checkout' , component:FormulaireComponent}

 ];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    Menu1Component,
    ContactComponent,
    ServecComponent,
    FooterComponent,
    ConsulterPlatComponent,
    ConsulterPlat1Component,
    ImgeComponent,
    AddDishComponent,
    RomveDishComponent,
    EditDishComponent,
    NavbarMenuComponent,
    NavbarMenu2Component,
    MenuSladeComponent,
    MenuDessertComponent,
    MenuDishComponent,
    MenuFooterComponent,
    MenuContuneComponent,
    MenuHomeComponent,
    FooterConsultComponent,
    MenuComponent,
    ApplicationViewComponent,
    ValidCarteComponent,
    FormulaireComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
