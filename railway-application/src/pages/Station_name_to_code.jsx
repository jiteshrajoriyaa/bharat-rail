import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../config'


function Station_name_to_code() {
  const [stationNameField, setStationNameField] = useState('')
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async () => {
    try{
      setLoading(true)
      setError(false)
      setCode("")
      const response = await axios.get(`${BACKEND_URL}/api/v1/railway/stationNameToCode/${stationNameField}`)
      const responseCode = response.data.data.ResponseCode
      const station_code = response.data.data.Station.StationCode
      if(responseCode == 202){
        setCode(response.data.data.Message)
      }
      else if(responseCode == 200 && station_code){
      setCode(station_code)
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
    <div className="md:max-w-[50vw] min-h-[calc(100vh-80vh)] bg-white m-auto flex items-center justify-center flex-col gap-4 mt-[15vh] shadow-gray-200 shadow-xl rounded-2xl space-x-5">

    <div>
    <input type="text" 
        placeholder='Enter Station Name...'
        value={stationNameField}
        onChange={ (e) => (setStationNameField(e.target.value))}
        className='border-2 rounded-md h-10 px-3'
        />
    </div>
    {code ? <div className='border-2 rounded-md h-10 px-3'>{code}</div>: ""}
    {error ? <div >No results found/Incorrect Spelling</div>:"" }
    
    <div>
      <button onClick={handleSubmit} className='px-3 py-0.5 border-2 bg-amber-600 active:scale-95 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-xl font-semibold'>{loading ? "loading...." : "Search"}</button>
      </div>

    </div>
    </div>
  )
}

export default Station_name_to_code