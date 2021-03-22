import { Component, OnInit } from '@angular/core';
import { mockPosts, PostItem } from './posts.mock';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  defaultText: string = 'Explorar';
  menuItems: string[] = ['Explorar - A', 'Explorar - B', 'Explorar - C'];
  posts: PostItem[] = [];
  ngOnInit(): void {
    this.posts = mockPosts;
  }
}
