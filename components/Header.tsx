'use client'

import React, { ChangeEvent } from 'react'
import { Search, Gavel } from 'lucide-react'

interface HeaderProps {
  onSearchChange: (term: string) => void
}

const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onSearchChange(e.target.value)
  }

  const handleTitleClick = (): void => {
    onSearchChange('')
  }

  return (
    <header>
      <div className='app-title' onClick={handleTitleClick}>
        <p className='title'>Film Judge</p>
        <Gavel size={48} className='gavel-icon' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='search-form'>
        <div className='search-container'>
          <input
            className='search-field'
            type='text'
            onChange={handleInputChange}
            placeholder='Search Movies'
          />
          <button type='submit' className='search-button'>
            <Search size={20} />
          </button>
        </div>
      </form>
    </header>
  )
}

export default Header
