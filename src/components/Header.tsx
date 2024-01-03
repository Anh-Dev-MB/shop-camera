import { Box, Input, InputAdornment, Typography } from "@mui/material"
import logo  from "../accests/logo.gif.webp"
import { Logo } from "../styles/Logo"
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DoneIcon from '@mui/icons-material/Done';
export const Header = ()=>{
    return (
        <Box sx={{
            width: "100%",
            display:'flex',
            height: "80px",
            alignItems:'center',
            justifyContent:'space-between'
        }}>
            <Logo>
                <img src={logo} alt={logo} />
            </Logo>
            <Box sx={{
                 display:'flex',
                 alignItems:'center',
            }}>
                <Input 
                    startAdornment={
                        <InputAdornment position="start">
                            <FormatAlignLeftIcon/>
                        </InputAdornment>
                        
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon/>
                        </InputAdornment>
                    }
                placeholder="entire keywork to search"/>


                <Box sx={{
                 display:'flex',
                 alignItems:'center',
                }}>
                    <ShoppingCartIcon/>
                    <Typography><span>Cart</span> (2 items)</Typography>
                    <DoneIcon/>
                </Box>
            </Box>
        </Box>
    )
}