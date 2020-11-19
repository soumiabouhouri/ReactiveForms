import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PostService} from './post.service';
import {IPost} from './ipost';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: any[] ;
  constructor(private postService: PostService) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.postService.getPosts()
      .subscribe(data => this.posts = data);
  }

  CreatePost(title: string): void{
     this.postService.addPost( {title} as IPost)
       .subscribe(post => {
         this.posts.push(post);
       });
  }
  delete(post: any): void {
  //  this.posts = this.posts.filter(h => h !== post);
    this.postService.deletePost(post).subscribe();
  }
 /* getPostById(postId: number): void {
    this.postService.getPostByID(postId).subscribe(response => { this.posts = response;
    }, error => {
        alert(' error happens all time');
        alert(error);
      });
  }*/
  // @ts-ignore
  updateHero(hero: IPost): Observable<any> {
     this.postService.updatePost(hero).subscribe(() => this.posts);
  }


}
