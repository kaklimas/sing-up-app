import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import './App.css'

function App() {
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeFullName = (event) => {
        setFullName(event.target.value);
    }
    const changeUserName = (event) => {
        setUserName(event.target.value);
    }
    const changeEmail = (event) => {
        setEmail(event.target.value);
    }
    const changePassword = (event) => {
        setPassword(event.target.value);
    }
    const resetForm = () => {
        setFullName('');
        setUserName('');
        setEmail('');
        setPassword('');
    }
    const userNameExists = async () => {
        const users = await axios.get('http://localhost:4000/app/users')
        const sameClients = users.data.filter(user => user.username === userName);
        if (sameClients.length > 0){
            return true
        }
        return false
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const registered = {
            fullName: fullName,
            username: userName,
            email: email,
            password: password
        }
        if (userNameExists()){
            console.log('Provided user exists')
            return
        }
        axios.post('http://localhost:4000/app/signup', registered)
        resetForm()
    }

    return (
        <div id='box'>
            <div className="container">
                <div className="form-div">
                    <form onSubmit={onSubmit}>
                        <input 
                            type="text"
                            placeholder='Full Name' 
                            onChange={changeFullName}
                            value={fullName}
                            className='form-control form-group f'
                        />

                        <input 
                            type="text"
                            placeholder='User Name' 
                            onChange={changeUserName}
                            value={userName}
                            className='form-control form-group f'
                        />
                        <input 
                            type="text"
                            placeholder='E-mail' 
                            onChange={changeEmail}
                            value={email}
                            className='form-control form-group f'
                        />
                        <input 
                            type="password"
                            placeholder='Password' 
                            onChange={changePassword}
                            value={password}
                            className='form-control form-group f'
                        />
                        <input type='submit' className='btn btn-danger btn-block f' value='Submit'></input>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default App