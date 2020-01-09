import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component{
    render(){
        // const id = Number(this.props.match.params.id)
        // const posts = this.props.posts
        const {match , posts} = this.props
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments[id] || []
        const index = this.props.posts.findIndex((post) => post.id === id)
        if(this.props.loading === true){
            return <div className = "loader">...loading</div>
        }else if(post){
            return <div className ="single-photo">
                <Photo post = {post} {...this.props} index = {index}></Photo>
                <Comments startAddingcomment = {this.props.startAddingcomment} comments = {comments} id = {id}></Comments>
            </div>
        }else{
            return <div>...no posts</div>
        }
    }
}

export default Single