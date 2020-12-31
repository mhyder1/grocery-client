import React from "react";
import "./App.css"
import {Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Context from "./Context/Context"
import ErrorPage from "./Components/Errorpage/ErrorPage"
import Navbar from "./Components/Navbar/Navbar"
import Login from "./Components/Login/Login";
import ListForm from "./Components/ListForm/ListForm";
import CategoriesPage from "./Components/CategoriesPage/CategoriesPage";
import EditList from "./Components/EditList/EditList";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Register/Register";
import List from "./Components/Lists/List"
import listData from "./listData"
import Modal from "./Components/Modal/Modal"
import GroceryList from "./Components/GroceryList/GroceryList"
import listData from "./listData";

class App extends React.Component {
  state = {
    user: {
      userName: "",
      user_id: "",
    },
    lists: [],
    categories: [],
    //toggleComplete: (id) => {
      //this.setState({
       // lists: this.state.listData.map(list) => {
         // if(list.id === id) {
            //list.checked = !list.checked;
            //let checked = list.checked;
            //let listcheck = {id,checked}
         //}
          //return lists
        //}
      //})
    //}

  };

  handleLogout = () => {

  }

  setLoggedInUserLists = (lists) => {

  }

  setUser = () => {
    
  }

  createList = (list) => {
    
  }

  // deleteList = (listid) => {
  //   let newList = list.splice(list, 1);
  //   this.setState({
  //     lists: newList
  //   })
    
  // };

  updateList = (editList) => {
    
  };
  render() {
    console.log(listData)
    let contextValue = {
      lists: this.state.lists,
      categories: this.state.categories,
      user: this.state.user,
      setLoggedInUserLists: this.state.setLoggedInUserLists,
      setUser: this.state.setUser,
      setCategories: this.state.setCategories,
      handleLogout: this.state.handleLogout,
      toggleComplete: this.state.toggleComplete,
      createList: this.state.createList,
      deleteList: this.state.deleteList,
      updateList: this.state.updateList,

    };
    return (
      
      <Context.Provider value={contextValue}>
        <ErrorPage>
          <div className="App">
            <Route path="/" component={Navbar} />
            
            <Route exact path="/" component={Header} />
            <Route exact path="/login" component={ Login}/>
            
            <Route exact
            path={["/add-list", "/add-list/:category"]}
            component = {ListForm}
            />
            <Route exact path="/register" component={Register} />
            <Route
            exact
            path="/grocery-list-categories"
            component ={CategoriesPage}
             />
             <main>
               <div className="main-lists">
                 <Route
                   exact
                   path={[
                     "/gorcery-list",
                     "/gorcery-list/:id",
                     "/complated-list",
                     "/complated-lists/:id"

                   ]}
                   render={(props) => <GroceryList{...props} checked={false} />}
                 
                 />
                 <Route
                   exact
                   path={[
                     "/gorcery-list",
                     "/gorcery-list/:id",
                     "/complated-list",
                     "/complated-lists/:id"

                   ]}
                   render={(props) => <GroceryList{...props} checked={true} />}
                 
                 />
                 <div className="view-list">
                   <Route
                     exact
                     path={["/grocery-list/:id", "/completed-list/:id"]}
                     render={(props) => (
                       <list {...props} selected={this.state.selected} />
                     )}
                   >

                   </Route>

                 </div>

               </div>
               <Route 
                 exact 
                 path="/edit-list/:id"
                 render={(props) => (
                   <EditList />
                 )}
               />
               <Route exact path="/" component={Features} />

             </main>

             <Route path="/" component={Footer}/>
            

          </div>
        </ErrorPage>
      </Context.Provider>
      
    )
  }
}

export default App


