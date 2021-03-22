import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  like: boolean | undefined;
  favorite: boolean = false;
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
  }

}
