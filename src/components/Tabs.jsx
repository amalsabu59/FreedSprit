'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function NavTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: '#333333' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                    textColor="inherit"
                    indicatorColor="primary"
                    sx={{
                        "& .MuiTabs-indicator": {
                            backgroundColor: "red", // Changing indicator color to red
                        },
                        "& .MuiTab-root": {
                            color: "white", // Setting text color to white for all tabs
                        },
                    }}>
                    <Tab label="Home" {...a11yProps(0)} sx={{ color: 'white' }} />
                    <Tab label="Luggage" {...a11yProps(1)} sx={{ color: 'white' }} />
                    <Tab label="Hard Parts" {...a11yProps(2)} sx={{ color: 'white' }} />
                    <Tab label="Custom Build" {...a11yProps(2)} sx={{ color: 'white' }} />
                </Tabs>
            </Box>
        </Box>
    );
}