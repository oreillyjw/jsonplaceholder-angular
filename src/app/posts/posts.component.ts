import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import Post from './posts';
import { UserService } from '../users/user.service';
import User from '../users/user';

import * as _ from 'underscore';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService, UserService]
})
export class PostsComponent implements OnInit {
  posts = [];
  postsLoading;
  pagedPosts = [];
  commentsLoading;
  currentPost;
  users: User[];
  pageSize = 10;

  constructor(private _postsService: PostsService, private _userService: UserService) { }

  ngOnInit() {
    this.postsLoading = true;

    this.loadPosts();

    this._userService.getUsers().then(res => {
      this.users = res;
    });

  }

  updateMasterDetailPost(post: Post){
    this.currentPost = post;
    if (post.comments == undefined ){
      this.commentsLoading = true;
      this._postsService.getPostsComments(post.id).then(res => {
        this.commentsLoading = false;
        this.currentPost.comments = res;
      });
    }
  }

  private loadPosts(filter?){
    this.postsLoading = true;

    this._postsService.getPosts(filter).then(res => {
        this.posts = res;
        this.pagedPosts = _.take(this.posts, this.pageSize);
        this.postsLoading = false;
    });
  }

  updateFilter(filter){
    this.currentPost = null;
    this.loadPosts(filter);
  }

  onPageChanged(page) {
      var startIndex = (page - 1) * this.pageSize;
      // _.rest offsets the array and then take grabs first n records
      this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
  }


}
