import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AddService } from './add/service/add.service';
import { HomeComponent } from './home/home.component';
import { NameSearchComponent } from './name-search/name-search.component';
import { NameService } from './name-search/service/name.service';
import { RemoveComponent } from './remove/remove.component';
import { RoleSearchComponent } from './role-search/role-search.component';
import { RoleService } from './role-search/service/role.service';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "users", component: NameSearchComponent},
  {path: "roles", component: RoleSearchComponent},
  {path: "add", component: AddComponent},
  {path: "remove", component: RemoveComponent},
  {path: "update", component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RoleService, NameService, AddService]
})
export class AppRoutingModule { }
