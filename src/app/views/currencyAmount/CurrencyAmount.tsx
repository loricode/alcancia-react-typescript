import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material';

//hooks
import { useMoney } from '../../hooks/MoneyHook';

//config
import { NameRoutes } from '../../config/nameRoutes';

import { sumMoney } from '../../utils/dataOperations';



export const CurrencyAmount = () => {

  const navigation = useNavigate();

  const { piggyBank } = useMoney();


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
              <Typography color={'InfoText'} style={{fontSize:30}}>
                 {sumMoney(piggyBank.currency)}
               </Typography>
            </Box>
          </Grid>

          <Button 
            variant="text"
            onClick={()=> navigation('/')}>
               Regresar
          </Button>

        </Box>
      </Container>
    </React.Fragment>
  );
};
