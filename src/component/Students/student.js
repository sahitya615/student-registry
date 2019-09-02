import React, {Component} from 'react';
import { connect } from 'react-redux'
import StudentList from './studentList'
import {bindActionCreators} from 'redux'
import {addStudent, deletestudent,updatestudent} from '../../actions/studentActions/studentActions'

class Student extends Component{
    constructor(props){
        super(props);
        this.state= {

        }
    }

    addNewStudent=()=>{
        this.props.addStudent({id:Math.max(...this.props.studentList.map((o)=>{ return o.id })) +1, name:'', grade:'', school:''})
      }
    
      deleteNewStudent=(id)=>{
        this.props.deleteStudent(id)
      }
    
      editStudentSubmit=(id,name,grade,school)=>{
        this.props.updatestudent({id:id,name:name,grade:grade,school:school})
      }


    render(){
        return(
         <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                studentRegistry
              </div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Name </th>
                      <th>Grade </th>
                      <th>School </th>
                      <th>Edit/save </th>
                      <th>Delete </th>
                    </tr>
                  </thead>
                  <StudentList
                  deleteNewStudent={this.deleteNewStudent}
                  editStudentSubmit={this.editStudentSubmit}
                    studentList={this.props.studentList}
                  />

                </table>
                <button className="btn btn-dark pull-left" onClick={this.addNewStudent}>Add New</button>
              </div>

            </div>

          </div>

        </div>

      </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      studentList: state.studentReducer
    }
  }
  const mapDispatchToProps =(dispatch) =>{
    return bindActionCreators({
      addStudent:addStudent,
      deleteStudent:deletestudent,
      updatestudent:updatestudent
  
    },dispatch)
  }

export default connect(mapStateToProps,mapDispatchToProps)(Student);
