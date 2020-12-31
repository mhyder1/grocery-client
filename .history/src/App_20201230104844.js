import React from "react";
import "./App.css"
import { Route } from "react-router-dom"
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
//import List from "./Components/Lists/List"
import GroceryList from "./Components/GroceryList/GroceryList"
import listData from "./listData";
import Config from "./Config/Config";
import TokenService from "./services/TokenService";



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
          if ((list.id) === (id)) {
            list.checked = !list.checked;
            let checked = list.checked;
            let listCheck = { id, checked };
            fetch(`${Config.API_ENDPOINT}/api/lists/${id}`, {
              method: "PUT",
              body: JSON.stringify(listCheck),
              headers: {
                "contendt-type": "application/json",
                Authorization: `Bearer ${TokenService.getAuthToken()}`,
              },
            }).then((res) => {
              if (!res.ok) {
                return res.json().then((error) => Promise.reject(error));
              }
              return res;
            })
          };
          return list;
        }),

      });
    },

  };






  handleLogout = () => {
    TokenService.clearAuthToken();
    this.setState({
      lists: [],
      categories: [],
    });

  };

  setLoggedInUserLists = (lists) => {
    this.setState({
      lists: lists,
    });

  };

  setCategories = (categories) => {
    this.setState({ categories })
  }

  setUser = (user) => {
    this.setState({
      user: {
        username: user.username,
        user_id: user.id,
      },
    });


  };


  createList = (list) => {
    this.setState({
      lists: [...this.state.lists, list]
    });


  }

  deleteList = (listid) => {
    let newLists = this.state.lists.filter((list) => list.id !== listid);
    this.setState({
      lists: newLists
    })

  };

  /* unable to update list */

  updateList = (editList) => {
    this.setState({
      lists: this.state.lists.map((list) =>
        list.id !== editList.id ? list : editList
      ),
    });

  };
  render() {

    let contextValue = {
      lists: this.state.lists,
      categories: this.state.categories,
      user: this.state.user,
      setLoggedInUserLists: this.setLoggedInUserLists,
      setUser: this.setUser,
      setCategories: this.setCategories,
      handleLogout: this.handleLogout,
      toggleComplete: this.state.toggleComplete,
      createList: this.createList,
      deleteList: this.deleteList,
      updateList: this.updateList,
    };
    return (

      <Context.Provider value={contextValue}>
        <ErrorPage>
          <div className="App">
            {/* <Route path="/" component={Navbar} /> */}

            <Route exact path="/" component={Header} />
            {/* <Route exact path="/login" component={Login} /> */}

            <Route exact
              path={["/add-list", "/add-list/:category"]}
              component={ListForm}
            />
            {/* <Route exact path="/register" component={Register} /> */}
            <Route
              exact
              path="/grocery-list-categories"
              component={CategoriesPage}
            />
            <main>
              <div className="main-lists">
                <Route
                  exact
                  path={[
                    "/grocery-lists",
                    "/grocery-lists/:id",
                    "/completed-lists",
                    "/completed-lists/:id"

                  ]}
                  render={(props) => <GroceryList {...props} checked={false} />}

                />
                <Route
                  exact
                  path={[
                    "/grocery-lists",
                    "/grocery-lists/:id",
                    "/completed-lists",
                    "/completed-lists/:id"

                  ]}
                  render={(props) => <GroceryList {...props} checked={true} />}

                />
                <div className="view-list">
                  {/* <Route
                     exact
                     path={["/grocery-lists/:id", "/completed-lists/:id"]}
                     render={(props) => (
                       <List {...props} selected={this.selected} />
                     )}
                   /> */}



                </div>

              </div>
              <Route
                exact
                path="/edit-lists/:id"
                render={(props) => (
                  <EditList {...props} updateList={this.updateList} />
                )}
              />
              <Route exact path="/" component={Features} />

            </main>

            <Route path="/" component={Footer} />


          </div>
        </ErrorPage>
      </Context.Provider>

    )
  }
}

export default App


