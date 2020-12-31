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
import GroceryList from "./Components/GroceryList/GroceryList"
import listData from "./listData"


class App extends React.Component {
 
  state = {
    lists: listData.lists,
    categories: listData.categories,
    user: {
      userName: "",
      user_id: "",
    },
   

    
    toggleComplete: (id) => {
      this.setState({
        lists: this.state.lists.map((list) => {
          if (list.id === id) {
            list.checked = !list.checked;
            let checked = list.checked;
            let listChecked = { id, checked };
          }
          return list;
         })
        
        })
      }

  };

  handleLogout = () => {

  }

  setLoggedInUserLists = (lists) => {

  }

  setCategories = (categories) => {
    this.setState({categories})
  }

  setUser = () => {
    
  }

  createList = (list) => {
    this.setState({
      lists: [...this.state.lists, list],
    });
    
  }

  deleteList = (listid) => {
    let newLists =this.state.lists.filter((lid) => lid.id !== listid);
      this.setState({
        lists: newLists
    })
    
  };

  updateList = (editList) => {
    this.setState({
      lists: this.state.lists.map((l) =>
        l.id !== editList.id ? l : editList
      ),
    });
    
  };
  render() {
     
    /* remove state from handler */
        let contextValue = {
         lists: this.state.lists,
         categories: this.state.categories,
         user: this.state.user,
         setLoggedInUserLists: this.state.setLoggedInUserLists,
         setUser: this.state.setUser,
         setCategories: this.setCategories,
         handleLogout: this.handleLogout,
         toggleComplete: this.state.toggleComplete,
         createList: this.createList,
         deleteList: this.deleteList,
          updateList: this.updateList,
    };
    return (
      
     <Context.Provider value = {contextValue}> 
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
                     "/grocery-list",
                     "/grocery-list/:id",
                     "/completed-list",
                     "/completed-lists/:id"

                   ]}
                   render={(props) => <GroceryList {...props} checked={false} />}
                 
                 />
                 <Route
                   exact
                   path={[
                     "/grocery-list",
                     "/grocery-list/:id",
                     "/completed-list",
                     "/completed-lists/:id"

                   ]}
                   render={(props) => <GroceryList {...props} checked={true} />}
                 
                 />
                 <div className="view-list">
                   <Route
                     exact
                     path={["/grocery-list/:id", "/completed-list/:id"]}
                     render={(props) => (
                       <List {...props} selected={this.state.selected} />
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


