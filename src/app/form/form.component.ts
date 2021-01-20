import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../Person';
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
  constructor(private router:Router,private personservice:PersonService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params.id !==undefined){
      const pers=this.personservice.getPerson(this.route.snapshot.params.id)
      .subscribe(pers=>{
        this.bid=pers.id; this.bnom=pers.nom ; this.bage=pers.age
      })
      
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
      this.personservice.addPerson(new Person(id,nom,age)).subscribe();
      this.router.navigate(["list"])
    }else{
      this.personservice.updatePerson(new Person(id,nom,age)).subscribe()
      this.router.navigate(["list"])

    }
  }
}
