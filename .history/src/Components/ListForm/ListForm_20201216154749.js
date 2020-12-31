import React, {Component} from "react";
import Context from "../../Context/Context";
import ValidateionError from "../Validation/ValidationError";
import ListData from "../../../src/listData" 
import BackButton from "../BackButton/BackButton";
import "./ListForm.css"

class ListForm extends Component {
    static ContextType = Context;

    static defaultProps = {
        match: {
            params: {
                category: "",
            }
        }
    }

    state = {
        selCategory: this.props.match.params.category,
        lists: {
            name: "",
            touched: false,

        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let note = e.target.note.value;
        let category = this.state.selCategory;
        let price = e.target.price.value;
        let weight = e.target.weight.value;
        let checked = false

        let list = this.context.createList(list);
        this.props.history.push("/grocery-list")

        // this.setState ({
        //     lists : list
        // })

        
        
    }

    validateName = () => {
        let listName = this.state.name.value.trim();
        if(listName.name === 0) {
            return "Name your list!";

        } else if (listName.length < 3) {
            return "your list must be at least 3 charecters long";
        } else if (listName.lenght > 15) {
            return "your list cannot exceed 15 charecters";
        }
    };

    updateList = (name) => {
        this.setState({
            lists: {

            }
        })
    }

    changeCategory = (e) => {
        let categoryId = Number(e.target.value);
        let category = this.context.categories.find((c) => c.id === categoryId);
        this.setState ({
            selCategory: category.category,
            category_id: category.id

        });
    }

    render() {
        let categories = this.context.category;
        let nameError = this.validateName();
        return(
            <div className="add-list">
                <form className="add-list-form">
                    <h2>
                        Create Grocery list
                    </h2>
                    <div className="add-list-section">
                        <label className="list-label">
                            Name:

                        </label>
                        <input 
                        type="text"
                        name="name"
                        className="add-name-input"
                         />
                             
                         <label className="list-label"
                         >
                             Note:
                         </label>
                         <input className="add-note-input"
                         type="text"
                         name = "note"
                         />
                         <label className="list-label"
                         >
                             Price:
                         </label>
                         <input className="add-price-input"
                         type="text"
                         name = "price"
                         />
                             <label className="list-label"
                         >
                             Weight:
                        </label>
                         <input className="add-Weight-input"
                         type="text"
                         name = "weight"
                         />
                         
                         
                         <select
                         onChange = {(e) => this.changeCategory(e)}
                         name = "category_id"
                         id="category-dropdown"
                         >
                             {categories.map((category, index) => (
                                 <option
                                 key={index}
                                 value={category.id}
                                 selected = {
                                     category.category === this.props.match.params.category ? "selected" : false
                                 }
                                 >
                                     {category.category}

                                 </option>

                             ))}
                            
                        </select>
                        <button className="add-list-button"
                        type="submit"
                        >
                            Create List

                        </button>

                    </div>
                </form>

                <BackButton {...this.props} className="back-button" />

            </div>
        )
    }

    
   
}


export default ListForm;