import React, { useState } from 'react'

function Train_fare() {
  const category = ['GN', 'CK']
  const [categoryValue, setCategoryValue] = useState(category[0])

  const [trainNOField,setTrainNoField] = useState('')
  const [StationTOField,setStationTOField] = useState('')
  const [StationFromField,setStationFromField] = useState('')

  return (
    <div className='min-h-[60vh]'>
    <div className="md:max-w-[50vw] min-h-[calc(100vh-80vh)] bg-white m-auto flex flex-col items-center justify-center mt-[15vh] shadow-gray-200 shadow-xl rounded-2xl gap-y-3">


    <div className='flex gap-5 mt-3'>

    <div>
        <input type="text" 
        placeholder='Enter Train No.'
        value={trainNOField}
        onChange={ (e) => (setTrainNoField(e.target.value))}
        className='border-2 rounded-md h-10 px-3'
        />
      </div>

    <select 
    className='border-2 rounded-md h-10 hover:cursor-pointer'
    value={categoryValue}
    onChange={ (e) => (setCategoryValue(e.target.value))}>
      {category.map( (class_category,index) => (
      <option value={class_category} key={index}>
          {class_category}
      </option>
      ))}
    </select>

    </div>

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
      <button className='px-3 py-0.5 border-2 bg-amber-600 active:scale-95 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-xl font-semibold mb-3'>Search</button>
      </div>

    </div>
    </div>
  )
}

export default Train_fare