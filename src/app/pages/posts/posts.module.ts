import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsComponent } from './posts.component';
import { PostComponent } from './components/post/post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserCircle as fasUserCircle, faShareAlt as fasShareAlt } from '@fortawesome/free-solid-svg-icons';
import { 
  faThumbsUp as farThumbsUp, 
  faThumbsDown as farThumbsDown, 
  faStar as farStar } from '@fortawesome/free-regular-svg-icons';
@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    PostsRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports: [PostsComponent]
})
export class PostsModule { 
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(fasUserCircle, fasShareAlt, farThumbsUp, farThumbsDown, farStar);
  }
}