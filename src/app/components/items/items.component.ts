import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemsService } from 'src/app/services/items.service';

import { Router } from '@angular/router';
import { ItemsModel } from 'src/app/models/items.model';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  dataSource= new MatTableDataSource<ItemsModel>();
  displayColumns= ['id', 'name', 'quantity', 'action'];

  ngOnInit(): void {
    this.loadItems();
  }

  constructor(private itemsService: ItemsService, private router: Router){
  }

  loadItems(){ 
    this.itemsService.getItems().subscribe({
      next:(response)=>{
        this.dataSource.data = response.items;
      }, 
      error:(err)=>{
        console.error(err);
      }
    }

    )
  }

  onBtnEdit(id:number):void{
    this.router.navigate(['/items/edit/'+id])
  }

  onBtnDelete(id:number):void{
    if(window.confirm('Delete Item?')){ 
      this.itemsService.delete(id).subscribe({
        next:(resp)=>{

          this.loadItems();
        }
      })
    }
  }

}
