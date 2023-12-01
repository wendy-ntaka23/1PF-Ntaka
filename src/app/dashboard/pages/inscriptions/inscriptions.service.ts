import { Injectable } from "@angular/core";
import { inscription } from "./models";
import { Observable, of } from "rxjs";


@Injectable({ providedIn: 'root'})
export class InscriptionService{


    inscriptions : inscription[] = [
        {
            id:1,
            name: 'Jose Luis Campos',
            dateBirth: new Date(),
        },
        {
            id:2,
            name:'Carla Suarez',
            dateBirth: new Date(),
        },
        {
            id:3,
            name: 'Pablo Echeverria',
            dateBirth: new Date(),
        },
    ];

    getInscriptions$(): Observable<inscription[]> {
        return of (this.inscriptions);
    }

    createInscription$(payload: inscription): Observable<inscription[]>{
        this.inscriptions.push(payload) ;
        return of ([...this.inscriptions]);

    } 
    editInscription$(id: number, payload: inscription): Observable<inscription[]>{
        return of (
            this.inscriptions.map((c) => (c.id === id ? {...c , ...payload} : c))
        );

    }
    deleteInscription$(id: number): Observable<inscription[]>{
        this.inscriptions = this.inscriptions.filter ((c) => c.id !== id);
        return of (this.inscriptions);
    }
    getInscriptionById$(id: number): Observable <inscription | undefined>{
        return of (this.inscriptions.find((c) => c.id === id));
    }
}