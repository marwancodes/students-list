import { useEffect, useState } from "react"
import AddStudent from "./components/AddStudent"
import StudentTable from "./components/StudentTable"
// import { data } from "./utils/data";
import { Student } from "./utils/data";
import { fetchStudents } from "./api/students";



function App() {

  const [students, setStudents] = useState<Student[]>([]);


  useEffect(() => {
    fetchStudents()
      .then((data) => setStudents(data))
      .catch((err) => alert(err))
  }, [])

  return (
    <>
      <AddStudent students={students} setStudents={setStudents} />
      <StudentTable students={students} />
    </>
  )
}

export default App
