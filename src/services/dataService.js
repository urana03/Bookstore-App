import axios from "axios";

const headerConfig = {
       headers:{
       'x-access-token':localStorage.getItem('token')
       }
};

export const getBookApi = () =>{
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',headerConfig)
    return response
}

export const addCart = (item) => {
    console.log(headerConfig)
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${item.product_id}`,item,headerConfig)
    return response
}

export const cartQuantity = (id,quantity) => {
    console.log('working')
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,quantity)
    return response
}

export const getCartItem = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items',headerConfig)
    return response
}

export const deleteBook = (id) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`,headerConfig)
    return response
}