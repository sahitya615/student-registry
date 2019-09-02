import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostList } from '../../actions/postActions/postAction'


class postList extends Component {
    constructor() {
        super();
        this.state = {
            PostListItems: []

        }
    }
    componentWillMount = () => {
        this.props.getPostList()
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({ PostListItems: nextProps.PostList })

    }
   deleteItemHanlder = (Id) => {
       const {PostListItems} = this.state;
       let deleteItem = PostListItems.filter(item => item.id !== Id)
       this.setState({PostListItems:deleteItem})
   }
    render() {
        console.log("postlistitems", this.state.PostListItems)
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                PostList
                  </div>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Id </th>
                                            <th>Title </th>
                                            <th>Body</th>
                                            <th>Delete </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.PostListItems.map(item => {

                                                return <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.title}</td>
                                                    <td>{item.body}</td>
                                                    <td><i  className="fas fa-trash-alt" onClick={() =>this.deleteItemHanlder(item.id)}></i></td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                                <div>
                                </div>
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
        PostList: state.postReducer.postList
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPostList: getPostList

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(postList);