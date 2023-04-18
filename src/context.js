import React, { useEffect, useReducer } from "react";
import { useContext } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

let API = "https://hn.algolia.com/api/v1/search?";

const initalState = {
  isLoading: true,
  query: "Computer",
  nbPages: 0,
  page: 0,
  hits: [],
};

//Provider Function
const AppProvider = ({ children }) => {


  const [state, dispatch] = useReducer(reducer, initalState);



  const fetchApiData = async (url) => {

    dispatch({type:"SET_LOADING"});

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
        dispatch({
            type:"GET_STORIES",
            payload:{
                hits: data.hits,
                nbPages:data.nbPages,
            }
        })
    } catch (error) {
      console.log(error);
    }
  };

  const removePost =(post_id)=>{
    dispatch({type:"REMOVE_POST", payload:post_id})
  }

  const searchPost =(searchQuery)=>{
    dispatch({type:"SEARCH_POST", kuchBhi:searchQuery})
  }

  const prevPage =()=>{
    dispatch({type:"PREV_PAGE"})
  }
  const nextPage =()=>{
    dispatch({type:"NEXT_PAGE"})
  }

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);

  return (
    <AppContext.Provider value={{...state, removePost, searchPost, prevPage, nextPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext};
