import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  list=[{item:"roue",description:"velo",img:"/assets/roue1.png" },{item:"roue2",description:"voiture",img:"/assets/roue2.png" },{item:"roue",description:"velo",img:"/assets/roue1.png" },{item:"roue2",description:"voiture",img:"/assets/roue2.png" },{item:"roue3",description:"voiture",img:"/assets/roue3.png" },{item:"roue4",description:"voiture",img:"/assets/roue4.png" }]
  constructor() { }

  ngOnInit(): void { 
    console.log(this.list)
  }

}
