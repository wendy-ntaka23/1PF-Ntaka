import { Injectable } from "@angular/core";
import { Student } from "../courses/models";
import { Observable, of } from "rxjs";



@Injectable({ providedIn: 'root' })
export class StudentsService {

    students: Student[] = [
    
        {
            id:1,
            lastname:'Wendy Ntaka',
            numeroDNI: 39465172,
        },
        {
            id:2,
            lastname:'Rocio Sanchez',
            numeroDNI: 40890691,
        },
        {
            id:3,
            lastname:'Lucia Lopez',
            numeroDNI: 37589200,
        },
        {
            id:4,
            lastname:'Gonzalo Santacaterina',
            numeroDNI: 85691455,
        },
        {
            id:5,
            lastname:'Zoe De Abreu',
            numeroDNI: 27895140,
        },
        {
            id:6,
            lastname:'Leon Ali',
            numeroDNI: 39890036,
        },

    ];

    getStudents$(): Observable<Student[]> {
        return of (this.students);
    }

    createStudent$(payload: Student):Observable<Student[]>{
        this.students.push(payload);
        return of ([...this.students]);
    }

    editStudent$(id: number ,payload: Student):Observable<Student[]>{
      //  this.students.push(payload);
        return of (
            this.students.map((c) => (c.id === id ? {...c, ...payload} : c))
        ) ;
    }

    deleteStudents$(id: number): Observable<Student[]>{
        this.students = this.students.filter ((c) => c.id !== id);
        return of (this.students);
    }

    getStudentById$ (id: number): Observable < Student | undefined>{
        return of (this.students.find ((c) => c.id === id));
    }
}