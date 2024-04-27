import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAWJNOQueTvaDcr8bV03sKqJxxRrzZQVks",
  authDomain: "drakane-989da.firebaseapp.com",
  projectId: "drakane-989da",
  storageBucket: "drakane-989da.appspot.com",
  messagingSenderId: "924132438078",
  appId: "1:924132438078:web:93d2dbd6c16ff3d5f4216f"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([provideFirebaseApp(() => initializeApp(firebaseConfig))],
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()))
    
  ]
};
