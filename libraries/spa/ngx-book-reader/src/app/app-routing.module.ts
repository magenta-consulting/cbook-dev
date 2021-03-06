import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { BookListingComponent } from "./book-listing/book-listing.component";
import { BookReaderComponent } from "./book-reader/book-reader.component";
import { BookContactComponent } from "./book-contact/book-contact.component";
import { UserGroupManagementComponent } from './user-group-management/user-group-management.component';
import { UserGroupListComponent } from './user-group-list/user-group-list.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: BookListingComponent },
    { path: 'contacts', component: BookContactComponent },
    { path: 'books/:id/reader', component: BookReaderComponent },
    { path: 'usergroup', component: UserGroupManagementComponent },
    { path: 'usergrouplist', component: UserGroupListComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
      RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
