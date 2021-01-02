import React from "react";
import Context from "../../Context/Context";
import config from "../../config";
import TokenService from "../../services/token-service";

class EditList extends React.Component {
  static contextType = Context;

  state = {
    id: "",
    name: "",
    note: "",
    price: "",
    weight: "",
  };

  componentDidMount() {
    let { id, name, note, price, weight, checked } = this.context.lists.find(
      (list) => {
        return list.id === parseInt(this.props.match.params.id);
      }
    );
    this.setState({ id, name, note, price, weight, checked });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { id, name, note, price, weight, checked } = this.state;
    let newList = {
      id,
      name,
      note,
      price,
      weight,
      checked,
    };

    fetch(`${config.API_ENDPOINT}/lists/${this.props.match.params.id}`, {
      method: "PATCH",
      body: JSON.stringify(newList),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
        return res.json();
      })
      .then((updatedList) => {
        this.context.updateList(updatedList[0]);
        this.props.history.push(`/grocery-lists/${this.props.match.params.id}`);
      });
  };

  resetFields = () => {
    this.setState({
      id: "",
      name: "",
      note: "",
      price: "",
      weight: "",
      category: "",
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClickCancel = () => {
    this.props.history.push(`/grocery-lists/${this.props.match.params.id}`);
  };

  render() {
    let { name, note, price, weight } = this.state;
    return (
      <div className="edit-lists">
        <form onSubmit={this.handleSubmit} className="edit-form">
          <h2>Edit List</h2>
          <div className="edit-section">
            <label className="edit-list-label">Name:</label>
            <input
              onChange={this.handleChange}
              className="edit-list-input"
              value={name}
              name="name"
              type="text"
            />
            <label className="edit-list-label">Note:</label>
            <input
              onChange={this.handleChange}
              className="edit-note-input"
              type="text"
              value={note}
              name="note"
            />
            <label className="edit-list-label">Price:</label>
            <input
              onChange={this.handleChange}
              className="edit-price-input"
              type="number"
              value={price}
              name="price"
            />
            <label className="edit-list-input">Weight:</label>
            <input
              onChange={this.handleChange}
              className="edit-weight-input"
              type="text"
              value={weight}
              name="weight"
            />
            <button className="edit-list-button" type="submit">
              Save changes
            </button>
          </div>
          <button
            onClick={this.handleClickCancel}
            className="edit-list-button"
            type="button"
          >
            {" "}
            cancel
          </button>
        </form>
      </div>
    );
  }
}

export default EditList;
