import { Component, OnInit } from '@angular/core';
import { MypageService } from '../mypage.service';

@Component({
  selector: 'app-mypage-list',
  templateUrl: './mypage-list.component.html',
  styleUrls: ['./mypage-list.component.css']
})
export class MypageListComponent implements OnInit {

  posts: any[] = []
  constructor(private mypageService: MypageService) { }

  ngOnInit() {
    this.mypageService.getMypage().subscribe((data : any[])=>{
      console.log(data);
      this.posts = data;
      })
  }
}
