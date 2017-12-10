import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import Routes và RoutesModule
import { RouterModule, Routes } from '@angular/router';
//import các component cần thiết
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { IndexComponent } from './index/index.component';
//cấu hình routes với home là trang chính
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'index/:id', component: IndexComponent },

];

@NgModule({
  imports: [
    CommonModule,
    //import routes đã cấu hình vào RouteModule
    RouterModule.forRoot(routes),
  ],
  //export RouteModule để app module nhận nó
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
