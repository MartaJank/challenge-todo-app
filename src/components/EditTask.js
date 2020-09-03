import React, { Component } from 'react';
import axios from 'axios';

class EditTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        this.getEditTask();
    }

    getEditTask = () => {
        const { params } = this.props.match;
        console.log('params', params.id)
        axios
            .get(`http://localhost:4000/api/v1/todos/${params.id}`)
            .then(responseFromAPI => {
                const theTask = responseFromAPI.data;
                this.setState({
                    title: theTask.title,
                    body: theTask.body
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleEditFormSubmit = e => {
        const { params } = this.props.match;
        e.preventDefault();
        const title = this.state.title;
        const body = this.state.body;
        
        console.log('title', this.state.title)
        axios
            .put(`http://localhost:4000/api/v1/todos/${params.id}`, { title, body })
            .then(() => {
                this.props.history.push('/')
            })
            .catch(err => console.log(err));
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleEditFormSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />

                    <label>Body</label>
                    <textarea name="body" value={this.state.body} onChange={e => this.handleChange(e)} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default EditTask