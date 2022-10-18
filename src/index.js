import React from 'react'
import ReactDOM from 'react-dom/client'
import booklist from './booklist'
import { Book } from './Book'
import './index.css'

const BookList = () => {
  return (
    <section className='booklist'>
      {booklist.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
