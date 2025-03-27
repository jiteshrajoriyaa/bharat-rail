import React from 'react'
import { useState } from 'react'
import { BACKEND_URL } from '../config'
import axios from 'axios'
function Station_name_to_code() {
  const [stationCodeField, setStationCodeField] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  

  const handleSubmit = async () => {
    try{
      setLoading(true)
      setError(false)
      setName("")
      const response = await axios.get(`${BACKEND_URL}/api/v1/railway/stationCodeToName/${stationCodeField}`)
      const responseCode = response.data.data.ResponseCode
      const station = response.data.data.Station.NameEn
      if(responseCode == 202){
        setName(response.data.data.Message)
      }
      else if(responseCode == 200 && station){
        setName(station)
        }
        else{
          setError(true)
        }
      setLoading(false)
    }catch(e){
      console.log("Error fetching data: ", e)
      setLoading(false)
    }
      
  }


  return (
    <div className='min-h-[60vh]'>
    <div className="md:max-w-[50vw] min-h-[calc(100vh-80vh)] bg-white m-auto flex  flex-col  items-center justify-center mt-[15vh] shadow-gray-200 shadow-xl rounded-2xl space-x-5 gap-4">

    <input type="text" 
        placeholder='Enter Station Name...'
        value={stationCodeField}
        onChange={ (e) => (setStationCodeField(e.target.value))}
        className='border-2 rounded-md h-10 px-3'
        />
        
          {name ? <div className='border-2 rounded-md h-10 px-3'>{name}</div>: ""}
          {error ? <div >No results found/Incorrect Spelling</div>:"" }

        
      <button onClick={handleSubmit} className='px-3 py-0.5 border-2 bg-amber-600 active:scale-95 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-xl font-semibold'>{loading ? "loading...." : "Search"}</button>

    </div>
    </div>
  )
}

export default Station_name_to_code