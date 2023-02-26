import { UserContext } from "@/contexts/UserContext";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import styles from "../QuestionDetailPage/AddAnswerDialog/AddAnswerDialog.module.css";
import { useContext, useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { padding } from "@mui/system";

function Login({ className }) {
  const { loginStatus, smartAccount, handleLogin } = useContext(UserContext);
  const [open3, setOpen3] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleClickOpen = () => {
    setOpen3(true);
  };
  const handleClose = () => {
    setOpen3(false);
  };
  return (
    <>
      {loginStatus === "loading" && <div className={className}>Loading...</div>}
      {loginStatus === "loggedIn" && (
        <div className={className} onClick={handleClickOpen}>
          View Address
        </div>
      )}
      {loginStatus === "logginIn" && (
        <div className={className}>Logging In...</div>
      )}
      {loginStatus === "logginOut" && (
        <div className={className}>Logging Out...</div>
      )}
      {loginStatus === "loggedOut" && (
        <div className={className} onClick={handleLogin}>
          {loginStatus === "loggedOut" && "Login"}
        </div>
      )}
      {loginStatus === "loggedIn" && (
        <div className={className} onClick={handleLogin}>
          {loginStatus === "loggedIn" && "Logout"}
        </div>
      )}
      <Dialog
        open={open3}
        PaperProps={{
          style: {
            backgroundColor: "#02121c",
            color: "#f9f9f9",
            borderRadius: "1rem",
            padding: "1rem",
            overflowWrap: "break-word",
          },
        }}
        BackdropProps={{
          style: {
            opacity: 0.5,
            background:
              "linear-gradient(90deg, #0C4C82 -13.51%, #0D4F84 -12.59%, #187BA2 5.14%, #1F9BB8 20.99%, #24AFC5 34.24%, #26B6CA 43.28%, #30B9C7 50.27%, #4DBFBE 62.37%, #7ACBAF 78.1%, #B1D89E 94.53%)",
          },
        }}
        onClose={() => {
          handleClose();
        }}
        fullWidth={true}
        maxWidth="lg"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div
            className={styles.ask_question_dialog__title}
            style={{
              fontSize: "1.3rem",
              color: "#fff",
            }}
          >
            Your Address
          </div>
        </DialogTitle>
        <DialogContent sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
          <div
            className={styles.ask_question_dialog__title}
            style={{
              fontSize: "1.3rem",
            }}
          >
            {smartAccount?.address}

            <CopyToClipboard
              text={smartAccount?.address}
              onCopy={() => setCopied(true)}
            >
              {copied ? (
                <FiCheck
                  style={{
                    color: "#00ff00",
                    position: "relative",
                    top: "0.5rem",
                    fontSize: "2rem",
                    paddingLeft: "0.5rem",
                  }}
                />
              ) : (
                <FiCopy
                  style={{
                    color: "#f9f9f9",
                    position: "relative",
                    top: "0.5rem",
                    fontSize: "2rem",
                    paddingLeft: "0.5rem",
                  }}
                />
              )}
            </CopyToClipboard>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Login;
