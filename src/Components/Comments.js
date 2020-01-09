import React , {Component} from 'react'

class Comments extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const comment =  event.target.elements.comment.value
        this.props.startAddingcomment(comment,this.props.id)
        event.target.elements.comment.value = ''
    }
    render(){
        return <div>
            {
                this.props.comments.map((comment,index) => {
                    return (
                    <p key ={index}>{comment}</p>
                    )
                })

            }
            <form onSubmit ={this.handleSubmit}>
                <input type="text" placeholder="Comments" name = "comment"></input>
                <input type="submit" ></input>
            </form>
        </div>
    }
}

export default Comments