import {connect} from "react-redux";
import {itemAdd} from "../actions/todo";
import ListItems from "../components/ListItems"

const mapStateToProps = state => ({
    items: state.todo.items
});

const mapDispatchToProps = dispatch => ({
    add: item => dispatch(itemAdd(item)),
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ListItems)