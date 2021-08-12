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
import MediaQuery from 'react-responsive';
import CardMedia from '@material-ui/core/CardMedia';

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
      alignItems: 'center',
      width: 'auto',
      height: '100%'
    },
    media: {
      height: 0,
      paddingTop: '100%',
      width: '100%',
      objectFit: 'cover'
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
  header: string;
  subHeader: string;
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
    handleTitleChange = () => undefined,
    header = '画像をアップロードしてください',
    subHeader = 'ファイルの種類は「Jpeg」「Jpg」「Png」にしてください。'
  } = props;
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Card className={styles.cardCommon}>
          <CardHeader
            className={styles.header}
            title={header}
            subheader={subHeader}
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
                      {src && <img src={src} className={styles.content} />}
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
                disabled={!clickable}
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
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Card className={styles.cardCommon}>
          <CardHeader
            className={styles.header}
            title={header}
            subheader={subHeader}
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
                <CardMedia image={src} className={styles.media} />
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
                disabled={!clickable}
              />
            ) : null}
            <Button
              className={styles.button}
              disabled={!clickable}
              type='submit'
              variant='contained'
              color='secondary'
              fullWidth
              style={{ marginTop: '5px' }}
              onClick={() => handleUpload(myFiles)}
            >
              UPLOAD
            </Button>
          </CardActions>
        </Card>
      </MediaQuery>
    </>
  );
};

export default UploadCard;
