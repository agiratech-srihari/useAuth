import React,{ useState } from 'react';
import Chart from 'react-apexcharts'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Datepicker.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// import 'https://raw.githubusercontent.com/spa-central-styles/spa-central-styles/master/bundle.js';


const Donut1= (props) =>{
  const [startDate, setStartDate] = useState(new Date());  
  const options = {
      series: [50,50],
      labels: ['Walkin Order','App Order']
    }
    const series=[50,50]
   return (
      <div className="donut">
        <div style={{display:'flex',justifyContent:'center'}}>
        <p style={{fontSize:'0.8rem',color:"#043752"}}>Total Order:100</p>
        <button style={{marginLeft:'7.8rem',width:'7rem',marginTop:'.5rem',backgroundColor:'#a6a6a6',color:"#043752",overflow:'hidden'}} >
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
        <br/>

              
        <Chart width='270px' options={options} series={series} type="donut"  />
      </div>
    );
  
}

export default Donut1;