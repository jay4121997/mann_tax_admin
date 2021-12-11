import axios from "axios";
import React, { useEffect, useState } from "react";
import ViewCard from "../../components/ViewCard";
import "./ViewAll.css";

const url = process.env.REACT_APP_MY_URL;
const ViewAll = (props) => {
  const [lists, setLists] = useState([]);
  let allBlog = [];
  useEffect(() => {
    axios.get(`${url}/news.json`).then((res) => {
      for (let i in res.data) {
        allBlog.push({ ...res.data[i], key: i });
      }
      
      setLists(allBlog.reverse());
    });
  },[]);
  const onDeleteHandler = (k) => {
    axios
      .delete(`${url}/news/${k}.json`)
      .then((res) => {
        let filteredBlog = lists
        filteredBlog = filteredBlog.filter((blog) => blog.key !== k)
        alert("Blog Deleted....This can't be undone")
        setLists(filteredBlog)
      }) 
      .catch((e) => console.log(e))
  }
  return (
    <div className='card-container'>
     <div className="cards" >
      {lists.map((i) => {
        return (
          <div key={i.key} >
            <ViewCard
              myKey={i.key}
              title={i.title}
              author={i.author}
              created={i.createdOn}
              clicked={() => onDeleteHandler(i.key)}
            ></ViewCard>
          </div>
        );
      })}
      </div>
      </div>
  );
};

export default ViewAll;
