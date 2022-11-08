import React,{ useState , useEffect } from "react";
// import PropTypes from 'prop-types';
import "./Login.css";
// import FormControl from '@mui/material/FormControl';
import Person2Icon from "@mui/icons-material/Person2";
import LockIcon from "@mui/icons-material/Lock";
import Box from '@mui/material/Box';
import Input from "@mui/material/Input/";
// import InputUnstyled from '@mui/base/InputUnstyled';
import {  FormGroup } from "@mui/material";
import useAuth from "../Hooks/useAuth";






function Login() {

  const [username, setusername] = useState('') // For input
  const [password, setpassword] = useState('') // For input
  
  const [isdisabled, setIsDisabled] = useState(false)
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  const validate = () => {
    return username.length & password.length;
  };

  useEffect(() => {
    const isdisabled = validate();
    setIsDisabled(isdisabled);
  }, [username, password]);

  return (
    <div className="backimage">
      <div className="logo">
        <div className="divider">
          <div className="dummy"></div>
          <div className="login-container">
            <div className="input-container">
              <div className="login-handler"></div>
              <div className="heading">
                <h2>
                  {" "}
                  Welcome to <span>SAHINS</span>
                </h2>
              </div>
              <Box style={{ display: "block" }}>
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <div className="input">
                      <Input
                        style={{ height: "2.2rem", color: "#043752" }}
                        disableUnderline
                        type="text"
                        id="email"
                        name="email"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        startAdornment={
                          <Person2Icon 
                          />
                          }

                        placeholder="UserName"
                      />
                    </div>
                    <div className="input">
                      <Input
                        style={{ height: "2.2rem", color: "#043752" }}
                        disableUnderline
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        startAdornment={
                          <LockIcon />
                          // <span style={{width:'1rem'}}></span>
                        }
                        placeholder="Password"
                      />
                    </div>
                  </FormGroup>

                  <p className="fgtps">forgetpassword?</p>

                  <button type="submit" disabled={!validate()}> Login</button>
                </form>
              </Box>
            </div>
          </div>
          <div className="dummy2"></div>
        </div>
      </div>
    </div>
  );
}
export default Login;
