import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:number
nom:String
age:number
  constructor(private personservice:PersonService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    const person = this.personservice.getPerson(this.id).subscribe(person=>{
      this.nom = person.nom
    this.age = person.age
    })
    
  }

}
