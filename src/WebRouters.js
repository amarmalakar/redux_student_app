import { Route, Routes, Navigate } from "react-router-dom"
import AddStudent from "./Pages/AddStudent"
import EditStudentDetailsForm from "./Pages/EditStudentDetailsForm"
import SingleStudent from "./Pages/SingleStudent"
import Students from "./Pages/Students"

const WebRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/students" />} />
            <Route path="/students" element={<Students />} />
            <Route path="/student/add" element={<AddStudent />} />
            <Route path="/student/:id" element={<SingleStudent />} />
            <Route path="/student/edit/:id" element={<EditStudentDetailsForm />} />
        </Routes>
    )
}

export default WebRouters
