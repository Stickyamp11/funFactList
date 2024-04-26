import { Injectable, inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

interface UserInterface{
  email: string,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  test = "test";
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserInterface | undefined | null>(undefined);

  ngOnInit(){
    this.user$.subscribe(res => {
      this.currentUserSig.set({
        email: res?.email!,
        username: res?.displayName!
      })
    });
  }

  get currentUser(): UserInterface | undefined | null {
    console.log("inside; ", this.currentUserSig());
    return this.currentUserSig();
  }

  register(email: string, username: string, password: string): Observable<void>{
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(response => updateProfile(response.user, {displayName: username}));
    return from(promise);
  }

  login(email: string, password: string): Observable<void>{
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(() => {});
    return from(promise);
  }

  logOut(): Observable<void> {
    const promise = signOut(this.firebaseAuth);
    return from(promise);
  }
  constructor() { }
}
