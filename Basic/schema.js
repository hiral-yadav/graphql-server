import { buildSchema } from "graphql";

// metadata of the input 
const schema = buildSchema(`
        type Course {
            id: ID
            courseName: String
            category: String
            stack: Stack
            teachingAssists: [TeachAssist]
        }
        
        type TeachAssist {
            firstName: String
            lastName: String
            experience: String
        }
        
        enum Stack {
            WEB
            BACKEND
            DEVOPS
        }
        
        # whatever query methods are in Query will be implemented in resolver.
        type Query {
            getCourse(id: ID): Course
        }

        # Used to set the data in schema object
        # normally input will have the type defined in schema
        # ! denotes compulsory field
        input CourseInput {
            id: ID
            courseName: String!
            category: String
            stack: Stack
            techingAssists: [TeachAssistAssist]!
        }

        input TeachAssistAssist {
            firstName: String
            lastName: String
            experience: String
        }

        # Mutation is a keyword, do not change it. 
        # Used to fill in /set the data in data source (database or anything)
        # Use input to fill in the data
        type Mutation {
            createCourse(input: CourseInput): Course
        }
    `);

    export default schema;

