import mongoose from "mongoose";
import { studentModel } from "../models/student.model";
import { Request, Response } from "express";


//TODO- GET ALL STUDENTS
export const getAllStudents = async (req: Request, res: Response): Promise<void> => {
    try {
        const students = await studentModel.find();
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send("Something went wrong!");
    }
};

//TODO- GET A SINGLE STUDENT
export const getStudent = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    // Ensure the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({ error: 'Invalid student ID !!' });
        return;
    }

    try {
        const student = await studentModel.findById(id);
        if (!student) {
            res.status(404).send({ error: 'Student not found' });
            return;
        }
        res.status(200).send(student);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong!" });
    }
}

//TODO- CREATE STUDENT
export const createStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        const newStudent = await studentModel.create(data);
        newStudent.save();
        res.status(201).send(newStudent);
    } catch (err: any) {
        res.status(500).send(err.message);
    }
}

//TODO- UPDATE STUDENT
export const updateStudent = async (req: Request, res: Response): Promise<void> => {
    const data = req.body;
    const { id } = req.params;
    try {
        const student = await studentModel.findByIdAndUpdate(id, data, { new: true });
        if (!student) {
            res.status(404).send('Student not found');
            return;
        }
        res.send(student);
        
    } catch (error: any) {
        console.error("Error updating student: ", error.message);
        res.status(500).send('Server error');
    }
}

//TODO- DELETE STUDENT
export const deleteStudent = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const student = await studentModel.findByIdAndDelete(id)
        if (!student) {
            res.status(404).send('Student not found');
            return;
        }
        res.send('Student deleted successfuly!');
    } catch (error: any) {
        console.error("Error deleting student: ", error.message);
        res.status(500).send('Server error');
    }
}