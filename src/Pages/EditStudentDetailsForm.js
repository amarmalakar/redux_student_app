import EditStudentForm from "../Component/form/EditStudentForm"
import Box from "../Component/UI/Box"
import Container from "../Component/UI/Container"

const EditStudentDetailsForm = () => {
    return (
        <Container>
            <h1>Update</h1>
            <Box>
                <EditStudentForm />
            </Box>
        </Container>
    )
}

export default EditStudentDetailsForm
