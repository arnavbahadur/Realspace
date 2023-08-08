import React, {useRef} from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import "./Appointment.css"
const Excelexport = ({props}) => {
    const tableRef = useRef(null);
  return (
    <div>
         <div>
                {/* <DownloadTableExcel
                    filename="Apointment data"
                    sheet="users"
                    currentTableRef={tableRef.current}
                     >
                   <button> download data in  excel </button>
                </DownloadTableExcel> */}
                

                <table  ref={tableRef}>
                 {/* <tbody> */}
                 {/* <tr>
                       <th>Firstname</th> 
                        <th>Lastname</th>
                        <th>phone</th>
                        <th>date</th>
                        <th>message</th>
                        <th>  */}
                       
                {/* </th>
                 </tr> */}
                    <tr>
                        <td className='tablename'>{props.f_name} {props.l_name}</td>
                        <td  className='tablephone'>{props.phone}</td>
                        <td  className='tabledate'>{props.date}</td>
                        <td  className='tablemsg'> {props.message}</td>
                        <td className='tabledownload'>
                        <DownloadTableExcel
                    filename={props.f_name}
                    sheet="users"
                    currentTableRef={tableRef.current}
                     >
                   <button> ✔️ </button>
                </DownloadTableExcel>
                        </td>
                    </tr>
                  {/* </tbody> */}
                </table>
            </div> 
    </div>
  )
}

export default Excelexport

                
{/* <h2>Name: {props.f_name} {props.l_name}</h2> 
<h2>Phone: {props.phone}</h2>
<h2>Date: {props.date}</h2>
<h2>Message: {props.message}</h2>
           */}







// import React from "react";
// import { downloadExcel } from "react-export-table-to-excel";


// const Excelexport = (props) => {
  
//   const header = ["Firstname", "Lastname"];
//   const body = [
//     ["Edison", "Padilla"],
//     ["Cheila", "Rodrigez"],
//   ];

  
//   // const body2 = [
//   //   { firstname: "Edison", lastname: "Padilla", age: 14 },
//   //   { firstname: "Cheila", lastname: "Rodrigez", age: 56 },
//   // ];

//   function handleDownloadExcel() {
//     downloadExcel({
//       fileName: "data -> downloadExcel method",
//       sheet: "react-export-table-to-excel",
//       tablePayload: {
//         header,
//         // body: body || body2,
//       },
//     });
//   }

//   return (
//     <div> <button onClick={handleDownloadExcel}>download excel</button>

//     <table>
//       <tbody>
//         <tr>
//           {header.map((head) => (
//             <th key={head}> {head} </th>
//           ))}
//         </tr>

//         {body.map((item, i) => (
//           <tr key={i}>
//             {item.map((it) => (
//               <td key={it}>{it}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
//   );
// };

// export default Excelexport




   
