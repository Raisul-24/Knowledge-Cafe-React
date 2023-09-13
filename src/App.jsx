
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {
const [bookmarks,setBookmarks] = useState([]);
const [readingTime,setReadingTime] = useState(0);

const handleToBookMarks = blog =>{
  // console.log(blog)
  const newBookMarks = [...bookmarks,blog];
  setBookmarks(newBookMarks);
}

const handleMarkAsRead = time =>{
  //  console.log("Mark as read :",time);
  const numbersArray = parseInt(time.match(/\d+/g)); 
  
  const newReadingTime = readingTime + numbersArray;
  // console.log(newReadingTime)
  setReadingTime(newReadingTime);

  // remove the read blog from bookmark

}
  return (
    <>
    <Header></Header>
    <div className='container mx-auto md:flex max-w-7xl'>
    <Blogs
    handleMarkAsRead ={handleMarkAsRead}
    handleToBookMarks={handleToBookMarks}></Blogs>
    <Bookmarks bookmarks={bookmarks}
    readingTime ={readingTime}></Bookmarks>
    </div>
    
    
    
    </>
  )
}

export default App
