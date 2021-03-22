import { Component, Input, OnInit } from '@angular/core';
import { PostItem } from '../../posts.mock';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  like: boolean | undefined;
  favorite: boolean = false;
  @Input() data: PostItem = {} as PostItem;
  onLikeClick(like: boolean): void {
    if (this.like === like) {
      this.like = undefined;
    } else {
      this.like = like;
    }
  }  

  onFavoriteClick(): void {
    this.favorite = !this.favorite;
  } 
  ngOnInit(): void {
    this.like = this.data.like;
    this.favorite = this.data.favorite;
  }

}
