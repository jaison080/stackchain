import { Dialog, DialogContent } from "@mui/material";
import styles from "./AskQuestionDialog.module.css";
import React from "react";
import { UserContext } from "@/contexts/UserContext";

function AskQuestionDialog({ open, handleClose }) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [tags, setTags] = React.useState("");
  const {dwitter} =  React.useContext(UserContext);
  const handleSubmit = (e) => {

    e.preventDefault();
    
    dwitter.postQuestion(title, description).then((res) => {
      console.log(res);
    }
    );
  };

  return (
    
    <Dialog
      open={open}
      PaperProps={{
        style: {
          backgroundColor: "#02121c",
          color: "#f9f9f9",
          borderRadius: "1rem",
          padding: "1rem",
        },
      }}
      BackdropProps={{
        style: {
          opacity: 0.5,
          background:
            "linear-gradient(90deg, #0C4C82 -13.51%, #0D4F84 -12.59%, #187BA2 5.14%, #1F9BB8 20.99%, #24AFC5 34.24%, #26B6CA 43.28%, #30B9C7 50.27%, #4DBFBE 62.37%, #7ACBAF 78.1%, #B1D89E 94.53%)",
        },
      }}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="lg"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
      <form onSubmit={handleSubmit}>
        <div className={styles.ask_question_dialog__title}>Ask Question</div>
        <div className={styles.ask_question_dialog__form}>
          <div className={styles.ask_question_dialog__description}>
            <div className={styles.ask_question_dialog__description__title}>
              Question Title
            </div>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>
          </div>
          <div className={styles.ask_question_dialog__description}>
            <div className={styles.ask_question_dialog__description__title}>
              Question Description
            </div>
            <textarea name="" id="" cols="30" rows="5" value={description} onChange={(e)=>{setDescription(e.target.value)}} required></textarea>
          </div>
          <div className={styles.ask_question_dialog__description}>
            <div className={styles.ask_question_dialog__description__title}>
              Tags {"( Seperate by , )"}
            </div>
            <input type="text" value={tags} onChange={(e)=>{setTags(e.target.value)}} />
          </div>
          <button className={styles.ask_question_dialog__button} type="submit">Ask Question</button>
        </div>
        </form>
      </DialogContent>
    </Dialog>
    
  );
}

export default AskQuestionDialog;
