import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  abc: any;
  public getproduct: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    
  ) { }

  goToProduct(pid:any){
    this.router.navigate(["detail/" + pid]);
  }

}
