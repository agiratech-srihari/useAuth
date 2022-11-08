import React,{ useState }from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Datepicker.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Fab } from "@mui/material";

function Image() {
  const [startDate, setStartDate] = useState(new Date());  
  return (
    <div>
      <div style={{ display: "flex" ,justifyContent:'center'}}>
        <p style={{ fontSize: "0.8rem", color: "#043752" ,marginTop:'.5rem' }}>UserLogins 10</p>
        <button style={{ marginLeft: "8rem", marginTop:'.5rem',width: "7rem",overflow:'hidden',backgroundColor:'#a6a6a6',color:"#043752"}}>
        <label style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText="mm/dd/yyyy"
          />
          <ExpandMoreIcon/>
          </label>
          </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent:'space-around',
          alignItems: "center",
        }}
      >
        <div>
          <p>Organization</p>
          {/* <img src='organization-chart.png'/> */}
          <img src={require('./Images/organization-chart.png')} style={{width:'60%',marginTop:'1rem',marginBottom:'1rem'}} alt='hello'/>
          <p>Logins </p>
        </div>
        <div>
          <p style={{marginTop:'.5rem'}}>Doctor</p>
          <img src={require('./Images/medical-team.png')} style={{width:'60%',marginTop:'2rem',marginBottom:'.5rem'}} alt='hello' />
          <p>Logins </p>
        </div>
        <div>
          <p>Staff</p>
          <img src={require('./Images/teamwork.png')} style={{width:'60%',marginTop:'1rem',marginBottom:'1rem'}} alt='hello' />
          <p>Logins </p>
        </div>
      </div>
    </div>
  );
}

export default Image;
