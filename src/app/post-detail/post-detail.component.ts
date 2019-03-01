import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})

export class PostDetailComponent implements OnInit {

  post: any;
  comments: any[] = [];
  profiles: any[] = [];
  constructor(private homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //post
      this.homeService.getPost(params.get('post_id')).subscribe(p =>{
        console.log(p);
        this.post = p;
        }) 
      //profiles
      this.homeService.getProfiles().subscribe((data : any[])=>{
        console.log(data);
        this.profiles = data;
      })
      //comments 
      this.homeService.getComment(params.get('post_id')).subscribe((data: any[])=>{
        var idNow = params.get('post_id')
        console.log(idNow);
        console.log(data);
        const result = data.filter(data => data.post_id == idNow);
        console.log(result);
        this.comments = result;
      })  
    });
  }
}
