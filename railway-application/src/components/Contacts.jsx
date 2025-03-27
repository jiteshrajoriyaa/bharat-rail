import React, { useState } from 'react'
import doubt_query from '../images/doubt_query.gif' 
import {motion} from 'motion/react'

function Contacts() {
  let [formSubmitted,setFormSubmitted] = useState(false)

  const [isDragging, setIsDragging] = useState(false)
  let [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    message:''
  })
  let handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    }

  let handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formData);
    
    if(!formData.name || !formData.email || !formData.phone || !formData.message){

        alert('Please fill the Form completely.')

      return
    }

    setFormSubmitted(true)


    setTimeout( () => {
      setFormData({ name: "", email: "",phone: "", message: "" });
      setFormSubmitted(false)
    },5000)
 
  }

  return (
    <div className='bg-white flex items-center my-10 mx-10 py-5 px-5'>

      <div className='bg-white py-5 px-10 space-y-2 w-full shadow-md shadow-gray-200 rounded-md'>

      <p className='font-extrabold text-3xl'>Contact Us</p>
      <p className='text-md'>Have any Query? Let us Know!!</p>

          {
            formSubmitted?  
            <div className='bg-green-200 rounded-md h-48 flex justify-center items-center'>
              <p className='font-bold text-2xl'>✅ Thank you! We’ll get back to you soon.</p>
              </div>
            :
          
            (
              <form action="" onSubmit={handleSubmit} className='space-y-5 mt-10 ml-10'>

                <div className='flex flex-col'>

                <label className='font-bold'>Name :</label>
                <input type="text" 
                placeholder='Enter your Name...'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='border-2 rounded-md pl-1 max-w-96 h-10'
                />
                
                </div>

                <div className='flex flex-col'>
                <label className='font-bold'>Email : </label>
                <input type="email" 
                placeholder='Enter your email...'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='border-2 rounded-md pl-1 max-w-96 h-10'
                />
                
                </div>

                <div className='flex flex-col'>
                <label className='font-bold'>Phone.No : </label>
                <input type="tel" 
                placeholder='"123-456-7890"'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='border-2 rounded-md pl-1 max-w-96 h-10'
                />
                
                </div>

                <div className='flex flex-col'>
                <label className='font-bold'>Message :</label>
                <textarea type="tel" 
                placeholder="Enter Your Message"
                name='message'
                rows= {4}
                value={formData.message}
                onChange={handleChange}
                className='border-2 rounded-md pl-1 max-w-96'
                />
                
                </div>

                <div className='mx-40'>
                  <button type='submit' className='py-1 px-2  border-2 rounded-md hover:scale-110 transition-all duration-300 ease-in-out active:scale-95 hover:bg-amber-100'>
                    Submit
                  </button>
                </div>
              </form>
            )
          }
      </div >

      <motion.img src={doubt_query} alt=" doubt query image" className='hidden lg:block
      lg:size-38 lg:mx-40 lg:rounded-4xl lg:shadow-md lg:shadow-amber-50'
      drag
      dragConstraints={{
        bottom:0,
        left:0,
        right:0,
        top:0,
      }}  

      onDragStart={ () => setIsDragging(true)}
      onDragEnd={ () => setIsDragging(false)}

      // animate={{
      //   x:[0,50,50,0,0],
      //   y:[0,0,50,50,0]
      // }}

      // transition={
      //   {duration:2,repeat:Infinity}
      // }

      />
          { isDragging && <div>
            <p className='bg-gray-500 w-full h-20 mr-10 rounded-full text-2xl font-bold text-center py-3 border-2'> kisne touch kiya mc...🤬🤬</p> 
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96768393-b5ef-4ecd-b39c-6ef9c12ef61a/dgwujlt-befa6ba2-6667-48bf-87d0-cb5982327f15.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2NzY4MzkzLWI1ZWYtNGVjZC1iMzljLTZlZjljMTJlZjYxYVwvZGd3dWpsdC1iZWZhNmJhMi02NjY3LTQ4YmYtODdkMC1jYjU5ODIzMjdmMTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xDjB780iO2ez0nqDAPM_O1VnvW-smrKyqQy6Bj8DSyk"/></div>}
    </div>
  )
}

export default Contacts