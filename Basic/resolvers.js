import { nanoid } from "nanoid";

// This is the class for schema defined in schema.js
class Course {
    constructor(id, {
        courseName, category, stack, teachingAssists }){
            this.id = id
            this.courseName = courseName
            this.category = category
            this.stack = stack
            this.teachingAssists = teachingAssists
    }
}

const courseHolder = {}

const resolvers = {
    getCourse: ({ id }) => {
        return new Course(id, courseHolder[id]);
    },
    createCourse: ({ input }) => {
        let id = nanoid()
        courseHolder[id] = id
        return new Course(id, input)
    }
}

export default resolvers;


