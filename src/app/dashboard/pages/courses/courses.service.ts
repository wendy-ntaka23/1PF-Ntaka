import { Injectable } from "@angular/core";
import { Course } from "./models";
import { Observable, of } from 'rxjs';

@Injectable ({providedIn: 'root'})
export class CourseService {

    courses: Course[] = [
        {
            id: 1,
            name: 'Diseño Grafico',
            startDate: new Date(),
            endDate: new Date(),
        },
        {
            id: 2,
            name: 'HTML',
            startDate: new Date(),
            endDate: new Date(),
        },
        {
            id: 3,
            name: 'Desarrollo Web',
            startDate: new Date(),
            endDate: new Date(),
        },
        {
            id: 4,
            name: 'Full Stack',
            startDate: new Date(),
            endDate: new Date(),
        },
        {
            id: 5,
            name: 'CSS',
            startDate: new Date(),
            endDate: new Date(),
        },
        {
            id: 6,
            name: 'JavaScript',
            startDate: new Date(),
            endDate: new Date(),
        },
    ];

    getCourses$(): Observable<Course[]>{
        return of (this.courses);
    }

    createCourse$(payload: Course):Observable<Course[]>{
        this.courses.push(payload);
        return of ([...this.courses]);
    }

    editCourse$(id: number , payload: Course):Observable<Course[]>{
       // this.courses.push(payload);
        return of (this.courses.map((c) => (c.id === id ?  {...c,...payload} : c))
        );
}
    deleteCourses$(id: number): Observable<Course[]>{
    this.courses = this.courses.filter ((c) => c.id !== id);
    return of (this.courses);
}
getCourseById$ (id: number): Observable < Course | undefined>{
    return of (this.courses.find ((c) => c.id === id));
}
}