import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Typography
} from '@mui/material';

//hooks
import { useDispatch, useMoney } from '../../hooks/MoneyHook';

//utils
import { currencyValues } from '../../utils/currencyValues';

//interfaces
import { MoneyData } from '../../context/iMoney';

//actions 
import { ADDMONEY } from '../../context/actions';

import { sumMoney } from '../../utils/dataOperations';


export const SaveMoney = () => {

  const navigation = useNavigate();

  const { piggyBank } = useMoney();

  const dispatch = useDispatch();

  const [state, setState] = useState({
    currency: '50'
  });


  const result = useCallback(() => { return sumMoney(piggyBank.currency) } , [piggyBank.currency])


  const saveCurrency = () => {
    const { currency } = state;
    if (currency === "50" ||
      currency === "100" ||
      currency === "200" ||
      currency === "500" ||
      currency === "1000"
    ) {

     const idMoney:string =  new Date().getHours().toString();

      dispatch({ type: ADDMONEY, payload: { value:currency, id:idMoney }});

    }

  };


  const handleChange = ({ target }: any) => {
    const { value, name } = target;
    setState(prev => ({
      ...prev,
      [name]: value
    }))
  };


  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box
          sx={{
            height: "75vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >

          <Grid item xs={12} sm={12} md={12}>
            <Box
              sx={{
                marginBottom:"35px",
                display: "flex",
                justifyContent: "center",
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'gray',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Typography color={'InfoText'} style={{fontSize:30}}>{result()}</Typography>
            </Box>
          </Grid>



          <Grid item xs={12} sm={12} md={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="adrApproved-label">{"moneda" + ' *'}</InputLabel>
              <Select name="currency" value={state.currency}
                onChange={handleChange}
                labelId="adrApproved-label"
                fullWidth
                label={"moneda" + ' *'}>
                {currencyValues.map(item => (
                  <MenuItem key={item.id} value={item.value}>{item.value}</MenuItem>
                ))}

              </Select>
            </FormControl>
          </Grid>

          <Button
            onClick={saveCurrency}
            size="large"
            style={{ margin: "10px" }}
            variant="outlined"
          >
            Guardar Moneda
          </Button>

          <Button variant="text" onClick={()=> navigation('/')}>Regresar</Button>

        </Box>
      </Container>
    </React.Fragment>
  );
};
