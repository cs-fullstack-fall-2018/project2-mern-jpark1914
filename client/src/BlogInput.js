import React, {Component} from 'react';
import FrontDbMethods from "./FrontDbMethods";


class BlogInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [{
                username: "",
                title: "",
                journalEntry: ""
            }]
        }
    }

    userOnChange = (event) => {
        this.setState({username: event.target.value});
    }

    titleOnChange = (event) => {
        this.setState({title: event.target.value});
    }

    journalOnChange = (event) => {
        this.setState({journalEntry: event.target.value});
    }
    submitBlog = (event) => {
        console.log("Submit was just used")
        this.postNewBlogs();
        this.setState({
            username: "",
            title: "",
            journalEntry: "",
        });
        event.preventDefault();
        event.stopPropagation();
    }


    postNewBlogs = () => {
        console.log("Posting Blog");

        fetch('/blogs/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                title: this.state.title,
                journalEntry: this.state.journalEntry
            })
        })
    };
    getAllBlogs = () => {
        console.log("Getting Blogs");
        fetch('/blogs/all')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    blogs: response
                })
            })
    };

    clickDelete = (id) => {
        console.log("Delete: " + id);
        fetch('/blogs',
            {
                method: "DELETE",
                body: JSON.stringify({"_id": id}),
                headers: {'Content-Type': 'application/json',}

            })
            .then((test) => console.log(test));
        // .then((res) => {
        //         if (!res.success) this.setState.requestFailed = true;
        //     }
        // )
    };

    componentDidMount() {
        this.getAllBlogs();
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.submitBlog}>
                    <label htmlFor="user">User: </label>
                    <br/>
                    <input type="text" id="user" value={this.state.username} onChange={this.userOnChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="title">Title: </label>
                    <br/>
                    <input type="text" id="title" value={this.state.title} onChange={this.titleOnChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="journal">Journal Entry: </label>
                    <br/>
                    <textarea id="journal" value={this.state.journalEntry}
                           onChange={this.journalOnChange}/>
                    <br/>
                    <input type='submit' value='Submit'/>

                </form>
                <form onSubmit={this.getAllBlogs}>
                    <input type='submit' value="See All Blogs"/>
                </form>
                <FrontDbMethods blog={this.state.blogs} delete={this.clickDelete}/>
            </div>
        );
    }
}

export default BlogInput;
