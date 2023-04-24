import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Country from './components/Country';
import Graph from './components/Graph';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  const [data,  setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [graphic, setGraphic] = useState(false)

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase())
    setGraphic(false)
  }

  const graphHandler = () => {
    setGraphic(!graphic)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'https://restcountries.com/v3.1/all'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    } catch(error) {
      console.log(error)
    }
  }

  data.sort((a,b) => a.name.common > b.name.common)
  const filteredData = data.filter((country) => {
    if(inputText === "") {
      return country
    } else {
      let regex = '^' + inputText
      return country.name.common.toLowerCase().match(regex)
    }
  })
  
  return (
    <div className="App">
      <Header data={data}/>
      <SearchInput inputHandler={inputHandler} graphHandler={graphHandler}/>
      {graphic ? <Graph data={data}/> :
        <section style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around', rowGap: '5rem' }}>
          {filteredData.map(country => <Country country={country} key={country.name.common}/> )}
        </section>}
      <Footer/>
    </div>
  )
}


export default App