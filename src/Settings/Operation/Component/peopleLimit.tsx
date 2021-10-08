import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    peopleLimitSelectPC: {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '82px'
    },
    peopleLimitSelectPhone: {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '10px'
    },
    button: {
      marginLeft: '190px',
      width: '20%',
      backgroundColor: theme.palette.green.second,
      borderRadius: '4px',
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.green.disabled
      },
      '&:disabled': {
        backgroundColor: theme.palette.green.disabled
      }
    },
    text: {
      color: theme.palette.white.main,
      fontFamily: 'Kosugi Maru'
    }
  })
);

type PeopleLimitProps = {
  limit: string;
  handleChange: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
  limitItem: Array<string>;
  submitError: boolean;
  handleOnSubmit: () => void;
};

const PeopleLimit: React.FC<PeopleLimitProps> = (props: PeopleLimitProps) => {
  const {
    limit = '',
    handleChange = () => undefined,
    limitItem = [],
    submitError = false,
    handleOnSubmit = () => undefined
  } = props;
  const styles = useStyle();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Box className={styles.peopleLimitSelectPC}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label' color='secondary'>
              人数
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={limit}
              label='Age'
              onChange={handleChange}
              color='secondary'
            >
              {limitItem.map((item, index) => {
                return (
                  <MenuItem value={item} key={`hourItem_${index}`}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Button className={styles.button} onClick={handleOnSubmit}>
          <Typography className={styles.text}> 設定</Typography>
        </Button>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.peopleLimitSelectPhone}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label' color='secondary'>
              人数
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={limit}
              label='Age'
              onChange={handleChange}
              color='secondary'
            >
              {limitItem.map((item, index) => {
                return (
                  <MenuItem value={item} key={`hourItem_${index}`}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Button className={styles.button} onClick={handleOnSubmit}>
          <Typography className={styles.text}> 設定</Typography>
        </Button>
      </MediaQuery>
    </>
  );
};

export default PeopleLimit;
