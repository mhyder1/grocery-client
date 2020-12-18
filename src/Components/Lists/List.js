import React from "react";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";
import listData from "../../../src/listData"



class lists extends React.Component {
    static contextType = Context;

    state={
        listss: listData,
        categories: listData

    };

    deletelists = (listid, cb) => {
        
    }




    


    render() {

        let lists = this.context.lists.find(
            (list) => lists.id === Number(this.props.match.params.id)
        ) || {};
        return(
            <React.Fregment>
                <div className="view-lists-task">
                    <h2>{lists.name}</h2>
                    <h3 className="view-lists-category">category: {lists.category}</h3>
                    <div className="lists-textbox">
                     <p>{lists.note}</p>
                    </div>
                    <div className="lists-textbox">
                     <p>{lists.price}</p>
                    </div>
                    <div className="lists-textbox">
                     <p>{lists.weight}</p>
                    </div>
                    <div className="lists-details">
                        <div className="lists-created-date">
                            <p>
                                Created on:
                                <span />
                                {new Date(lists.create_date).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="todo-checkbox">
                            <p>
                                <input className="checkmark"
                                type="checkbox"
                                checked={lists.checked ? true : false}
                                onClick={() => this.context.toggleComplate(lists.id)}
                                 />{" "}
                                 Completed?
                            </p>

                        </div>
                        <div className="edit-delete-lists">
                            <Link to={`/edit-lists/${lists.id}`}>
                                <button className="edit-button"> Edit

                                </button>

                            </Link>
                            <button
                              className="delete-button"
                              onClick={(e) => 
                                this.deletelists(
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
                             onClick={() => this.props.history.push("/gorcery-lists")}
                            >
                                Close

                            </button>

                        </div>

                    </div>

                </div>
            </React.Fregment>

        )
    }
    
}


export default lists;