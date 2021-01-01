import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  action='Ajouter une personne'
  state=''
  bid:number; bnom:string; bage:number
  constructor(private personservice:PersonService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params.id !==undefined){
      const pers=this.personservice.getPerson(this.route.snapshot.params.id)
      this.bid=pers.id; this.bnom=pers.nom ; this.bage=pers.age
      this.action='Modifier une personne'
      this.state='disabled'
    
    }
    else{
      this.bid=null;
      this.bnom=null;
      this.bage=null;
    }
   
  }
  actionPerson(id:number,nom:string,age:number){
    if(this.action=="Ajouter une personne"){
      this.personservice.addPerson(id,nom,age)
    }else{
      this.personservice.updatePerson(id,nom,age)

    }
  }
}
