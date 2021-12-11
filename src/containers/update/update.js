import React, { useEffect, useState } from "react";
import { convertFromHTML,EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../store/action";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { useParams } from "react-router";
import axios from "axios";
import "./update.css"
 


const url = process.env.REACT_APP_MY_URL;

const Update = (props) => {
    const { id } = useParams();

  const author = useSelector((state) => state.author);
  const [autherName, setAuthorName] = useState(author);
  const [createdOn, setCreatedOn] = useState(
    new Date().toISOString().split("T")[0]
  );
    const [title, SetTitle] = useState("");
    const [html, setHtml] = useState("<div>Please wait</div>")
    const [blocksFromHTML,setBlockFromHTML]=useState(()=>convertFromHTML(html))
    const [content,setContent]=useState(()=>ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      ))
  let [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  let [updatedContent,setUpdatedContent]=useState()
    useEffect(() => {
        axios.get(`${url}/news/${id}.json`).then((res) => {
            setHtml(res.data.data)
            setBlockFromHTML(()=>convertFromHTML(res.data.data))
            setContent(()=>ContentState.createFromBlockArray(
                convertFromHTML(res.data.data).contentBlocks,
                convertFromHTML(res.data.data).entityMap
            ))
            setEditorState(()=>EditorState.createWithContent(ContentState.createFromBlockArray(
                convertFromHTML(res.data.data).contentBlocks,
                convertFromHTML(res.data.data).entityMap
            )))
        });
      },[]);

  const dispatch = useDispatch();

  const onContentStateChange = (editorState) => {
    // console.log(editorState)
    setEditorState(editorState);
    
      // console.log(draftToHtml(contentState))
  };
  const onContentUpdate = (contentState) => {
    setUpdatedContent(draftToHtml(contentState))
  }
  const onSubmitHander = (event) => {
      event.preventDefault();
    dispatch(update(updatedContent, autherName, createdOn, title, id));
    

    
  };

  return (
    <div
      style={{
        width: "80%",
        border: "3px solid black",
        borderRadius: "5px",
        margin: "0 auto",
        padding: "30px",
      }}
    >
      <Editor
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onContentStateChange}
        onContentStateChange={onContentUpdate}
        editorState={editorState}
        toolbar={{
        options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'image'],
        inline: { options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'] }
        
        }}
      />
      {/* <textarea
        rows="10"
        disabled
        value={JSON.stringify(editorState, null, 4)}
      /> */}
      <form onSubmit={(event) => onSubmitHander(event)}>
        <div>
          <p>Author Name</p>
          <input
            type="text"
            value={autherName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div>
          <p>Blog Title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => SetTitle(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Update;
