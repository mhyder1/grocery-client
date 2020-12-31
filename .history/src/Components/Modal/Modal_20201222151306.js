import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Context from "../../Context/Context";




function Modal(props) {
    let context = useContext(Context);
    console.log(context)

   // deleteList =(listid)  => {

   // }

    let showHideClassName = props.show 
       ? "modal display-block" 
       : "modal display-none";

       let list = context.lists.find((list) => list.id === Number(props.match.params.id)) || {};
        // console.log(list)
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
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
                <div className="list-checkbox">
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
                    //    onClick={(e) => deleteList(Number(list.id), context.deleteList)}
                    >
                        Delete

                    </button>

                </div>
                <button className="close-button" onClick={props.handleClose}>
                    Close

                </button>


            </section>

        </div>
    )
}

export default Modal