import React, {useState} from 'react'

function Train_between_station() {
  const [StationTOField,setStationTOField] = useState('')
  const [StationFromField,setStationFromField] = useState('')

  return (
    <div className='min-h-[60vh]'>
    <div className="md:max-w-[50vw] min-h-[calc(100vh-80vh)] bg-white m-auto flex items-center justify-center mt-[15vh] shadow-gray-200 shadow-xl rounded-2xl space-x-5">
      
    <div className='flex flex-col md:flex-row gap-3'> 
    <div>
        <input type="text" 
        placeholder='Station From....(in Code)'
        value={StationFromField}
        onChange={ (e) => (setStationFromField(e.target.value))}
        className='border-2 rounded-md h-10 px-3'
        />
      </div>

      <div>
        <input type="text" 
        placeholder='Station To....(in Code)'
        value={StationTOField}
        onChange={ (e) => (setStationTOField(e.target.value))}
        className='border-2 rounded-md h-10 px-3'
        />
      </div>
      </div>

      <div>
      <button className='px-3 py-0.5 border-2 bg-amber-600 active:scale-95 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-xl font-semibold'>Search</button>
      </div>

    </div>
    </div>
  )
}

export default Train_between_station