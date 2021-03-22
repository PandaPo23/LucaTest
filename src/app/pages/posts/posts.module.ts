import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsComponent } from './posts.component';
import { PostComponent } from './components/post/post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { 
  faUserCircle as fasUserCircle, 
  faShareAlt as fasShareAlt,
  faThumbsUp as fasThumbsUp, 
  faThumbsDown as fasThumbsDown, 
  faStar as fasStar,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faThumbsUp as farThumbsUp, 
  faThumbsDown as farThumbsDown, 
  faStar as farStar,
  faComment as farComment,
  faBell as farBell
} from '@fortawesome/free-regular-svg-icons';
import { LcDropdownComponent } from './components/lc-dropdown/lc-dropdown.component';
@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    LcDropdownComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
  exports: [PostsComponent]
})
export class PostsModule { 
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(fasUserCircle, fasShareAlt, fasThumbsUp, fasThumbsDown, fasStar, farThumbsUp, farThumbsDown, farStar, farComment, farBell);
  }
}