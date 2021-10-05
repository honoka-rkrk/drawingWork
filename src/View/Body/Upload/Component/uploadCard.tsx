import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';
import MediaQuery from 'react-responsive';
import CardMedia from '@material-ui/core/CardMedia';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    cardCommon: {
      height: '100%',
      display: 'grid',
      gridTemplateRows: '3% 10% 3% 68% 3% 10% 3%',
      backgroundColor: theme.palette.red.second
    },
    cardCommonPhone: {
      height: '100%',
      display: 'grid',
      gridTemplateRows: '6.3% 14.28% 4.2% 65.56% 9.66%',
      backgroundColor: theme.palette.red.second
    },
    header: {
      gridRow: 2
    },
    headerColor: {
      fontWeight: 'bold',
      color: theme.palette.white.main,
      fontSize: '16px',
      fontFamily: 'Mplus'
    },
    subHeaderColor: {
      color: theme.palette.white.main,
      fontSize: '14px',
      fontFamily: 'Mplus'
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
      backgroundColor: theme.palette.white.main,
      borderRadius: '10px',
      width: '100%',
      height: '100%'
    },
    upload: {
      gridRow: 6
    },
    sendContents: {
      gridRow: 7,
      gridColumn: 2,
      display: 'grid',
      gridTemplateColumns: '3.54% 41.59% 10.03% 38.94% 5.9%',
      gridTemplateRows: '100%'
    },
    titlePhone: {
      gridRow: 1,
      gridColumn: 2
    },
    sendBtnPhone: {
      gridRow: 1,
      gridColumn: 4,
      borderRadius: '4px',
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.green.second
      },
      '&:disabled': {
        backgroundColor: theme.palette.green.disabled,
        color: theme.palette.green.main
      }
    },
    textBtnPhone: {
      fontSize: '24px',
      fontFamily: 'Josefin Sans'
    },
    text: {
      color: theme.palette.red.second,
      fontFamily: 'Mplus'
    }
  })
);

type UploadCardProps = {
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  myFiles: File[];
  src: string;
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
                  <Typography className={styles.text}>
                    Drag&Drop your images here
                  </Typography>
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
        </Card>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Card className={styles.cardCommonPhone}>
          <CardHeader
            className={styles.header}
            title={<Typography className={styles.headerColor}>{header}</Typography>}
            subheader={
              <Typography className={styles.subHeaderColor}>{subHeader}</Typography>
            }
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
                  <Typography className={styles.text}>
                    Drag&Drop your images here
                  </Typography>
                </Button>
              ) : (
                <CardMedia image={src} className={styles.media} />
              )}
            </Box>
          </CardContent>
        </Card>
      </MediaQuery>
    </>
  );
};

export default UploadCard;
