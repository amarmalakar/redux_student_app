import { Fragment } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Box from "../Component/UI/Box"
import Container from "../Component/UI/Container"
import { studentActions } from "../store/student-slice";
import classes from './Students.module.css';

const Students = () => {
    const students = useSelector(state => state.student.students);
    // console.log(students);
    const dispatch = useDispatch();

    const deleteStudentHandler = (studentId) => {
        dispatch(
            studentActions.deleteStudent(studentId)
        )
    }

    const studentList = students.map((student) => (
        <Fragment key={student.id}>
            <Box>
                <ul className={classes.list}>
                    <li>{student.firstName} {student.lastName}</li>
                    <li>{student.phone}</li>
                    <li>
                        <Link to={`/students`} onClick={() => {deleteStudentHandler(student.id)}}>Delete</Link>
                        <Link to={`/student/edit/${student.id}`}>Edit</Link>
                        <Link to={`/student/${student.id}`}>Read</Link>
                    </li>
                </ul>
            </Box>
            <br />
        </Fragment>
    ))

    return (
        <Container>
            {studentList}
        </Container>
    )
}

export default Students
