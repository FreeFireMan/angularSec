import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './components/post/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
