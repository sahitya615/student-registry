import {ADD_STUDENT,DElETE_STUDENT,UPDATE_STUDENT} from '../../actions/studentActions/studentActionTypes'
let initialState = [
    { id: 1, name: 'John Doe', grade: 1, school: 'React Redux School' },
    { id: 2, name: 'Jane Doe', grade: 2, school: 'React Redux School' },
    { id: 3, name: 'Terry Adams', grade: 3, school: 'React Redux School' },
    { id: 4, name: 'Jenny Smith', grade: 4, school: 'React Redux School' }
];

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STUDENT:
            let stateCopy = [...state, action.payload];
            return stateCopy
        case DElETE_STUDENT:
             stateCopy = state.filter(item => item.id !== action.payload)
            return stateCopy
        case UPDATE_STUDENT:
            stateCopy = state.map((student)=>{
                const{id,name,grade,school}=action.payload;
                if(student.id===id){
                    student.name=name;
                    student.grade=grade;
                    student.school=school;

                }
                return student
            })

            return stateCopy
            
        default:
            return state
    }


}
export default studentReducer;