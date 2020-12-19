import React from "react"; 


let Context = React.createContext({
    lists: [],
    categories: [],
    setLoggedInUserLists: () => { },
    setUser: () => { },
    setCategories: () => { },
    handleLogout: () => { },
    toggleComplete: () => { },
    createList: () => { },
    deleteList: () => { },
    updateList: () => { },

});

export default Context;