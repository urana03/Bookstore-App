import axios from 'axios';

// For GET requests
axios.interceptors.request.use(
   (req) => {
      // Add configurations here
     if(req.url.includes('/cart_item_quantity')){
        req.headers['x-access-token'] = localStorage.getItem('token')
     }
      return req;
   },
   (err) => {
      return Promise.reject(err);
   }
);

// For POST requests
axios.interceptors.response.use(
   (res) => {
      // Add configurations here
      return res;
   },
   (err) => {
      return Promise.reject(err);
   }
);