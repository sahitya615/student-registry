import React,{Component} from 'react'
import StudentItem from './studentItem'
class studentList extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        let students = this.props.studentList
const trItem=students.map((item,index)=>{
    return(
        <StudentItem 
        key={index}
        student={item}
        index={index}
        deleteStudent={this.props.deleteNewStudent}
        updatestudent={this.props.editStudentSubmit}
        />
     )
})        
return(
    <tbody>{trItem}</tbody>
 )
    }
}
export default studentList;