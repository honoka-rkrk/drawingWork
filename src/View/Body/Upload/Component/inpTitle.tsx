import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    titlePhone: {
      gridRow: 1,
      gridColumn: 2
    }
  })
);

type InpTitleProps = {
  myFiles: File[];
  clickable: boolean;
  title: string;
  handleTitleChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

const InpTitle: React.FC<InpTitleProps> = (props: InpTitleProps) => {
  const styles = useStyle();
  const {
    myFiles = [],
    clickable = false,
    title = '無題',
    handleTitleChange = () => undefined
  } = props;
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        {myFiles.length !== 0 ? (
          <TextField
            className={styles.titlePhone}
            label='タイトル'
            fullWidth
            id='title'
            type='text'
            value={title}
            onChange={handleTitleChange}
            disabled={!clickable}
          />
        ) : null}
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        {myFiles.length !== 0 ? (
          <TextField
            className={styles.titlePhone}
            label='タイトル'
            fullWidth
            id='title'
            type='text'
            value={title}
            onChange={handleTitleChange}
            disabled={!clickable}
          />
        ) : null}
      </MediaQuery>
    </>
  );
};

export default InpTitle;
