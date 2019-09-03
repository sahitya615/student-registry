import React,{Component} from 'react'
 import Axois from  'axios'
 import './paginnation.css'

class pagination extends Component{
    constructor(){
        super();
        this.state={
            personList:[],
            currentPage:1,
            personListPerPage:10
        }
    }
    componentWillMount=()=>{
        this.getData()
    }

    getData = () =>{  
        Axois.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>this.setState({personList:res.data}))
        .catch(error=>{
            console.log(error)
        })

    }
handleClick=(e)=>{
this.setState({currentPage:Number(e.target.id)})
}

    render(){
        // console.log("pagination", this.state.personList)
        const{personListPerPage,currentPage,personList}=this.state
        const indexOfLastTodo=currentPage*personListPerPage;
        const indexOfFirstTodo=indexOfLastTodo-personListPerPage;
        const currentPersonList=personList.slice(indexOfFirstTodo,indexOfLastTodo)
        const renderPersonList=currentPersonList.map((person,index)=>{
            return <li className="person-list-item">{person.id}||{person.title}</li>
        })

        const pageNumbers=[]
        for(let i=1; i<=Math.ceil(personList.length/personListPerPage); i++){
            pageNumbers.push(i)
        }

        const renderPageNumbers=pageNumbers.map((number,index)=>{
            return <li className="pagenumber-list-item" key={number}
            id={number}
            onClick={this.handleClick}
            >
            {number}
            </li>
        })

    

        return(
            <div className="pagination-container">
                <h2 className="pagination-title">PAGINATION</h2>
                <div className="pagination-wrapper">
                <div className="personlist-wrapper">
                <ul className="personlist">
                    {renderPersonList}
                </ul>
                </div>
                <div className="pagenumberlist-wrapper">
                <ul className="pagenumber">
                    {renderPageNumbers}
                </ul>
                </div>
                </div>
            </div>
        )
    }
}

export default pagination;