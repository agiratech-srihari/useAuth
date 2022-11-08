
import React,{useState} from "react";
import Chart from "react-apexcharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Datepicker.css'



const StackedBar = (props)=>{

  const [startDate, setStartDate] = useState(new Date());  

    const data = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Oct21','Nov21','Dec21','Jan22']
        }
      },
      series: [
        {
          name: "Paid 50000",
          data: [50,100,30,30]
        },
        {
            name:"Due 50000",
            data:[60,100,50,50]
        }
      ]
    };
  

 
    return (
      <div className="app">
        <div style={{display:'flex',justifyContent:'center'}}>
        <p style={{fontSize:'0.8rem',color:"#043752",marginTop:'.5rem'}}>Onboarded 200</p>
        <button style={{marginLeft:'8rem',width:'7rem',marginTop:'.5rem',overflow:'hidden',backgroundColor:'#a6a6a6',color:"#043752"}}>
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
        <div className="row" style={{marginTop:'-.5rem'}}>
          <div className="mixed-chart">
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              width="270px"
            />
          </div>
        </div>
      </div>
    );
  
}

export default StackedBar;