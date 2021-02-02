import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obs-exemple',
  templateUrl: './obs-exemple.component.html',
  styleUrls: ['./obs-exemple.component.css']
})
export class ObsExempleComponent implements OnInit {
  compteur:number
  minutes:number=0
  heures:number=0
  monObservable:Observable<number>
  constructor() { }

  ngOnInit(): void {
    this.compteur=0
    this.monObservable=new Observable(observer=>{
      setInterval(()=>{
        observer.next(this.compteur)
        this.compteur++
      },1000)
     
    })

    this.monObservable.subscribe()
  }

}
