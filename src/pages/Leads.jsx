import React from 'react'
import "../components/tables/table.css"
import { DataTable } from '../components/tables/DataTable'

function Leads() {
  return (
    <div className=' px-10 py-6 '>
      <div className='h-screen' >

        <DataTable />
    
      </div>
    </div>
  )
}

export default Leads