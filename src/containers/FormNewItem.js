import {connect} from "react-redux";
import {itemAdd} from "../actions/todo";
import FormNewItem from "../components/FormNewItem"

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    add: item => dispatch(itemAdd(item)),
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormNewItem)