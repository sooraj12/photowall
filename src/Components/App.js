import Main from './Main'
import {connect} from 'react-redux'
import * as actions from '../Reducer/actions'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router'

function mapStateToProps(state){
    return{
        posts: state.posts,
        comments: state.comments
    }
}

function mapActionsToProps(dispatch){
    return  bindActionCreators(actions, dispatch)
}

const App = withRouter(connect(mapStateToProps,mapActionsToProps)(Main))
export default App 