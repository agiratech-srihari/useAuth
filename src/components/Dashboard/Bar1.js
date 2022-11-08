
import React , { useState} from "react";
import Chart from "react-apexcharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Datepicker.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Bar1 = (props)=>{

  const [startDate, setStartDate] = useState(new Date());  

    const options = {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Oct21','Nov21','Dec21','Jan22']
        },
        
        fill: {
          colors: ['#F44336']
        },
        series: [
        {
          name: "Onboarded",
          data: [120,200,100,100],

        }
      ],
      
    };

    const series =[
      {
        name: "Onboarded",
        data: [120,200,100,100],

      }
    ];
  

 
    return (
      <div className="app">
        <div style={{display:'flex',justifyContent:'center'}}>
        <p style={{fontSize:'.8rem',color:'#043752',marginTop:'.5rem'}}>Onboarded 200</p>
        <button style={{marginLeft:'8rem',width:'7rem',marginTop:'.5rem',overflow:'hidden',backgroundColor:'#a6a6a6',color:"#043752"}}>
          
          <label style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText="mm/dd/yyyy"
            // ExpandMoreIcon
            />
            <ExpandMoreIcon/>
            </label>
          
          </button>
        </div>
        <div className="row" style={{marginTop:'-.5rem'}}>
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="bar"
              width='270px'
            />
          </div>
        </div>
      </div>
    );
  
}

export default Bar1;