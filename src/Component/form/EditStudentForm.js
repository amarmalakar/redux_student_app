import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { studentActions } from "../../store/student-slice";
import Input from '../UI/Input';

const EditStudentForm = () => {
    const params = useParams();
    const { id } = params;
    const students = useSelector(state => state.student.students);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const student = students.find(student => student.id === parseInt(id));

    const [firstName, setFirstName] = useState(!student? '' : student.firstName);
    const [lastName, setLastName] = useState(!student? '' : student.lastName);
    const [email, setEmail] = useState(!student? '' : student.email);
    const [address, setAddress] = useState(!student? '' : student.address);
    const [phone, setPhone] = useState(!student? '' : student.phone);

    const updatedStudentData = {
        id: student.id,
        firstName,
        lastName,
        email,
        phone,
        address,
    };

    const formSubmitionHandler = (e) => {
        e.preventDefault();
        dispatch(studentActions.updateData({ id, updatedStudentData }))
        navigate('/students')
    }

    if (!student) {
        return <h2>Student not found!</h2>
    }

    return (
        <form onSubmit={formSubmitionHandler}>
            <Input
                label="First Name"
                input={{
                    type: "text",
                    value: firstName,
                    onChange: (e) => setFirstName(e.target.value),
                    placeholder: "Enter First Name"
                }}
            />
            <Input
                label="Last Name"
                input={{
                    id: 'fName',
                    type: "text",
                    value: lastName,
                    onChange: (e) => setLastName(e.target.value),
                    placeholder: "Enter Last Name"
                }}
            />
            <Input
                label="Email"
                input={{
                    id: 'userEmail',
                    type: "email",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    placeholder: "Enter Your Email Address"
                }}
            />
            <Input
                label="Address"
                input={{
                    id: 'address',
                    type: "text",
                    value: address,
                    onChange: (e) => setAddress(e.target.value),
                    placeholder: "Enter Address"
                }}
            />
            <Input
                label="Phone No."
                input={{
                    id: 'phone',
                    type: "text",
                    value: phone,
                    onChange: (e) => setPhone(e.target.value),
                    placeholder: "Enter Mobile Number"
                }}
            />
            <Input
                input={{
                    type: "submit",
                    value: 'Create New Student'
                }}
            />
        </form>
    )
}

export default EditStudentForm;