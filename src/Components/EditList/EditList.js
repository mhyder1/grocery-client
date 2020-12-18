import React from "react";
import Context from "../../Context/Context";
import listData from "../../listData";


class EditList extends React.Component {
    static ContextType = Context;

    state = {
        lists: listData.lists,
        categories: listData.categories

    };

    handleSubmit = (e) => {
        e.preventDefault();
        let {
            lists: [
                {
                    id,
                    name,
                    note,
                    price,
                    weight,
                    category,

                }
            ],
            categories: [
                {
                    category_Id,
                }
            ]
                
                

            
            

        } = this.state;
        let newList = {
            lists: [
                {
                    id,
                    name,
                    note,
                    price,
                    weight,
                    category,

                }
            ],
            categories: [
                {
                    category_Id,

                }
            ]
            
        }
        this.resetFields();
        this.context.updateList(newList);
        this.props.history.push(`/gorcery-list/${this.props.match.params.id}`)
         this.setState({newList})
    }

    resetFields = () => {
        this.setState ({
            lists: [
                {
                    id:"",
                    name: "",
                    note: "",
                    price: "",
                    weight: "",
                    category: "",
                }
            ],
            categories: [
                {
                    category_Id: ""
                }
            ]
                
            
        })
    }
    handleUpdateName = (e) => {
        this.setState({
            name: e.target.value,

        });
    }

    handleUpdateNote = (e) => {
        this.setState({
            note: e.target.value,
        })
    }

    handleUpdatePrice = (e) => {
        this.setState({
            price: e.target.value,
        })
    }
    handleUpdateWeight = (e) => {
        this.setState({
            weight: e.target.value
        })
    }

    handleClickCancel = () => {
        this.props.history.push(`/grocery-list/${this.props.match.params.id}`);
    }

    render() {
        // let {id, name, note, category,category_Id} = this.state;
        return(
            <div className="edit-lists">
                <form onSubmit ={(e) => this.handleSubmit(e)} clasName="edit-form">
                    <h2>Edit List</h2>
                    <div className="edit-section">
                        <label className="edit-list-label">Name: 

                        </label>
                        <input  
                        onChange={(e) => this.handleUpdateName(e)}
                        className="edit-list-input"
                        name = "name"
                        type="text"
                        />
                        <label className="edit-list-label">Note:

                        </label>
                        <input  
                           onChange={(e) => this.handleUpdateNote(e)}

                           className="edit-note-input"
                           type="text"
                           name="note"
                        />
                        <label className="edit-list-label"
                        
                        >
                            Price:

                        </label>
                        <input  
                           onChange={(e) => this.handleUpdatePrice(e)}
                           className="edit-price-input"
                           type="text"
                           name="price"
                        />
                        <label 
                           className="edit-weight-input"
                        >
                            Weight:

                        </label>
                        <input  
                            onChange={(e) => this.handleUpdateWeight(e)}
                           className="edit-weight-input"
                           type="text"
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

                    >{" "}
                    cancel

                    </button>

                </form>

            </div>
        )
    }
}

export default EditList;