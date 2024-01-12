import React ,{useState} from 'react'

const LocalStorage = () => {
    const [value, setValue] = useState(() => localStorage.getItem("") || "");

    const handleChange = (e) => {
        setValue(e.target.value)
        localStorage.setItem("" , e.target.value)
    }

  return (
    <div>
      <h1>LocalStorage</h1>
      <input value={value} onChange={handleChange}  />
    </div>
  )
}

export default LocalStorage
