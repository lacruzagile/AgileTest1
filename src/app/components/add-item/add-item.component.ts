import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/models/MyErrorStateMatcher';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  frm!:FormGroup;
  action="Add";
  errorMatcher= new MyErrorStateMatcher();

  @ViewChild("itemForm") itemForm!:NgForm;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private itemService:ItemsService, private snackBar: MatSnackBar){
  }
  
  ngOnInit(): void {
    this.getItemById();
    this.frm=this.fb.group({
      id:[0],
      name:['', Validators.required],
      quantity:['', [Validators.required]]
    }
    )
  }

  get f(){
    return this.frm.controls;
  }

  onPost():void{
    this.itemService.addItem(this.frm.value).subscribe({
      next:(data)=>{
        this.itemForm.reset();
        this.itemForm.resetForm();
        this.snackBar.open("success", "close",{
          duration:3000
        });
      },
      error:(err)=>{
        this.snackBar.open("error", 'close',{
          duration:3000
        })
      }
    });
  }

  getItemById=()=>{
    const id=this.route.snapshot.params['id'];
    if(id) {
      this.action="Update";
      this.itemService.getById(id).subscribe({
        next:(item=> this.frm.patchValue(item)),
        error:(err)=>console.log(err)
      })
    }
  }
}
