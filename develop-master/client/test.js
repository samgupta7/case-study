// import React,{useState, useEffect} from 'react';

// const BaseAlert = ({msg, timer, type, showAlert}) => {
//     const [show, setShow] = useState(showAlert);


//     const handleAlertClose = () => {
//         setShow(false);
//     }

//     useEffect(()=>{
//         let timerToRun = timer ? timer : 2000;
//         let timestamp= setTimeout(()=>{
//             setShow(!showAlert)
//         }, timerToRun)

//         return (
//             clearTimeout(timestamp)
//         )
//     },[timer])

//     return( 
//         show && (<div>
//             <p onClick={handleAlertClose}>X</p>
//             <div classname={`alert_${type}`}>{msg}</div>
//         </div>)
    
//     )

//     const SuccessAlert =()=> return <BaseAlert type="success" /> 
// }

// <BaseAlert msg="hi" type={} ></BaseAlert>