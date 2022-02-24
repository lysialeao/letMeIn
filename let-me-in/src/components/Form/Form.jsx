import React, {useState} from 'react';
import { Container } from './styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import api from '../../services/api';

const Form = (...props) => {

    const [login, setLogin] =  useState('');
    const [pwd, setPwd] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault()

        api.get("login", {'login' : login,'password' : pwd}, {
            headers: { 'Accept': 'application/json', 
                'Content-Type': 'Content-Type'
        }})
        .then((response) => console.log(response.message))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    }

    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <TextField id="login" label="Login" variant="standard" value={login} onChange={(event) => setLogin(event.target.value)} color="secondary" /> <br/> <br/>
                <TextField id="password" label="Senha" type="password" variant="standard" value={pwd} onChange={(event) => setPwd(event.target.value)} color="secondary"/> <br/> <br/> <br/>
                    
                <Button variant="contained" type="submit" color="secondary">Acessar</Button>
            </form>
           
        </Container>
    )
};

export default Form;