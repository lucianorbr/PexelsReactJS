import React from 'react';
import TextField from "@material-ui/core/TextField";

const Input = (props) => {
    return (
        <form
            onSubmit={props.submit}
            style={{
                margin: '3rem 0 ',
                fontSize: '14px',
            }}>
            <TextField
                id="outlined-password-input"
                label="Search for free photos..."
                autoComplete="current-password"
                onChange={props.change}
            />
        </form>
    );
};

export default Input;