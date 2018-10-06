import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.css']
})
export class LeftNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $(".mmm").metisMenu(
        {
          toggle: false
        }
      );
    });
  }

}
