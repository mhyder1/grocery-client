import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Context from "../../Context/Context";




function Modal(props) {
    let context = useContext(Context);

    let showHideClassName = props.show 
       ? "modal display-block" 
       : "modal display-none";

    const onDelete = (id) => {
        context.deleteList(id)
        props.history.push('/grocery-lists')
    }

       let list = context.lists.find((list) => list.id === props.match.params.id) || {};
    return (
        <div > {/**className={showHideClassName} */}
            <section style={{background:'gray'}}>{/**className="modal-main" */}
                <h2>
                    {list.name}
                </h2>
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
                <div className="list-created-date">
                    <p>
                        Created on:
                        <span>
                            {/* {new Date (list.start_date).toLocalDateString()} */}
                        </span>
                    </p>

                </div>
                <div >{/**className="list-checkbox" */}
                    <p>
                        <input
                        className="checkmark"
                        type="checkbox"
                        checked={list.checked ? true : false}
                        onClick={() => context.toggleComplete(list.listChecked)}
                         /> {" "}
                         Completed?
                    </p>

                </div>
                <div className="edit-delete-list">
                    <Link to = {`/edit-lists/${list.id}`}>
                        <button className="edit-button">Edit</button>
                    </Link>
                    <button
                       className="delete-button"
                       onClick={() => onDelete(list.id)}
                    >
                        Delete

                    </button>

                </div>
                {/* <button className="close-button" onClick={props.handleClose}> */}
                <button className="close-button" onClick={()=> this.props.history.push('/grocery-lists')}>
                    Close

                </button>


            </section>

        </div>
    )
}

export default Modal