import {database} from '../Database/config'

export function startAddingpost(post){
    return (dispatch) => {
        return database.ref('posts').update({[post.id]:post}).then(()=> {
            dispatch(addPhoto(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingPost(){
    return (dispatch) =>{
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startRemovingPosts(index,id){
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePhoto(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startAddingcomment(comment,postId){
    return (dispatch) => {
        return database.ref('comments/'+postId).push(comment).then(() => {
            dispatch(addComments(comment,postId))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingComments(){
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot) => {
            let comments= {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key]= Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function loadComments(comments){
    return {
        type : "LOAD_COMMENTS",
        comments
    }
}


export function removePhoto(index){
    return {
        type : "REMOVE_PHOTO",
        index : index
    }
}

export function addPhoto(post){
    return{
        type: 'ADD_PHOTO',
        post: post
    }
}

export function addComments(comment,postId){
    return{
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts){
    return{
        type:'LOAD_PHOTOS',
        posts
    }
}