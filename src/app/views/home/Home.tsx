import React from 'react';
import { useNavigate } from 'react-router-dom';

//components mui/material
import { 
   Box,
   Button,
   Card,
   CardContent,
   Container,
} from '@mui/material';

//confing
import { NameRoutes } from '../../config/nameRoutes';


export const Home = () => {

   const navigation = useNavigate();

   //punto 1
   const saveMoney = () => navigation(NameRoutes.saveMoney); 

   // punto 2
   const quantityCoin = () => navigation(NameRoutes.quantityCoin);

    // punto 3
   const currencyAmount = () => navigation(NameRoutes.currencyAmount);

    // punto 4
   const howManyCoins = () => navigation(NameRoutes.howManyCoins);

    // punto 5
   const howMuchMoney = () => navigation(NameRoutes.howMuchMoney);


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
       <Card>
         <CardContent
           sx={{
             display: "flex",
             justifyContent: "center",
             flexDirection: "column",
           }}
         >

           <Button
             onClick={saveMoney}
             size="large"
             style={{ margin: "10px" }}
             variant="outlined"
           >
             Ahorrar
           </Button>

           <Button
             onClick={quantityCoin}
             size="large"
             style={{ margin: "10px" }}
             variant="outlined"
           >
             Cantidad de monedas
           </Button>

           <Button
             onClick={currencyAmount}
             size="large"
             style={{ margin: "10px" }}
             variant="outlined"
           >
             Cantidad de dinero
           </Button>

           <Button
             onClick={howManyCoins}
             size="large"
             style={{ margin: "10px" }}
             variant="outlined"
           >
             Cuantas Monedas 
           </Button>

           <Button
             onClick={howMuchMoney}
             size="large"
             style={{ margin: "10px" }}
             variant="outlined"
           >
             Cuanto Dinero
           </Button>
           
         </CardContent>
       </Card>
     </Box>
   </Container>
 </React.Fragment>
  )
}
