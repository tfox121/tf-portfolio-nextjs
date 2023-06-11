import { Alert, Box, Button, Grid, TextField } from '@mui/material';
import { useReducer, useState } from 'react';
import { formReducer } from '../reducers';
import { initialFormState } from '../reducers/formReducer';

const lambdaEndpoint =
  'https://qnfwo92feh.execute-api.eu-west-1.amazonaws.com/prod/contact';

export default function ContactForm() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [success, setSuccess] = useState(false);
  const [result, setResult] = useState('');

  const handleFormChange = (evt) => {
    dispatch({
      type: 'TEXT_FIELD_CHANGE',
      field: evt.target.name,
      payload: evt.target.value,
    });
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      const response = await fetch(lambdaEndpoint, {
        method: 'POST',
        body: JSON.stringify(formState),
      });
      const { message } = await response.json();
      setResult(message);
      setSuccess(true);
      dispatch({
        type: 'RESET_FORM',
      });
    } catch (err) {
      setResult('Sorry your message could not be sent, please try again!');
      console.error(err);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%">
      <Grid container rowSpacing={2} columnSpacing={4}>
        {!success && (
          <>
            <Grid item md={6} xs={12}>
              <TextField
                label="Your name"
                name="name"
                type="text"
                autoComplete="name"
                required
                fullWidth
                variant="standard"
                onChange={handleFormChange}
                value={formState.name}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                label="Your email"
                name="email"
                type="email"
                autoComplete="email"
                required
                fullWidth
                variant="standard"
                onChange={handleFormChange}
                value={formState.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Your message"
                name="message"
                type="text"
                multiline
                rows={5}
                required
                fullWidth
                variant="standard"
                onChange={handleFormChange}
                value={formState.message}
              />
            </Grid>
          </>
        )}
        {!!result.length && (
          <Grid item xs={12}>
            <Alert severity={success ? 'success' : 'warning'}>{result}</Alert>
          </Grid>
        )}
        <Grid item xs={12} display="flex" justifyContent="center">
          <Button
            type="submit"
            variant="outlined"
            disabled={success}
            sx={{ width: '150px' }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
