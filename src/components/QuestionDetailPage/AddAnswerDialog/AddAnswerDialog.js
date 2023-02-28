import { Dialog, DialogContent } from "@mui/material";
import styles from "./AddAnswerDialog.module.css";
import React from "react";
import { UserContext } from "@/contexts/UserContext";
import { useRouter } from 'next/router'

function AddAnswerDialog({ open, handleClose }) {
  const [answer, setAnswer] = React.useState("");
  const {dwitter} =  React.useContext(UserContext);
  const router = useRouter()
  const {id} = router.query

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!dwitter) return;
    dwitter.addAnswer(id, answer).then((res) => {
      console.log(res);
      alert("Answer added successfully")
    }).catch((err) => {
      console.log(err);
      
    })
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
        <form onSubmit = {handleSubmit}>
        <div className={styles.ask_question_dialog__title}>Add Answer</div>
        <div className={styles.ask_question_dialog__form}>
          <div className={styles.ask_question_dialog__description}>
            <div className={styles.ask_question_dialog__description__title}>
              Enter your answer
            </div>
            <textarea name="" id="" cols="30" rows="5" value={answer} onChange={(e)=>setAnswer(e.target.value)} required></textarea>
          </div>
          <div className={styles.ask_question_dialog__description}>
            <div className={styles.ask_question_dialog__description__title}>
              Tags {"( Seperate by , )"}
            </div>
            <input type="text" />
          </div>
          <button className={styles.ask_question_dialog__button} type='submit'>Add Answer</button>
        </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddAnswerDialog;
