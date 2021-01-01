import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public persons =[
    {id: 1, nom : "Said" , age : 23 },
    {id : 2 , nom : "farid" , age : 25}
  ];
  private backEndURL="http://localhost:8080/personnes";

  constructor(private http: HttpClient) { }

  getPerson(id){return this.persons.find(e=>e.id===+id)}

  getAllPersons(): Observable<Person[]>{return this.http.get<Person[]>(this.backEndURL)}

  addPerson(id:number,nom:string,age:number){
    this.persons.push({id,nom,age})}

  deletePerson(id: number){
    this.persons.splice(this.persons.findIndex(e => e.id === +id), 1);
  }

  updatePerson(id:number,nom:string,age:number){
    this.persons[this.persons.findIndex(e => e.id === +id)]={id,nom,age}
  }
}
