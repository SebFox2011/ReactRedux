import React, {Component} from 'react';

class FormNewItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.add({
            value: this.state.value,
            done: false
        });
        this.setState({value:""});
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <p>
                    <label htmlFor="value">A faire</label>
                    <input type="text" name="value" value={this.state.value}
                           onChange={event => this.handleChange(event)}/>
                </p>
                <input type="submit"/>
            </form>
        );
    }
}

export default FormNewItem;