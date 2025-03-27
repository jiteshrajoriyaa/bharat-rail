import React, { useState } from 'react'

function Live_train_status() {
  const [formValue,setFormValue] = useState('')
  const handleChange = (e) => {
      setFormValue(e.target.value)
  }

    let today_date = new Date()

    let yesterday_date = new Date()
    yesterday_date.setDate(today_date.getDate() - 1)
    yesterday_date = yesterday_date.toLocaleDateString().replace(/\//g,'-')

    let date_before_yesterday = new Date()
    date_before_yesterday.setDate(today_date.getDate() - 2)
    date_before_yesterday = date_before_yesterday.toLocaleDateString().replace(/\//g, '-');
    
    // console.log(date_before_yesterday);

    const dates = [
      yesterday_date,date_before_yesterday
    ]

    const [selectedDate, setSelectedDate] = useState(dates[0])

  return (
    <div className='min-h-[60vh]'>
    <div className="md:max-w-[50vw] min-h-[calc(100vh-80vh)] bg-white m-auto flex flex-col items-center justify-center mt-[15vh] shadow-gray-200 shadow-xl rounded-2xl space-x-5">

    <div className='flex justify-center items-center space-x-5 my-3'>
      <div>
        <input type="text" 
        placeholder='Enter Train No.'
        value={formValue}
        onChange={handleChange}
        className='border-2 rounded-md h-10 px-3'
        />
      </div>

      <div>
        <select className='border-2 rounded-md h-10 hover:cursor-pointer'
        value={selectedDate}
        onChange={ (e) => (setSelectedDate(e.target.value))}>
          {dates.map( (date,index) => (
            <option value={date} key={index} >
              {date}
            </option>
          ))}
        </select>
      </div>
    </div>

        <div>
      <button className='px-3 py-0.5 border-2 bg-amber-600 active:scale-95 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-xl font-semibold'>Search</button>
      </div>
    </div>
    </div>
  )
}

export default Live_train_status