import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Users.css'
import * as XLSX from 'xlsx';
import FileSaver from 'file-saver'

const Users = () => {

    const [data, setData] = useState()
   useEffect(()=>{
    axios.get('https://cryptofarmer-api.onrender.com/users')
    .then(res=>{
        console.log(res.data)
        setData(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
   }, [])


    function s2ab (s){
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf)
        for (let i=0; i<s.length; i++){
          view[i] = s.charCodeAt(i) & 0xFF;
        }
        return buf
      }
      
      function handlesave(){
        const worksheet = XLSX.utils.json_to_sheet(data)
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      
        const filename = 'data.xlsx'
      
        const wbout = XLSX.write(workbook, {bookType: 'xlsx', type: 'binary'});
        const blob = new Blob([s2ab(wbout)], {type: 'application/octet-stream'});
        FileSaver.saveAs(blob, filename);
      }

      
  return (
    <div className='users'>
        <button onClick={handlesave}>
            Get all users
        </button>
    </div>
  )
}

export default Users