import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../Post';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  posts: any[] = [];

  constructor(private dataServices: DataService) { 
    this.dataServices.getData().subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

}
