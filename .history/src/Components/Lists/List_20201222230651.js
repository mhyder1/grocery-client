import React from "react";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";




class List extends React.Component {
    static contextType = Context;

    

    // deletelists = (listid, cb) => {

    // }


    render() {
        console.log(this.context)
        let list = this.context.lists.find(
            (list) => list.id === Number(this.props.match.params.id)
        ) || {};
            console.log(list)
        return(
            <React.Fragment>
                <div className="view-list-task">
                    <h2>{list.name}</h2>
                    <h3 className="view-list-category">category: {list.category}</h3>
                    <div className="list-textbox">
                     <p>{list.note}</p>
                    </div>
                    <div className="list-textbox">
                     <p>{list.price}</p>
                    </div>
                    <div className="list-textbox">
                     <p>{list.weight}</p>
                    </div>
                    <div className="list-details">
                        <div className="list.created-date">
                            <p>
                                Created on:
                                <span />
                                {new Date(list.start_date).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="list-checkbox">
                            <p>
                                <input className="checkmark"
                                type="checkbox"
                                checked={list.checked ? true : false}
                                onClick={() => this.context.toggleComplate(list.id)}
                                 />{" "}
                                 Completed?
                            </p>

                        </div>
                        <div className="edit-delete-list">
                            <Link to={`/edit-lists/${list.id}`}>
                                <button className="edit-button"> Edit

                                </button>

                            </Link>
                            <button
                              className="delete-button"
                              onClick={(e) => 
                                this.deleteList(
                                    Number(this.props.match.params.id), this.context.deletelists
                                )
                            }
                            >
                                Delete

                            </button>

                        </div>
                        <div className="close-lists">
                            <button
                             className="close-button"
                             onClick={() => this.props.history.push("/grocery-lists")}
                            >
                                Close

                            </button>

                        </div>

                    </div>

                </div>
            </React.Fragment>

        )
    }
    
}


export default List;