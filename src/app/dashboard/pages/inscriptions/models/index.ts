import { Course } from "../../courses/models";
import { User } from "../../users/models";

export interface inscription{
    id: number;
    userId: number;
    courseId: number;
    dateBirth: Date;
    user?: User;
    course?: Course;
}