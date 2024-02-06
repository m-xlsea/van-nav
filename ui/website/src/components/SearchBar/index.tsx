import {useEffect} from 'react'
import './index.css'

// import { useState } from 'react';

interface SearchBarProps {
    setSearchText: (t: string) => void
    searchString: string
}
const SearchBar = (props: SearchBarProps) => {
  const onKeyDown = (ev) => {
      const reg = /[a-zA-Z0-9]|[\u4e00-\u9fa5]/g
      if (ev.code === 'Enter' || reg.test(ev.key)) {
          const el = document.getElementById('search-bar')
      if (el) {
          el.focus()
      }
    }
  }
  useEffect(() => {
      document.addEventListener('keydown', onKeyDown)
    return () => {
        document.removeEventListener('keydown', onKeyDown)
    }
  })
  return (
    <div className="search span-3">
      <div className="search-wraper">
        <span className="search-icon">
          <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
            <path
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </span>
        <input
          id="search-bar"
          type="search"
          placeholder="温柔的好天气总是和我一样，帅的鸭皮！"
          value={props.searchString}
          onChange={(ev) => {
            const v = ev.target.value
              props.setSearchText(v)
          }}></input>
      </div>
    </div>
  )
}

export default SearchBar
