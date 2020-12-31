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
            start_date
             

            
            

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
            start_date
             
            
        }
        this.resetFields();
        this.context.updateList(newList);
        this.props.history.push(`/grocery-lists/${this.props.match.params.id}`)
         this.setState({newList})
    }

    resetFields = () => {
        this.setState ({
            id: "",
            name: "",
            note: "",
            price: "",
            weight: "",
            category: "",
             
            
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

    handleClickCancel = (e) => {
        this.props.history.push(`/grocery-lists/${this.props.match.params.id}`);
    }

    render() {
        console.log(this.context)
        console.log(this.props)
        let {name, note, price, weight} = this.state;
        return(
            <div className="edit-lists">
                <form onSubmit ={(e) => this.handleSubmit(e.target.value)} clasName="edit-form">
                    <h2>Edit List</h2>
                    <div className="edit-section">
                        <label className="edit-list-label">Name: 

                        </label>
                        <input  
                        onChange={(e) => this.handleUpdateName(e)}
                            className="edit-list-input"
                        value={name}
                        name = "name"
                        type="text"
                        />
                        <label className="edit-list-label">Note:

                        </label>
                        <input  
                           onChange={(e) => this.handleUpdateNote(e)}

                           className="edit-note-input"
                            type="text"
                            value={note}
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
                            value={price}
                           name="price"
                        />
                        <label 
                           className="edit-list-input"
                        >
                            Weight:

                        </label>
                        <input  
                            onChange={(e) => this.handleUpdateWeight(e)}
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
                    onClick={this.handleClickCancel()}
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