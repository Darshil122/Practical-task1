import React, { useState } from 'react'

const home = () => {
  const data = JSON.parse(localStorage.getItem("userData"));
  console.log(data);
  return (
    <div>
      {data.map((item, ind) =>
            <div key={ind}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
            </div>
    )}
    </div>
  )
}

export default home
