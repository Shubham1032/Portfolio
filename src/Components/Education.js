import React, { useState } from 'react'

const Education = () => {
    const [data,setData] = useState(false);
    const [mcom,setMcom] = useState(false);
    const [hsc,setHsc] = useState(false);
    const [ssc,setSsc] = useState(false);
    function change (){
        setData(!data)
        console.log(data)
    }
    function visibility1 (){
        console.log(data)
        if(data === true){
            return ( "Content-div-visible" )
        }else{
            return ( "Content-div-hidden" )
        }
    }
  return (
    <>
    <div className='education-main-container'>
        <h3>Education</h3>
        <div className='timeliner timeliner-block'>
            <div className='timeline-icon'><i class="fa-solid fa-user-graduate fa-xl"></i></div>
            <div className='timeline-content'>
                <div className='content-head'>
                <h3>Masters </h3>
   
                <button onClick={()=>setMcom(!mcom)}> {mcom ? <i class="fa-solid fa-chevron-up "></i> : <i class="fa-sharp fa-solid fa-chevron-down"></i>}</button>
                </div>
                <div className={mcom ? "Content-div-visible" : "Content-div-hidden"}>
                    <ul>
                        <li>I've completed my graduation from <b>Rajasthan University</b>in year 2020</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className='timeline-icon'><i class="fa-solid fa-graduation-cap fa-xl"></i></div>

            <div className='timeline-content'>
                <div className='content-head'>
                <h3>Bcom </h3>
   
                <button onClick={change}> {data ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-sharp fa-solid fa-chevron-down"></i>}</button>
                </div>
                <div className={data ? "Content-div-visible" : "Content-div-hidden"}>
                    <ul>
                        <li>I've completed my graduation from <b>Rajasthan University</b>in year 2020</li>
                        <li></li>
                    </ul>
                </div>
            </div>

            {/* 12th */}
            <div className='timeline-icon'><i class="fa-solid fa-school fa-xl"></i></div>

            <div className='timeline-content'>
                <div className='content-head'>
                <h3>HSC (XII) </h3>
   
                <button onClick={()=>setHsc(!hsc)}> {hsc ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-sharp fa-solid fa-chevron-down"></i>}</button>
                </div>
                <div className={hsc ? "Content-div-visible" : "Content-div-hidden"}>
                    <ul>
                        <li>I've completed my Higher Secondary school from <b>Tagore public school</b> in year 2016</li>
                        <li></li>
                    </ul>
                </div>
            </div>

            {/* 10th */}
            <div className='timeline-icon'><i class="fa-solid fa-school fa-xl"></i></div>

            <div className='timeline-content'>
                <div className='content-head'>
                <h3>SSC (X) </h3>
   
                <button onClick={()=>setSsc(!ssc)}> {ssc ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-sharp fa-solid fa-chevron-down"></i>}</button>
                </div>
                <div className={ssc ? "Content-div-visible" : "Content-div-hidden"}>
                    <ul>
                        <li>I've completed my Secondary school from <b>Tagore Public School</b> in year 2014</li>
                        <li></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

    </>
  )
}

export default Education