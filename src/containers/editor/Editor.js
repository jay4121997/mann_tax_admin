import React, {useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store/action";
// import 'draft-js/dist/Draft.css';
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import "./Editor.css" 
import { useHistory } from "react-router-dom";


const MyEditor = (props) => {
  let history = useHistory();

  const author = useSelector((state) => state.author);
  const [autherName, setAuthorName] = useState(author);
  const [createdOn, setCreatedOn] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [title, SetTitle] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const dispatch = useDispatch();

  const onContentStateChange = (contentState) => {
    setEditorState(draftToHtml(contentState));
    console.log(contentState)
      console.log(draftToHtml(contentState))
  };
  const onSubmitHander = (event) => {
      event.preventDefault();
      // console.log(editorState)
    dispatch(store(editorState, autherName, createdOn, title));
    history.push('/view-all')
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
        onContentStateChange={onContentStateChange}
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

export default MyEditor;
