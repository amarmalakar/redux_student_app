import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Container from "../Component/UI/Container";
import classes from './SingleStudent.module.css'

const SingleStudent = () => {
    const students = useSelector(state => state.student.students);
    const params = useParams()
    const { id } = params;

    const student = students.find(student => student.id === parseInt(id));

    if (!student) {
        return <Container>
            <div className={classes.wrapper}>
                <h2>Student not found!</h2>
            </div>
        </Container>
    }

    return (
        <Container>
            <div className={classes.wrapper}>
                <h2>{student.firstName} {student.lastName}</h2>
                <p>{student.email}</p>
                <p>{student.address}</p>
                <p>{student.phone}</p>
            </div>
        </Container>
    )
}

export default SingleStudent
