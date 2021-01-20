import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  persons:Observable<Person[]>;
  constructor(private router:Router,private personservice:PersonService) { }

  ngOnInit(): void {
    this.persons = this.personservice.getAllPersons();
  }

  deletePerson(id:number){
    if(confirm('Vous etes sur de vouloir supprimer l\'element?')){
    this.personservice.deletePerson(id).subscribe()
    this.ngOnInit()

  }
  }
}
