import { Student } from "../utils/data";
import axios from "axios";

// const BASE_URL = "/students";

export const fetchStudents = async () => {
    try {
        const { data } = await axios.get("/students"); // axios automatically parses the JSON
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const createStudent = async (newStudent: Student) => {
    try {
        const { data } = await axios.post("/students", newStudent);
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}