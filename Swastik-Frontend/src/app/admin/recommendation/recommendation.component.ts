import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit{

  formdata:any;
  id = 0;
  result:any;
  crops:any;


constructor(private api:ApiService){

}


  ngOnInit(): void {
    this.api.get("crops").subscribe((result:any)=>{
      this.crops = result.data;

    })
 this.load();

  }

load(){
  this.id = 0;
  this.api.get("recommendations").subscribe((result:any)=>{
    // console.log(result);
    this.result = result.data
  })
  this.formdata= new FormGroup({
    //  adminid:new FormControl("",Validators.compose([Validators.required])),
     cropid:new FormControl("",Validators.compose([Validators.required])),
     rdate:new FormControl("",Validators.compose([Validators.required])),
     dose:new FormControl("",Validators.compose([Validators.required])),
     space:new FormControl("",Validators.compose([Validators.required])),
     drip:new FormControl("",Validators.compose([Validators.required])),
     spare:new FormControl("",Validators.compose([Validators.required])),
  })
}
   submit(data:any){
    if(this.id==0){
    this.api.post("recommendations", data).subscribe((result:any)=>{
      this.load();
    })
    }
}


edit(id:any){
  this.id = id;
  this.api.get("recommendations/" +id).subscribe((result:any)=>{
    this.formdata= new FormGroup({
      // adminid:new FormControl(result.data.adminid,Validators.compose([Validators.required])),
     cropid:new FormControl(result.data.cropid,Validators.compose([Validators.required])),
     rdate:new FormControl(result.data.rdate,Validators.compose([Validators.required])),
     dose:new FormControl(result.data.dose,Validators.compose([Validators.required])),
     space:new FormControl(result.data.space,Validators.compose([Validators.required])),
     drip:new FormControl(result.data.drip,Validators.compose([Validators.required])),
     spare:new FormControl(result.data.spare,Validators.compose([Validators.required])),
    })
  })
}

delete(id:any){

      this.api.delete("recommendations/" + id).subscribe((result:any)=>{
        console.log(result);
        this.load()


      })

    }
  }




