import {Component, OnInit} from '@angular/core';
import {InterfacePost} from '../Interfaces/IPost/InterfacePost';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: InterfacePost[];
  chosenPost: InterfacePost;

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(value => this.posts = value);
  }

  takeChosenPost(post: InterfacePost): void {
    this.chosenPost = post;
  }

}
