/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import * as React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {styled, alpha} from '@mui/material/styles';
// import SearchIcon from '@mui/icons-material/Search';
import navLinks from "../../utils/NavLinks";
import './Header.css';
import Logo from '../../assets/img/WISATA_ID__5_-removebg-preview.png';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import {useTheme} from '@mui/material/styles';
import HamburgerComponent from "../Hamburger/HamburgerComponent.jsx";
import SearchComponent from "../SearchBar/SearchComponent.jsx";

const Header = (props) => {
    const theme = useTheme();

    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    return (
        <AppBar position="static" color="primary" className='appBar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <div className="logo">

                        <img src={Logo} title='WisataId'/>

                        </div>
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <HamburgerComponent/>
                        <div className="logoHp">
                            <img src={Logo} title='WisataId'/>

                        </div>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {navLinks.map((link) => (
                            <Button
                                key={link.name}
                                href={link.path}
                                sx={{my: 1, color: 'white', display: 'block'}}
                            >
                                {link.name}
                            </Button>
                        ))}
                    </Box>
                    <IconButton sx={{ml: 1}} onClick={props.toogleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                    </IconButton>
                    <Box>
                        <Search style={{backgroundColor: 'transparent', width: '100%'}}>
                            <SearchIconWrapper>
                                {/*<SearchIcon/>*/}
                            </SearchIconWrapper>
                            <SearchComponent className='searchInput'/>
                        </Search>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;