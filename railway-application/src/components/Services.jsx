import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import coverPhoto from '../images/cover-photo.jpg'
import { motion } from 'motion/react'
function Services() {
  const navigate = useNavigate()


  return (
    <div className='bg-white mt-15 mx-5 flex-row'>

      <div className='flex justify-center '>
        <marquee behavior="alternate" direction="right">
          <p className='text-4xl font-serif font-bold bg-gradient-to-br from-red-500 to-orange-400 bg-clip-text text-transparent'>"Services Offered"</p>
        </marquee>

      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5 md:px-10 py-10 mt-10'>

        <motion.div className='bg-white shadow-lg shadow-gray-200 h-[40vh] w-full rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 
                flex-col font-serif font-bold hover:cursor-pointer '
          onClick={() => (navigate('/LiveTrainStatus'))}
        >
          <div className="h-[80%] w-full">
            <img
              src={coverPhoto}
              alt="Live Train Status"
              className="h-full w-full object-cover"
            />
          </div>
          <p className='h-[20%] w-full text-center bg-gray-100 p-2 text-xl '>Live Train Status</p>
        </motion.div>

        <motion.div className='bg-white shadow-lg shadow-gray-200 h-[40vh] w-full rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 
                flex-col font-serif font-bold hover:cursor-pointer'
          onClick={() => (navigate('/TrainNoInformation'))}

        >
          <div className="h-[80%] w-full">
            <img
              src={coverPhoto}
              alt="Live Train Status"
              className="h-full w-full object-cover"
            />
          </div>
          <p className='h-[20%] w-full text-center bg-gray-100 p-2 text-xl '>Train Information</p>
        </motion.div>

        <motion.div className='bg-white shadow-lg shadow-gray-200 h-[40vh] w-full rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 
                flex-col font-serif font-bold hover:cursor-pointer'
          onClick={() => (navigate('/TrainFare'))}

        >
          <div className="h-[80%] w-full ">
            <img
              src={coverPhoto}
              alt="Live Train Status"
              className="h-full w-full object-cover"
            />
          </div>
          <p className='h-[20%] w-full text-center bg-gray-100 p-2 text-xl '>Train Fare</p>
        </motion.div>

        <motion.div className='bg-white shadow-lg shadow-gray-200 h-[40vh] w-full rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 
                flex-col font-serif font-bold hover:cursor-pointer'
          onClick={() => (navigate('/StationNameToCode'))}

        >
          <div className="h-[80%] w-full">
            <img
              src={coverPhoto}
              alt="Live Train Status"
              className="h-full w-full object-cover"
            />
          </div>
          <p className='h-[20%] w-full text-center bg-gray-100 p-2 text-xl '>Station Name to Code</p>
        </motion.div>

        <motion.div className='bg-white shadow-lg shadow-gray-200 h-[40vh] w-full rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 
                flex-col font-serif font-bold hover:cursor-pointer'
          onClick={() => (navigate('/StationCodeToName'))}
          
        >
          <div className="h-[80%] w-full">
            <img
              src={coverPhoto}
              alt="Live Train Status"
              className="h-full w-full object-cover"
            />
          </div>
          <p className='h-[20%] w-full text-center bg-gray-100 p-2 text-xl '>Station Code to Name</p>
        </motion.div>

        <motion.div className='bg-white shadow-lg shadow-gray-200 h-[40vh] w-full rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 
                flex-col font-serif font-bold hover:cursor-pointer'
          onClick={() => (navigate('/TrainSchedule'))}
          
        >
          <div className="h-[80%] w-full">
            <img
              src={coverPhoto}
              alt="Live Train Status"
              className="h-full w-full object-cover"
            />
          </div>
          <p className='h-[20%] w-full text-center bg-gray-100 p-2 text-xl '>Train Schedule</p>
        </motion.div>

        <motion.div className='bg-white shadow-lg shadow-gray-200 h-[40vh] w-full rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 
                flex-col font-serif font-bold hover:cursor-pointer'
          
        >
          <div className="h-[80%] w-full">
            <img
              src={coverPhoto}
              alt="Live Train Status"
              className="h-full w-full object-cover"
            />
          </div>
          <p className='h-[20%] w-full text-center bg-gray-100 p-2 text-xl '>Train No. to Name</p>
        </motion.div>

        <motion.div className='bg-white shadow-lg shadow-gray-200 h-[40vh] w-full rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 
                flex-col font-serif font-bold hover:cursor-pointer'
          
        >
          <div className="h-[80%] w-full">
            <img
              src={coverPhoto}
              alt="Live Train Status"
              className="h-full w-full object-cover"
            />
          </div>
          <p className='h-[20%] w-full text-center bg-gray-100 p-2 text-xl '>Train Name to No.</p>
        </motion.div>

        <motion.div className='bg-white shadow-lg shadow-gray-200 h-[40vh] w-full rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 
                flex-col font-serif font-bold hover:cursor-pointer'
          onClick={() => (navigate('/CancelledTrain'))}
          
        >
          <div className="h-[80%] w-full">
            <img
              src={coverPhoto}
              alt="Live Train Status"
              className="h-full w-full object-cover"
            />
          </div>
          <p className='h-[20%] w-full text-center bg-gray-100 p-2 text-xl '>Cancelled Train</p>
        </motion.div>

        <motion.div className='bg-white shadow-lg shadow-gray-200 h-[40vh] w-full rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 
                flex-col font-serif font-bold hover:cursor-pointer'
          onClick={() => (navigate('/TrainBetweenStation'))}
          
        >
          <div className="h-[80%] w-full">
            <img
              src={coverPhoto}
              alt="Live Train Status"
              className="h-full w-full object-cover"
            />
          </div>
          <p className='h-[20%] w-full text-center bg-gray-100 p-2 text-xl '>Train Between Station</p>
        </motion.div>

      </div>

    </div>

  )
}

export default Services