import { Component, OnInit } from '@angular/core';
import {GithubFollowersService} from './github-followers.service';
import {Observable} from 'rxjs';
import {IPost} from '../posts/ipost';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: Object;
  constructor(private service: GithubFollowersService) { }

  ngOnInit(): void {
    this.service.GetAll()
      .subscribe(data => this.followers = data);
  }


}
