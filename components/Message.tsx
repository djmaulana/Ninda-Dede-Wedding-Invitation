
import React, { useEffect, useState, useRef } from 'react'
import { Alex_Brush } from 'next/font/google'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { usersDummy } from '@/types'
import axios from "axios";
import { getMetrics } from '@/lib/vercel-storage'


type MetricsType = {
    greetings: String
    messages: String
}



export const revalidate = 60 // In seconds
const alex = Alex_Brush({weight:'400', preload: false})

const Message = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 2;
  const [visiblePages, setVisiblePages] = useState(2);
  const [submittedData, setSubmittedData] = useState<any[]>([]);

  const initialRender = useRef(true);
  
  useEffect(() => {
    if (!initialRender.current) {
        const fetchPets = async () => {
        const response = await fetch('/api/getMessage');
        if (response.ok) {
          const data = await response.json();
          setSubmittedData(data.pets.rows);
          setUsers(data.pets.rows)
        } else {
          console.error('Error fetching data.');
        }
      };
      fetchPets();
    }

  }, []) 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === "" || message.trim() === "") {
      alert("Name and Message are required fields.");
      return;
    }
    
    try {
        const response = await fetch('/api/postMessage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, message }),
          });
          if (response.ok) {
            // Handle success, e.g., fetch and display data
          } else {
            // Handle errors
            console.error('Error submitting the form.');
          }
    } catch (error) {
        console.error(error)
    }
     // Clear the input fields
    setName("");
    setMessage("");
    setIsConfirmed(false);
  };

  console.log(submittedData)

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = Array.from(submittedData).slice(indexOfFirstComment, indexOfLastComment);

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  
    useEffect(() => {
        if (!initialRender.current) {
            AOS.init({
              duration: 1000,
              once: false,
            })
            const totalComments = submittedData.length;
            const totalPages = Math.ceil(totalComments / commentsPerPage);
            if (totalPages < visiblePages) {
            setVisiblePages(totalPages);
            }
        }
      })
    

    useEffect(() => {
        if (!initialRender.current) {
            const totalComments = submittedData.length;
            const totalPages = Math.ceil(totalComments / commentsPerPage);
            if (totalPages < visiblePages) {
            setVisiblePages(totalPages);
            }
        }
    }, [submittedData, commentsPerPage, visiblePages]);

    // Save comments to localStorage whenever the 'submittedData' state changes
    // useEffect(() => {
    //     // Fetch and display data when the component mounts
    //     fetchPets();
    //   }, []);
    
    return (
        <div className='text-center relative'>
            <div className={alex.className}>
                <h1 className='text-[60px]' data-aos='fade-right'>Send Message</h1>
            </div>
            <p className='text-md' data-aos='zoom-in'>Give Greetings & Prayers of Blessing</p>
            <div className='w-screen h-1/2 mx-auto p-10'>
                <div className="max-w-md mx-auto p-4 border border-gray-500 bg-black rounded-[20px]">
                    <h2 className="text-center text-2xl font-normal mb-10 mt-5 text-white" data-aos='fade-in'>Message Form</h2>
                    <form className="space-y-4 text-white">
                        <div className='flex flex-row'>
                            <label className="block mr-8 text-sm" data-aos='zoom-in'>Name</label>
                            <input name='name' id='name' required data-aos='zoom-in' type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full text-black border rounded-[8PX] p-2" />
                        </div>
                        <div className='flex flex-row'>
                            <label className="block mr-3 text-sm" data-aos='zoom-in'>Message</label>
                            <textarea name='message' id='message' required data-aos='zoom-in' value={message} onChange={(e) => setMessage(e.target.value)} className="w-full text-black border rounded-[8PX] p-2"></textarea>
                        </div>
                        <div>
                        <label className="flex items-center space-x-2">
                            <input
                            type="checkbox"
                            checked={isConfirmed}
                            onChange={(e) => setIsConfirmed(e.target.checked)}
                            className="form-checkbox"
                            />
                            <span className='text-sm' data-aos='zoom-in'>Confirm Presence at the Event</span>
                        </label>
                        </div>
                        <div>
                        <button type="submit" data-aos='zoom-in' className="bg-white text-sm text-black py-1 px-2 rounded-full">Submit</button>
                        </div>
                    </form>
                    <div className="mt-6" data-aos='zoom-in'>
                        <hr className='border-1 border-gray-300 mb-5'/>
                        {currentComments.map((user: any, index: any) => (
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
            </div>
        </div>
  )
}

export default Message