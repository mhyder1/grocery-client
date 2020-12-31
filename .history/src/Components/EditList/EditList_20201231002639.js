import React from "react";
import Context from "../../Context/Context";

class EditList extends React.Component {
  static contextType = Context;

  state = {
    id: "",
    name: "",
    note: "",
    price: "",
    weight: "",
    category: "",
    checked: "",
    category_id: "",
    start_date: "",
  };

  componentDidMount() {
    console.log(this.context)
     let {id, name, note, price, weight} = this.context.lists.find(list => list.id === this.props.match.params.id)
     console.log(weight)
     this.setState({name, note, price, weight})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let {
      id,
      name,
      note,
      price,
      weight,
      category,
      checked,
      category_id,
      start_date,
    } = this.state;
    let newList = {
      id,
      name,
      note,
      price,
      weight,
      category,
      checked,
      category_id,
      start_date,
    };
    this.resetFields();
    this.context.updateList(newList);
    this.props.history.push(`/grocery-lists/${this.props.match.params.id}`);
    this.setState({ newList });
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
        <form
          onSubmit={this.handleChange}
          className="edit-form"
        >
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
              type="number"
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
