import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import { DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';

const useStyle = makeStyles(() =>
  createStyles({
    cardCommon: {
      height: '100%',
      display: 'grid',
      gridTemplateRows: '3% 10% 3% 68% 3% 10% 3%'
    },
    header: {
      gridRow: 2
    },
    contentCommon: {
      display: 'grid',
      gridTemplateRows: '100%',
      gridRow: 4
    },
    content: {
      gridRow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      width: '100%',
      height: '100%'
    },
    upload: {
      gridRow: 6
    }
  })
);

type UploadCardProps = {
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  myFiles: File[];
  src: string;
  clickable: boolean;
  handleUpload: (accepterdImg: any) => Promise<void>;
  title: string;
  handleTitleChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

const UploadCard: React.FC<UploadCardProps> = (props: UploadCardProps) => {
  const styles = useStyle();
  const {
    getRootProps = () => undefined,
    getInputProps = () => undefined,
    myFiles = [],
    src = '',
    clickable = false,
    handleUpload = () => undefined,
    title = '無題',
    handleTitleChange = () => undefined
  } = props;
  return (
    <>
      <Card className={styles.cardCommon}>
        <CardHeader
          className={styles.header}
          title='Upload Your image'
          subheader='ファイルの種類は「Jpeg」「Jpg」「Png」にしてください。'
        />
        <CardContent className={styles.contentCommon}>
          <Box {...getRootProps()} className={styles.content}>
            <input {...getInputProps()} />
            {myFiles.length === 0 ? (
              <Button
                className={styles.button}
                color='secondary'
                fullWidth
                autoFocus
              >
                Drag&Drop your images here
              </Button>
            ) : (
              <Box className={styles.content}>
                {myFiles.map((file: File) => (
                  <React.Fragment key={file.name}>
                    {src && <img src={src} />}
                  </React.Fragment>
                ))}
              </Box>
            )}
          </Box>
        </CardContent>
        <CardActions className={styles.upload}>
          {myFiles.length !== 0 ? (
            <TextField
              label='タイトル'
              fullWidth
              id='title'
              type='text'
              value={title}
              onChange={handleTitleChange}
            />
          ) : null}
          <Button
            className={styles.button}
            disabled={!clickable}
            type='submit'
            variant='contained'
            color='secondary'
            fullWidth
            style={{ marginTop: '16px' }}
            onClick={() => handleUpload(myFiles)}
          >
            UPLOAD
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default UploadCard;
