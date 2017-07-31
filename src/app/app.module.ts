import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';

import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';

import { usersRouting }      from './users/users.routing';
import { postsRouting }      from './posts/posts.routing';
import { routing }           from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaginationComponent } from './pagination/pagination.component';

// appRoutes,
// { enableTracing: true } // <-- debugging purposes only
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UsersComponent,
    UserFormComponent,
    PostsComponent,
    HomeComponent,
    NotFoundComponent,
    SpinnerComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    usersRouting,
    postsRouting,
    routing
  ],
  bootstrap: [AppComponent],
  providers: [PreventUnsavedChangesGuard]
})
export class AppModule { }
