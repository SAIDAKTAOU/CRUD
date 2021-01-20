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
  
  getPerson(id:number):Observable<Person>{
    return this.http.get<Person>(this.backEndURL+"/"+id)
   }

  getAllPersons(): Observable<Person[]>{
    return this.http.get<Person[]>(this.backEndURL)}

  addPerson(person: Person): Observable<Person>{
    return this.http.post<Person>(this.backEndURL,person)
  }

  deletePerson(id: number):Observable<Person>{
    return this.http.delete<Person>(this.backEndURL+"/"+id)
  }

  updatePerson(person:Person):Observable<Person>{
    return this.http.put<Person>(this.backEndURL,person)
  }
}
