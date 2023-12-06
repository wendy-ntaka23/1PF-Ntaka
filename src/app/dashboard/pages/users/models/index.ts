export interface User {
    id: number;
    name: string;
    lastName: string;
    curso: string;
    clase: string;
    email: string ;
    token: string;
    role: 'ADMIN' | 'EMPLOYEE';
    password: string;
}