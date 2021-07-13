import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LoginDialog from "../../Container/loginDialog";

const useStyle = makeStyles(() =>
  createStyles({
    button: {
      width: "70%",
      height: "75%",
    },
  })
);

type LoginBtnProps = {
  loginClick: () => void;
  open: boolean;
  onClose: () => void;
  disabled: boolean;
};

const LoginBtn: React.FC<LoginBtnProps> = (props: LoginBtnProps) => {
  const {
    loginClick = () => undefined,
    open = false,
    onClose = () => undefined,
    disabled = false,
  } = props;
  const styles = useStyle();
  return (
    <>
      <Button
        className={styles.button}
        onClick={loginClick}
        variant="outlined"
        color="primary"
        disabled={disabled}
      >
        {disabled ? "ログイン済" : "ログイン"}
      </Button>
      <LoginDialog open={open} onClose={onClose} />
    </>
  );
};

export default LoginBtn;
