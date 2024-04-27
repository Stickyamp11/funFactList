import { Injectable, inject, signal } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FunFactInterface } from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class FactService {
  firestore = inject(Firestore);
  factsCollection = collection(this.firestore, 'funfact');
  facts$ = new BehaviorSubject<FunFactInterface[]>([]);
  factsSig =  toSignal<FunFactInterface[],FunFactInterface[]>(this.facts$.asObservable(), {initialValue: []});

  getAllFacts$ = new Subject<void>;

  constructor() { 
    this.getFactsToVar();
  }

  ngOnInit() {
  }

  getFactsToVar(){
    this.getFacts().subscribe(facts => {
      this.facts$.next(facts);
    });
  }
  getFacts(): Observable<FunFactInterface[]> {
    return collectionData(this.factsCollection, {
    }) as Observable<FunFactInterface[]>

  }
    //    return getDocs(q1)


    // return getDocs(this.factsCollection, {
    //  idField: userUID
    //}) as Observable<FunFactInterface[]>
  

}
