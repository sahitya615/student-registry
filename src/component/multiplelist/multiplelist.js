import React, { Component } from 'react'
import { ListItemData } from './multiplemock'
import './multiplelist.css'

class multiplelist extends Component {
    constructor() {
        super();
        this.state = {
            activeTypeList:null,
            activelist:null
        }
    }
    onClickList = (index, key) => { 
        this.setState(prevState => ({
            [key]:prevState[key]===index? null:index
        }))
    }

    render() {
        const {activeTypeList, activelist} = this.state; 
        return (
            <div>
                <ul className="item_list">
                    {
                        ListItemData.map((item, index) => {
                            return <li key={index} className="item_category">
                                <span className={activeTypeList===index?"active listcategoryname":"listcategoryname"} onClick={()=>this.onClickList(index,"activeTypeList")}>

                                    {item.itemCategory}
                                </span>
                                <ul className="itemcategory_list">
                                    { activeTypeList===index&&
                                        item.ItemList && item.ItemList.map((newitem, i) => {
                                            return <li key={i} onClick={()=>this.onClickList(i,"activelist")}>
                                            <span className ={activelist === i ? "äctive" :""}>
                                            {newitem.itemType}
                                            </span>
                                                <ul className="itemcategory_list">
                                                    {activelist ===i &&
                                                        newitem.itemSubTypes && newitem.itemSubTypes.map((subitem, ind) => {
                                                            return <li key={ind}>{subitem.Item}</li>
                                                        })
                                                    }
                                                </ul>

                                            </li>
                                        })
                                    }
                                </ul>

                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default multiplelist;