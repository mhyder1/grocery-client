import React, { Component } from "react";
import Context from "../../Context/Context";
// import ValidationError from "../Validation/ValidationError";
import BackButton from "../BackButton/BackButton";
import "./ListForm.css";


class ListForm extends Component {
  static contextType = Context;
  static defaultProps = {
    match: {
      params: {
        category: "",
      },
    },
  };
  state = {
    selCategory: this.props.match.params.category,
    list: {
      value: "",
      touched: false,
    },
    note: '',
    name: '',
    weight: '',
    price: '',
    category: ''
    
  };
  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {name, note, category, price, weight} = this.state
    const newLists = {name, note, category, price, weight, id: `${this.context.lists.length + 100}`}
    let checked = false;
    this.context.createList(newLists);
    this.props.history.push("/grocery-lists");
    //   this.setState ({
    //      lists : newLists
    //  })
  };
   
   updateList = (name) => {
       this.setState({
         lists: {
           value: name,
           touched: true,
           }
       })
  }
  // why my validationlist is not working //
  // validateList() {
  //   let list = this.state.lists.value.trim();
  //   if (list.name === 0) {
  //     return "list name required";
  //   } else if (list.name.length < 3) {
  //     return "list name must be at least 3 charecter long";
  //   }
  // }
  changeCategory = (e) => {
    let category_Id = Number(e.target.value);
    let categories = this.context.categories.find((c) => c.id === category_Id);
    this.setState({
      selCategory: categories,
      category_Id: category_Id
    });
  };
  render() {
    // console.log(this.context);
    let  categories  = this.context;
    // console.log(categories);
     //let nameError = this.validateList();
    return (
      <div className="add-list">
        <form className="add-list-form" onSubmit={this.handleSubmit}>
          <h2>Create Grocery list</h2>
          <div className="add-list-section">
            <label className="list-label">Name:</label>
            <input
              type="text"
              name="name" 
              className="add-name-input"
              value={this.state.name}
              onChange={this.handleChange}
            />
            {/* {this.state.list.touched && (
              <ValidationError message={nameError} />
            )} */}
            <label className="list-label">Note:</label>
            <input className="add-note-input" type="text" name="note" value={this.state.note} onChange={this.handleChange}/>
            <label className="list-label">Price:</label>
            <input className="add-price-input" type="text" name="price" value={this.state.price} onChange={this.handleChange}/>
            <label className="list-label">Weight:</label>
            <input className="add-Weight-input" type="text" name="weight" value={this.state.weight} onChange={this.handleChange}/>
            <select
              onChange={this.handleChange}
              name="category"
              id="category-dropdown"
              value={this.state.category}
            >
              {this.context.categories.map((category, index) => (
                <option
                  key={index}
                  value={category.category}
                  defaultValue={
                    category.category === this.props.match.params.category
                      ? "selected"
                      : false
                  }
                >
                  {category.category}
                </option>
              ))}
            </select>
            <button className="add-list-button" type="submit">
              Create List
            </button>
          </div>
        </form>
        <BackButton {...this.props} className="back-button" />
      </div>
    );
  }
}
export default ListForm;