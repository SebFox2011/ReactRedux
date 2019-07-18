import {connect} from "react-redux";
import {itemRemove} from "../actions/todo";
import ListItems from "../components/ListItems"

const mapStateToProps = state => ({
    items: state.todo.items
});

const mapDispatchToProps = dispatch => ({
    remove: item => dispatch(itemRemove(item)),
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ListItems)