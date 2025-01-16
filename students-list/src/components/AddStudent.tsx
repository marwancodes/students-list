import { Paper, TextField, Button } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Student } from '../utils/data';
import { createStudent } from '../api/students';


interface Props {
    students: Student[];
    setStudents: Dispatch<SetStateAction<Student[]>>;
}

const initialState = { id: 287, fullName: "", age: "", email: "", class: "", year: "" };

const AddStudent = ({ setStudents, students }: Props) => {

    const [formData, setFormData] = useState(initialState);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    //Add data
    const handleSubmit = async () => {
        try {
            //  ** call the post endpoint
            const data = await createStudent(formData);
            // console.log(formData);
            setStudents([...students, data]);
            setFormData(initialState);
            // console.log(data);
            
        } catch (error) {
            alert(error);
        }
    }
    
    //useEffect
    useEffect(() => {
        console.log("Firing useEffect")
        if (formData.fullName === "Admin") {
            alert("You entered a name that will not be store in database");
        }
    }, [formData.fullName])

    return (
        <Paper sx={{ width: 300, padding: 5, marginTop: "25px", gap: 1, display: "flex", flexDirection: "column" }}>
            <TextField onChange={handleChange} value={formData.fullName} id="outlined-basic" name='fullName' label="Full Name" variant="outlined" />
            <TextField onChange={handleChange} value={formData.age} id="outlined-basic" name='age' label="Age" variant="outlined" />
            <TextField onChange={handleChange} value={formData.email} id="outlined-basic" name='email' label="Email" variant="outlined" />
            <TextField onChange={handleChange} value={formData.class} id="outlined-basic" name='class' label="Class" variant="outlined" />
            <TextField onChange={handleChange} value={formData.year} id="outlined-basic" name='year' label="Year" variant="outlined" />
            <Button onClick={handleSubmit} variant='contained'>Submit</Button>
        </Paper >
    )
}

export default AddStudent