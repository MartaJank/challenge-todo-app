import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class TaskDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            theTask: {}
        }
    }

    componentDidMount() {
        this.getSingleTask();
    }

    getSingleTask = () => {
        const { params } = this.props.match;
        axios
            .get(`http://localhost:4000/api/v1/todos/${params.id}`)
            .then(responseFromAPI => {
                const theTask = responseFromAPI.data;
                this.setState({theTask});
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteTask = () => {
        const { params } = this.props.match;
        axios.delete(`http://localhost:4000/api/v1/todos/${params.id}`)
        .then(() => {
            this.props.history.push(`/`)
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    render() {
        return (
            <div>
                <h3>{this.state.theTask.title}</h3>
                <p>{this.state.theTask.body}</p>
                <Link to={`/tasks/${this.state.theTask._id}/edit`}><button>EDIT</button></Link>
                <button onClick={() => this.deleteTask()}>DELETE</button>
                <Link to={'/'}><button>Back</button></Link>
            </div>
        )
    }
}

export default TaskDetails