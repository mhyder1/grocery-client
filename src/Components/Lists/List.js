import React from "react";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";
import ListData from "../../../src/listData"



class List extends React.Component {
    static contextType = Context;

    state={
        lists: ListData,

    };


    deleteName() {

    }


    


    render() {

        let listData = this.context.lists.find(
            (list) => list.id === Number(this.props.match.params.id)
        ) || {};
        return(
            <React.Fregment>
                <div className="view-list-task">
                    <h2>{listData.name}</h2>
                    <h3 className="view-list-category">category: {listData.category}</h3>
                    <div className="list-textbox">
                     <p>{listData.note}</p>
                    </div>
                    <div className="list-textbox">
                     <p>{listData.price}</p>
                    </div>
                    <div className="list-textbox">
                     <p>{listData.weight}</p>
                    </div>
                    <div className="list-details">
                        <div className="list-created-date">
                            <p>
                                Created on:
                                <span />
                                {new Date(listData.create_date).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="todo-checkbox">
                            <p>
                                <input className="checkmark"
                                type="checkbox"
                                checked={listData.checked ? true : false}
                                onClick={() => this.context.toggleComplate(listData.id)}
                                 />{" "}
                                 Completed?
                            </p>

                        </div>
                        <div className="edit-delete-list">
                            <Link to={`/edit-list/${listData.id}`}>
                                <button className="edit-button"> Edit

                                </button>

                            </Link>
                            <button
                              className="delete-button"
                              onClick={(e) => 
                                this.deleteList(
                                    Number(this.props.match.params.id), this.context.deleteList
                                )
                            }
                            >
                                Delete

                            </button>

                        </div>
                        <div className="close-list">
                            <button
                             className="close-button"
                             onClick={() => this.props.history.push("/gorcery-list-lists")}
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


export default List;