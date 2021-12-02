import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { studentActions } from "../../store/student-slice";
import Input from '../UI/Input';

const AddNewStudentForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const newStudentData = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        phone,
        address,
    };

    const formSubmitionHandler = (e) => {
        e.preventDefault();
        dispatch(studentActions.addNewStudent(newStudentData));
        navigate('/students')
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

export default AddNewStudentForm
