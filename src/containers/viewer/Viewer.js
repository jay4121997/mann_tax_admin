import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
const url = process.env.REACT_APP_MY_URL;

const Viewer = (props) => {
  const { id } = useParams();
  let [blog,setBlog]=useState()
  useEffect(() => {
    axios.get(`${url}/news/${id}.json`).then((res) => {
      setBlog(res.data.data);      
    });
  },[]);

  return (
    <div className="App">
      {/* {editorState && <Editor editorState={editorState} readOnly={true} />} */}
      <div dangerouslySetInnerHTML={{__html: blog}}></div>
    </div>
  );
};

export default Viewer;
