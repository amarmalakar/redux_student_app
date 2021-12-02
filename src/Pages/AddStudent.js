import { Fragment } from "react"
import AddNewStudentForm from "../Component/form/AddNewStudentForm"
import Box from "../Component/UI/Box"
import Container from "../Component/UI/Container"

const AddStudent = () => {
    
    return (
        <Fragment>
            <br /><br />
            <Container>
                <Box>
                    <AddNewStudentForm />
                </Box>
            </Container>
        </Fragment>
    )
}

export default AddStudent