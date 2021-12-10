import { createSlice } from "@reduxjs/toolkit";
import studentData from './studentData';

const studentSlice = createSlice({
    name: 'student',
    initialState: {
        students: studentData,
    },
    reducers: {
        addNewStudent: (state, action) => {
            const newData = action.payload;
            state.students = state.students.concat({
                id: newData.id,
                firstName: newData.firstName,
                lastName: newData.lastName,
                email: newData.email,
                phone: newData.phone,
                address: newData.address,
            })
        },

        deleteStudent: (state, action) => {
            const studentId = action.payload;
            const updatedData = state.students.filter(student => student.id !== studentId);
            state.students = updatedData;
        },

        updateData: (state, action) => {
            const {id, updatedStudentData} = action.payload;
            state.students = state.students.map(student => (
                student.id === parseInt(id) ? updatedStudentData : student
            ))
        }
    }
})

export const studentActions = studentSlice.actions;

export default studentSlice;