import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any
  posts: any[] = []
  constructor(private homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.homeService.getProfile(params.get('id')).subscribe(u =>{
        console.log(u);
        this.user = u;
        })   
      //Posts 
      this.homeService.getPostAll().subscribe((data : any[])=>{
        console.log(data);
        var idNow = params.get('id');
        console.log(idNow);
        const result = data.filter(data => data.acct_id == idNow);
        console.log(result);
        this.posts = result
        })
    });
  }
}
