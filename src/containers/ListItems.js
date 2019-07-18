import {connect} from "react-redux";
import {ITEM_ADD, ITEM_REMOVE, itemAdd} from "../actions/todo";
import {declareExportDeclaration} from "@babel/types";

const mapStateToProps = state => ({
    items: state.todoApp.items
});

const mapDispatchToProps = dispatch => ({
    add: item => dispatch(itemAdd(item)),
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Dashboards)