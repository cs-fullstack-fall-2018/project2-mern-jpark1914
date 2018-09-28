import React, { Component } from 'react';

class FrontDbMethods extends Component {

    render() {

        console.log(this.props.blog);
        var forEachItem = this.props.blog.map(
            eachItem =>{
                return(
                    <div>
                        <hr/>
                        <h2> Title: {eachItem.title}</h2>
                        <h3>Author: {eachItem.username}</h3>
                        <p> {eachItem.journalEntry}</p>
                        <button type="button" onClick={()=>this.props.delete(eachItem._id)}>DELETE</button>

                    </div>
                )

            }
        )
        return (
            <div>
                {forEachItem}
            </div>
        );
    }
}

export default FrontDbMethods;
