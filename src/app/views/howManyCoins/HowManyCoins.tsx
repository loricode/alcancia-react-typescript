import React, { useState } from 'react';
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
import { useMoney } from '../../hooks/MoneyHook';

//utils
import { currencyValues } from '../../utils/currencyValues';
import { sumCoin } from '../../utils/dataOperations';


export const HowManyCoins = () => {

  const navigation = useNavigate();

  const { piggyBank } = useMoney();

  const [state, setState] = useState({
    currency: '',
    quantityCoin:0
  });



  const sumQuantityCoin = () => {
    const { currency } = state;
    if (currency === "50" ||
      currency === "100" ||
      currency === "200" ||
      currency === "500" ||
      currency === "1000"
    ) {

      const quantityCoin = sumCoin(piggyBank.currency , currency);

      setState(prev => ({
        ...prev,
        quantityCoin
      }));
     
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
                flexDirection:"column",
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'gray',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Typography color={'InfoText'} style={{fontSize:25, textAlign:"center"}}>Cantidad de monedas de: {state.currency}</Typography> 
  
              <Typography color={'InfoText'} style={{fontSize:25, textAlign:"center" }}>{state.quantityCoin}</Typography>
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
            onClick={sumQuantityCoin}
            size="large"
            style={{ margin: "10px" }}
            variant="outlined"
          >
             Aceptar
          </Button>

          <Button variant="text" onClick={()=> navigation('/')}>Regresar</Button>

        </Box>
      </Container>
    </React.Fragment>
  );
};
