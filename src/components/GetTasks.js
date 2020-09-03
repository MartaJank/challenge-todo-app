import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class GetTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTasks: []
        }
    }

    getAllTasks = () => {
        axios.get(`http://localhost:4000/api/v1/todos`)
            .then(responseFromAPI => {
                this.setState({
                    allTasks: responseFromAPI.data
                })
            })
    }

    componentDidMount() {
        this.getAllTasks();
    }

    crossLine = event => {
        const element = event.target;
        element.classList.toggle("crossed-line");
    };
    
    render() {
        return (
            <div>
                {this.state.allTasks.map(task => {
                    return (
                        <div className="home-card">
                            <h3 onClick={this.crossLine}>{task.title}</h3>
                            <Link to={`/tasks/${task._id}`}><button>Details...</button></Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default GetTasks