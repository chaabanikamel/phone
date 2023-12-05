import React from 'react'

function form() {
  return (
    <>
    
    <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChangeInput}
        />
    </>
  )
}

export default form