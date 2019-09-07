import React, { Component } from 'react'
import { personsList } from './dropdownmock'
import './dropdown.css'

class dropdown extends Component {
    constructor() {
        super();
        this.state = {
            newpersonsList: null,
            personName: "",
            childrenName:""

        }
    }
    componentWillMount = () => {
        this.getPersonList()
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    getPersonList = () => {
        this.setState({ newpersonsList: personsList })
    }
    render() {
        let filterPersonList = this.state.newpersonsList.find(children =>
            (children.Name === this.state.personName))
        
        let filterCity = filterPersonList && this.state.childrenName ?
        filterPersonList.children.find(city => (city.Name === this.state.childrenName)):null;
        console.log("filtercity",filterCity)


        return (
            <div className="multidropdown">
                <h1> dropdown</h1>
                <select className = "drop_Wrapper"
                    name="personName"
                    value={this.state.personName}
                    onChange={this.handleChange}
                >
                    {
                        this.state.newpersonsList.map((person, index) => {
                            return <option key={index} value={person.name}>{person.Name}</option>
                        })
                    }
                </select>

                <br />
                <br />

                {
                    filterPersonList &&
                    <select className = "drop_Wrapper"
                    name="childrenName"
                    value={this.state.childrenName}
                    onChange={this.handleChange}
                    >
                        <option>
                            select

                        </option>
                        {
                            filterPersonList.children.map((childrenName,ind)=>{
                                return <option key={ind} value={childrenName.name}>{childrenName.Name}</option>
                            })
                        }


                    </select>

                }

                <br />
                <br />
                {
                    filterCity &&
                    <select className = "drop_Wrapper">
                        {
                            filterCity.City.map((city,i)=>{
                                return <option key={i}>{city.name} </option>
                            })
                        }
                    </select>
                }
            </div>
        )
    }
}
export default dropdown;