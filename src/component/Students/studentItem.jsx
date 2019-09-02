import React, { Component } from 'react'

class studentItem extends Component {
    constructor() {
        super();
        this.state = {
            isEdit: false

        }
    }

    deleteStudent = () => {
        const { id } = this.props.student;
        this.props.deleteStudent(id)
        console.log("id", id)
    }
    editStudent = () => {
        this.setState({ isEdit: !this.state.isEdit })

    }
    editStudentSubmit = () => {
        this.setState({ isEdit: !this.state.isEdit })
        this.props.updatestudent(this.props.student.id,this.nameInput.value,this.gradeInput.value,this.schoolInput.value)

    }

    render() {
        const { name, grade, school } = this.props.student
        console.log(this.state.isEdit)
        return (
            this.state.isEdit === true ?
                <tr>
                    <td><input ref={nameInput => this.nameInput = nameInput} defaultValue={name} /> </td>
                    <td><input ref={gradeInput => this.gradeInput = gradeInput} defaultValue={grade} /> </td>
                    <td><input ref={schoolInput => this.schoolInput = schoolInput} defaultValue={school} /> </td>
                    <td><i className="fas fa-save" onClick={this.editStudentSubmit}></i></td>
                    <td><i  className="fas fa-trash-alt"></i></td>

                    
                </tr>
                  :               
                <tr>
                    <td>{name}</td>
                    <td>{grade}</td>
                    <td>{school}</td>

                    <td><i className="fas fa-user-edit" onClick={this.editStudent}></i></td>
                    <td><i className="fas fa-trash-alt" onClick={this.deleteStudent}></i></td>

                </tr>
          
        )
    }
}
export default studentItem;