import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const Menu = () => {

    return (
        <>
            <Grid container style={{ padding: 10 }}>
                
                <Grid item md={12} xs={12} sm={12}>
                    
                    <div className='menu'>

                        <Link to="/home">
                            <div
                                className='itemMenu'>
                                HOME
                            </div>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default Menu;
