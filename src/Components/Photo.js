import React from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photo(props){
    return <figure className = "figure">
            <Link to = {`/Single/${props.post.id}`}> <img className="photo" src={props.post.imagelink} alt= {props.post.description} /></Link>
            <figcaption><p>{props.post.description}</p></figcaption>
            <div className = "button-container">
                <button onClick= {() => {
                    props.startRemovingPosts(props.index,props.post.id)
                    props.history.push('/')
                }}>Remove</button>
                <Link to = {`/Single/${props.post.id}`} className= "button"> 
                    <div className="comment-count">
                        <div className="speech-bubble"></div>
                        {props.comments[props.post.id] ? props.comments[props.post.id].length : 0}
                    </div>
                </Link> 
            </div>
             </figure>
}


// Photo.propTypes ={
//     post: PropTypes.object.isRequired
// }

// class Photo extends Component{
//     render(){
//         return <figure className = "figure">
//             <img className="photo" src={this.props.post.imagelink} alt= {this.props.post.description} />
//             <figcaption><p>{this.props.post.description}</p></figcaption>
//             <div className = "button-container">
//                 <button className = "remove-button">Remove</button>
//             </div>
//              </figure>
//     }
// }

export default Photo;