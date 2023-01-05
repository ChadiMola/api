import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [id, setId] = useState(0)
  return (<>
  <div className='container p-3'>
   <div class="input-group input-group-sm mb-3" style={{width:"300px"}}>
  <input onChange={(e)=>setId(e.target.value)}  placeholder='Search by Id' type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
    <Link to={`/User/${id}`}>
        <button type="button" class="btn btn-outline-success mb-2">Get user data</button>
    </Link>
    <h5>or</h5>
    <Link to="/Users">
        <button type="button" class="btn btn-light">Get Users List</button>
    </Link>
    </div>
    </>
  )
}

export default Home