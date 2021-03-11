import React, { useContext, useState, useEffect } from "react"
import { auth } from "./firebase"
import axios from 'axios';

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState({data: null});
    const url = 'https://fakestoreapi.com/products';
    const [cartItems, setCartItems] = useState([]);


    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };

    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };

  useEffect(() => {
      setProducts({
          data: null
      })
      axios.get(url)
      .then(response => {
          setProducts({
              data: response.data
          })
      })
  }, [url]);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
      return auth.signInWithEmailAndPassword(email, password) 
    }

    function logout() {
      return auth.signOut()
    }

    function updatePassword(password) {
      return currentUser.updatePassword(password)
    }

    function updateEmail(email) {
      return currentUser.updateEmail(email)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
        })
    
        return unsubscribe
      }, []);

      const countCartItems = cartItems.length
    
    return (<AppContext.Provider value={{signup, login, logout, currentUser, products, onAdd, onRemove, cartItems, countCartItems, updatePassword, updateEmail}}>{!loading && children}</AppContext.Provider>)
}

export default function useGlobalProvider() {
    return useContext(AppContext)
}