import React from 'react';
import TextField from "@material-ui/core/TextField";


const Input = (props) => {
    return (
        <form
            onSubmit={props.submit}
            style={{
                margin: '3rem 0 ',
                fontSize: '14px',
                display: 'flex',
            }}>
            <TextField
                id="outlined-password-input"
                label="Search for free photos..."
                size="large"
                autoComplete="current-password"
                onChange={props.change}
                style={{
                    width: '100%',
                }}
            />
        </form>
    );
};

export default Input;