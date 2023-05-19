import React from 'react'
import './Header.css'

function Header({userData, setUsers}) {
    //create state to hold country
    const[country, setCountry] = React.useState('')


    const handleInput = (e) => {
        console.log(e.target.value)
        //store the user input in state
        setCountry(e.target.value)

    }

    const showAll = () =>{
        console.log('Show All')
        //set users to userData
        setUsers(userData)
    }

    const handleSearch = () => {
        //filter data base on country
        const newUsers = userData.filter(item=>country.toLowerCase() === item.country.toLowerCase())
        console.log(newUsers)
        //change users to these values
        setUsers(newUsers)
        //clear textbox
        setCountry('')
    }

  return (
    <div className="header-container">
        <button onClick={showAll} >Show All</button>
        <div className="search-container">
            <input onChange={handleInput} type="text" placeholder='Enter Country' value={country}/>
            <button onClick={handleSearch} >Search</button>
        </div>


    </div>
  )
}

export default Header