import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(private itemService : ItemsService) { }

  items:any = []
  ngOnInit(): void {
    
  this.get_Items()
  }

    public get_Items(){

    this.itemService.getItems().subscribe(res=>{
      this.items = res
      console.log(this.items);
      
    })
    }

}
