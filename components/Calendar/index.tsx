import useScrollFadeIn from '@hooks/useScrollFadeIn';
import React from 'react';
import "./styles.css"

const Calendar = () =>{
    const days = new Array(31).fill(0);
    const animatedItem = useScrollFadeIn('up',1,0.2)
    return(
    <div style={{display:'flex',justifyContent:'center'}}>
        <div className="calendar" {...animatedItem}>
                <div className="content">
                    <h2 className="year">2021</h2>
                    <ul className="months">
                        <li><a href="#" title="Jan" data-value="1">Jan</a></li>
                        <li><a href="#" title="Feb" data-value="2">Feb</a></li>
                        <li><a href="#" title="Mar" data-value="3">Mar</a></li>
                        <li><a href="#" title="Apr" data-value="4">Apr</a></li>
                        <li><a href="#" title="May" data-value="5">May</a></li>
                        <li><a href="#" title="Jun" data-value="6">Jun</a></li>
                        <li><a href="#" title="Jul" data-value="7">Jul</a></li>
                        <li><a href="#" title="Aug" data-value="8">Aug</a></li>
                        <li><a href="#" title="Sep" data-value="9">Sep</a></li>
                        <li><a href="#" title="Oct" data-value="10">Oct</a></li>
                        <li><a href="#" title="Nov" data-value="11" className="selected">Nov</a></li>
                        <li><a href="#" title="Dec" data-value="12">Dec</a></li>
                    </ul>
                    <div className="clearfix"></div>
                    <ul className="weekday">
                        <li><a href="#" title="Mon" data-value="1">Mon</a></li>
                        <li><a href="#" title="Tue" data-value="2">Tue</a></li>
                        <li><a href="#" title="Wed" data-value="3">Wed</a></li>
                        <li><a href="#" title="Thu" data-value="4">Thu</a></li>
                        <li><a href="#" title="Fri" data-value="5">Fri</a></li>
                        <li><a href="#" title="Say" data-value="6">Sat</a></li>
                        <li><a href="#" title="Sun" data-value="7">Sun</a></li>
                    </ul>
                    <div className="clearfix"></div>
                    <ul className="days">
                        {days.map((val, i)=>{
                            let cn = "event";                  
                            val = i;
                            if(i===0) val = '';
                            if(i===26) cn ='selected';
                            return (
                                <li>
                                    <a href="#" className={cn}>{val}</a>
                                </li>
                            )
                        })}                    
                    </ul>
                    <div className="clearfix"></div>
                </div>
            <div className="clearfix"></div>
        </div>
    </div>
    );
}

export default Calendar;
