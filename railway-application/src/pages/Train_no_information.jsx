import React, { useState } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../config'

function Train_no_information() {
  const [trainNo, setTrainNo] = useState('')
  const [responseCode, setResponseCode] = useState('')
  const [trainData, setTrainData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [busy, setBusy] = useState('')


  const handleChange = (e) => {
    setTrainNo(e.target.value)

  }

  const handleSubmit = async () =>{
    setLoading(true)
    const response = await axios.get(`${BACKEND_URL}/api/v1/railway/trainInfo/${trainNo}`)
    const code = response.data.data.ResponseCode
    console.log(code)
    console.log(typeof(code))
    setResponseCode(code)
    if(responseCode == 202){
      setBusy(response.data.data.Message)
      setLoading(false)
      return;
    }
    console.log(response.data.data)
    console.log(responseCode)
    setTrainData(response.data.data)
    setLoading(false)
  }

  return (
    <div className='min-h-[60vh]'>
    <div className="md:max-w-[50vw] min-h-[calc(100vh-80vh)] bg-white m-auto flex flex-col gap-6 p-6 items-center justify-center mt-[15vh] shadow-gray-200 shadow-xl rounded-2xl">
    <div>
    <div className='flex justify-center items-center gap-5 mb-2'>
      <div>
        <input type="text" 
        placeholder='Enter Train No.'
        value={trainNo}
        onChange={handleChange}
        className='border-2 rounded-md h-10 px-3'
        />
      </div>
      <div>
      <button onClick={handleSubmit} className='px-3 py-0.5 border-2 bg-amber-600 active:scale-95 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-xl font-semibold'>{loading? "loading" : "Search"}</button>
      </div>
      </div>
     
    </div>
    {busy ? "Server is busy! Try again..." : ""}
      {(responseCode == 200 ) ? 
      <div>
         <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Train No</th>
            <th className="border border-gray-300 px-4 py-2">Train Name</th>
            <th className="border border-gray-300 px-4 py-2">Source</th>
            <th className="border border-gray-300 px-4 py-2">Destination</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">{trainData.TrainNo}</td>
            <td className="border border-gray-300 px-4 py-2">{trainData.TrainName}</td>
            <td className="border border-gray-300 px-4 py-2">
              {trainData.Source.Code} <br /> {trainData.Source.Arrival}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {trainData.Destination.Code} <br /> {trainData.Destination.Arrival}
            </td>
          </tr>
        </tbody>
        </table>
      </div> : ""}
    </div>
    </div>
  )
}

export default Train_no_information