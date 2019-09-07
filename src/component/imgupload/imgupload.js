import React,{Component} from 'react';
import './imgupload.css'

class imgupload extends Component{
    constructor(){
        super();
        this.state={
            file:"",
            imgprew:"",
            FileList:[]

        }
    }
handleImageChange = (e) => {
     let reader =new FileReader()
     let file = e.target.files[0]
     reader.onload = () => {
         this.setState(
             {
                 file:file,
                 imgprew:reader.result

             }
         )
     }
     reader.readAsDataURL(file)
}
submitHandler = (e) => {
    e.preventDefault()
    const {FileList,imgprew} = this.state;
    FileList.push({imgprew})
    this.setState({FileList})
}

removeHandler = (ind) => {
    console.log(ind, "ïnd")
    let {FileList} = this.state;
    let removeImage = FileList.filter((img, i) => i !== ind)
    this.setState({FileList:removeImage})

}
    render(){
        // console.log(this.state.file,"file")
        // console.log(this.state.imgprew,"imgprew")
        // console.log(this.state.FileList,"filelist")
        return(
            <div>
                <form>
                    <input type="file" onChange={this.handleImageChange} />
                    <button onClick={this.submitHandler}>uploadimg</button>
                </form>
                {/* <img  src={this.state.imgprew} /> */}
                <ul>
                    {
                        this.state.FileList.map((image,index) => {
                            return <li><img src={image.imgprew} />
                            <button onClick={() =>this.removeHandler(index)}>remove</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default imgupload;