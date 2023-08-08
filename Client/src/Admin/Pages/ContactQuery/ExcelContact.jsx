
// import { useRef } from "react";
// import { useDownloadExcel } from "react-export-table-to-excel";

// export default function ExcelContact({props}) {
//   const tableRef = useRef(null);

//   const { onDownload } = useDownloadExcel({
//     currentTableRef: tableRef.current,
//     filename: "Users table",
//     sheet: "Users"
//   });

//   return (
//     <div>
//       <button onClick={onDownload}> Export excel </button>

//       <table ref={tableRef}>
//         <tbody>
//           <tr>
//             <th>Firstname</th>
//             <th>Lastname</th>
//             <th>Age</th>
//           </tr>
//           <tr>
//                         <td className='tablename'>{props.f_name} {props.l_name}</td>
//                         <td  className='tablephone'>{props.phone}</td>
//                         <td  className='tabledate'>{props.date}</td>
//                         <td  className='tablemsg'> {props.message}</td>
//                         <td className='tabledownload'>
//                         < useDownloadExcel
//                     filename={props.f_name}
//                     sheet="users"
//                     currentTableRef={tableRef.current}
//                      >
//                    <button> ✔️ </button>
//                 </ useDownloadExcel>
//                         </td>
//                     </tr>
          
//         </tbody>
//       </table>
//     </div>
//   );
// }


import React, {useRef} from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import "./Contactquery.css"
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
                        <td className='contactname'>{props.f_name} {props.l_name}</td>
                        <td  className='contactphone'>{props.phone}</td>
                        <td  className='contactemail'>{props.email}</td>
                        <td  className='contactreq'>{props.requirement}</td>
                        <td  className='contactbudget'>{props.budget}</td>
                        <td  className='contactmsg'> {props.message}</td>
                        <td className='contactdownload'>
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

   