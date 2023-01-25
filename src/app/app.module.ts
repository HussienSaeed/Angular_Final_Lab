import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TodosComponent } from './components/todos/todos.component';
import { LoginComponent } from './components/login/login.component';

import { TableComponent } from './components/table/table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';


const routes: Routes = [

  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'products',component: ProductsComponent},
  {path:'users',component: UsersComponent},
  {path:'users/:id',component: UsersComponent},
  {path:'userForm',component: UserFormComponent},
  {path:'userForm/new',component: UserFormComponent},
  {path:'userDetails/:id',component: UserDetailsComponent},
  {path:'userForm/:id',component: UserFormComponent},
  {path:'**',component: NotfoundComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    TodosComponent,
    LoginComponent,
    TableComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    ProductItemComponent,
    HomeComponent,
    NotfoundComponent,
    UserFormComponent,
    UsersComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
