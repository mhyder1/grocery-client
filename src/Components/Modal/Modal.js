import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/Context";
import config from '../../config'
import TokenService from '../../services/token-service'

function Modal(props) {
  let context = useContext(Context);

  const handleDelete = ()  => {
    fetch(`${config.API_ENDPOINT}/lists/${props.match.params.id}`, {
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(() => {
      context.deleteList(parseInt(props.match.params.id))
    })
   }

  let showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  const list =
    context.lists.find((list) => list.id === parseInt(props.match.params.id)) || {};

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>{list.name}</h2>
        <h3 className="view-list-category">Category: {list.category}</h3>
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
              onChange={() => context.toggleComplete(parseInt(props.match.params.id))}
            />{" "}
            Completed?
          </p>
        </div>
        <div className="edit-delete-list">
          <Link to={`/edit-lists/${props.match.params.id}`}>
            <button className="edit-button">Edit</button>
          </Link>
          <button
            className="delete-button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <button className="close-button" onClick={props.handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}

export default Modal;
