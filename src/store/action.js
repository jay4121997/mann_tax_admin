import axios from "axios";
import * as actionTypes from "./actionTypes";
import { useHistory } from "react-router-dom";


const url = process.env.REACT_APP_MY_URL;
export const store = (data, author, createdOn, title) => {
  return (dispatch) => {
    dispatch(save(data));
    let blogData = {
      data,
      author,
      createdOn,
      title,
    };
    axios
      .post(
        `${url}/news.json`,
        blogData
      )
      .then((res) => console.log('Added'))
      .catch((err) => console.error(err));
  };
};

export const update = (data, author, createdOn, title, id) => {

  return (dispatch) => {
    dispatch(save(data));
    let blogData = {
      data,
      author,
      createdOn,
      title,
    };
    try {
      axios
      .put(
        `${url}/news/${id}.json`,
        blogData
      )
      .then((res) => {
        console.log('Done') 
        alert('Blog updated Successfully')
      })
      .catch((err) => console.error(err));
    } catch (error) {
     alert('an error occured please try again later') 
    }
    
  };
};

export const contactUpdate = (contactData) => {
  return (dispatch) => {
    dispatch(updateContact(contactData))
    const a = [{
      imageurl: 'url',
      heading: '123',
      subheading: "asdf",
      text: 'text',
      bulletpoint:[1,2,3,4,5]
    },{
      imageurl: 'url',
      heading: '123',
      subheading: "asdf",
      text: 'text',
      bulletpoint:[1,2,3,4,5]
    },{
      imageurl: 'url',
      heading: '123',
      subheading: "asdf",
      text: 'text',
      bulletpoint:[1,2,3,4,5]
    },{
      imageurl: 'url',
      heading: '123',
      subheading: "asdf",
      text: 'text',
      bulletpoint:[1,2,3,4,5]
    }]
    try {
      axios.put(`${url}/test1.json`, a)
      .then((res) => alert('Databasse Updated'))
    .catch((e)=>alert(`Error updating the data`))
      
    } catch (error) {
      alert('An error Occured Please try again')
    }
    
  }
}

export const save = (text) => {
  return {
    type: actionTypes.SAVE,
    text,
  };
};
export const updateContact = (contact) => {
  return {
    type: actionTypes.CONTACT,
    contact
  }
}