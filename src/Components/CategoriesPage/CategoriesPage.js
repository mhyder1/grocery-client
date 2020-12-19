import React from "react";
import Context from "../../Context/Context";
import {Link} from "react-router-dom"
import "./CategoriesPage.css";


class CategoriesPage extends React.Component {
    static contextType = Context;


    render() {
        return (
            <div className="categories-body">
                <header className="categories-header">
                    <h1>Choose Grocery List Category: </h1>

                </header>
                <main>
                    <div className="grocery-list-categories">
                        <div className="grocery-list-category veg">
                            <h2>Vegetables</h2>
                            <button className = "add-cat-button">
                                <Link to="/add-list/vegetables">Vegetables</Link>

                            </button>

                        </div>
                        <div className="grocery-list-category fruits">
                           <h2>Fruits</h2>
                           <button className="add-cat-button">
                              <Link to="/add-list/fruits">Fruits</Link>
                            </button>
                        </div>
                        <div className="grocery-list-category grain">
                           <h2>Grain</h2>
                           <button className="add-cat-button">
                              <Link to="/add-list/Grain">Grain</Link>
                           </button>
                        </div>
                        <div   className="grocery-list-category frozen">
                           <h2>Frozen</h2>
                           <button className="add-cat-button">
                              <Link to="/add-list/frozen">Frozen</Link>
                            </button>
                        </div>
                         <div   className="grocery-list-category mis">
                           <h2>Miscellaneous</h2>
                           <button className="add-cat-button">
                              <Link to="/add-list/Miscellaneous">Miscellaneous</Link>
                            </button>
                        </div>
                        <button className="grocery-list-category btn">
                         <Link to="/grocery-lists">View Your grocery List</Link>
                        </button>

                    </div>
                </main>

            </div>
        )
    }

}


export default CategoriesPage;

