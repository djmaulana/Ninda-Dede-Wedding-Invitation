import React, { useEffect, useState } from 'react'
import { Alex_Brush } from 'next/font/google'
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';

const alex = Alex_Brush({weight:'400', preload: false})

const Message = () => {
    const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 2;


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === "" || message.trim() === "") {
      alert("Name and Message are required fields.");
      return;
    }

    const newUser = { name, message, isConfirmed };
    setUsers([ newUser, ...users]);

    // Clear the input fields
    setName("");
    setMessage("");
    setIsConfirmed(false);
  };
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = users.slice(indexOfFirstComment, indexOfLastComment);

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  
  
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        })
      })
    return (
        <div className='text-center relative'>
            <div className={alex.className}>
                <h1 className='text-[60px]' data-aos='fade-right'>Send Message</h1>
            </div>
            <p className='text-md' data-aos='zoom-in'>Give Greetings & Prayers of Blessing</p>
            <div className='w-screen h-1/2 mx-auto p-10'>
                <div className="max-w-md mx-auto p-4 border border-gray-500 bg-black rounded-[20px]">
                <h2 className="text-center text-2xl font-normal mb-10 mt-5 text-white">Message Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4 text-white">
                    <div className='flex flex-row'>
                        <label className="block mr-8 text-sm">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full text-black border rounded-[8PX] p-2" />
                    </div>
                    <div className='flex flex-row'>
                        <label className="block mr-3 text-sm">Message</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full text-black border rounded-[8PX] p-2"></textarea>
                    </div>
                    <div>
                    <label className="flex items-center space-x-2">
                        <input
                        type="checkbox"
                        checked={isConfirmed}
                        onChange={(e) => setIsConfirmed(e.target.checked)}
                        className="form-checkbox"
                        />
                        <span className='text-sm'>Confirm Presence at the Event</span>
                    </label>
                    </div>
                    <div>
                    <button type="submit" className="bg-white text-sm text-black py-1 px-2 rounded-full">Submit</button>
                    </div>
                </form>
                <div className="mt-6">
                    <hr className='border-1 border-gray-300 mb-5'/>
                    {currentComments.map((user, index) => (
                    <div key={index} className="bg-gray-100 text-left p-4 mt-2 rounded-[10PX]">
                        <p className='text-sm'><strong>Name:</strong> {user.name}</p>
                        <p className='text-sm'><strong>Message:</strong> {user.message}</p>
                    </div>
                    ))}
                </div>
                {users.length > commentsPerPage && (
                    <div className="mt-4 flex justify-center">
                    {Array.from({ length: Math.ceil(users.length / commentsPerPage) }, (_, i) => (
                        <button key={i} onClick={() => paginate(i + 1)} className={`mx-1 p-2 ${i + 1 === currentPage ? 'bg-gray-200 rounded text-black text-sm' : 'text-sm bg-gray-200 rounded'}`}>{i + 1}</button>
                    ))}
                </div>
                )}
            </div>
                {/* <div className='bg-black px-2 py-5 opacity-9 rounded-[15px] mx-auto' data-aos='zoom-in'>
                    <h1 className='text-white mb-3 text-[18px]' data-aos='zoom-in'>Message Form</h1>
                    <div className='felx-row flex'>
                        <p className='text-white text-sm mr-9' data-aos='zoom-in'>Name</p>
                        <input type="text" data-aos='zoom-in' className='rounded-[5px] px-2'/>
                    </div>
                    <div className='felx-row flex mt-2'>
                        <p className='text-white text-sm mr-4' data-aos='zoom-in'>Message</p>
                        <input type="text" data-aos='zoom-in' className='rounded-[5px] px-2 py-4'/>
                    </div>
                    <button type='button' onClick={handleSubmit} className='text-black font-normal hover:bg-gray-300 text-sm mt-5 bg-white rounded-full px-3 py-1'>Submit</button>
                </div> */}
            </div>
        </div>
  )
}

export default Message