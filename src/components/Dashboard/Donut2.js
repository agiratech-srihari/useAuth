import React,{ useState} from 'react';
import Chart from 'react-apexcharts';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Datepicker.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Donut2= (props) =>{
  const [startDate, setStartDate] = useState(new Date());  
    const options = {
      series: [44, 55, 41, 17],
      labels: ['Cash','DebitCard','CreditCard','Others']
    }
    const series = [44,55,41,17]
   return (
      <div className="donut">
        <div style={{display:'flex',justifyContent:'center'}}>
        <p style={{color:"#043752",marginTop:'.5rem',fontSize:'.8rem'}}>Collection</p>
        <button style={{marginLeft:'9rem',width:'7rem',marginTop:'.5rem',overflow:'hidden',backgroundColor:'#a6a6a6',color:"#043752"}}>
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
        <Chart options={options} series={series} type="donut" width="270px" />
      </div>
    );
  
}

export default Donut2;