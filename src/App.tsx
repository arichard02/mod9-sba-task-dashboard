import { useState } from 'react'
import TaskList from './components/TaskList/TaskList'



import './App.css'


function App() {


  return (
    <>
    <h1 className='text-3xl font-bold mb-2'>My Task List</h1>
    <TaskList />

    </>
  )
}

export default App
