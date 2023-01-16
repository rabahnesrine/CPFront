import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  listItems:any=[]
  constructor(private itemService : ItemsService) { }

  ngOnInit(): void { 
    this.get_Items()
  }
  public get_Items(){

    this.itemService.getItems().subscribe(res=>{
      this.listItems = res
      console.log(this.listItems);
      
    })
    }
}
