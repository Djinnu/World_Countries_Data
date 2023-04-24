import React, { useState } from 'react'
import Card from '@mui/material/Card';

const Graph = ({data}) => {
  const [option, setOption] = useState('POPULATION')
  
  const handleClick = (e) => {
    setOption(e.target.innerText)
  }

  const tenHighestPopulation = data.sort((a, b) => a.population < b.population).slice(0, 10)
  tenHighestPopulation.unshift({name:{common: "World"}, population: 7693165599})
  
  const tenMostSpokenLanguagesObj = {}

  data.forEach(country => {
    if(!country.languages) {
       return
    }
    if(Object.keys(country.languages).length !== 0) {
        let langs = Object.values(country.languages)
        langs.forEach(lang => tenMostSpokenLanguagesObj[lang] = tenMostSpokenLanguagesObj[lang] ? tenMostSpokenLanguagesObj[lang]+=1 : 1)
    }
  })
  let tenMostSpokenLanguagesArr = []

  for(const lang in tenMostSpokenLanguagesObj) {
    tenMostSpokenLanguagesArr.push([lang, tenMostSpokenLanguagesObj[lang]])
  }
 
  tenMostSpokenLanguagesArr.sort((a, b) => a[1] < b[1])
  const tenLanguages = tenMostSpokenLanguagesArr.slice(0, 10)
  
  return (
    <div>
        <div style={{textAlign: 'center'}}>
            <button className='button' onClick={handleClick}>POPULATION</button>
            <button className='button' onClick={handleClick}>LANGUAGES</button> 
        </div>
        <h4 style={{textAlign: 'center', marginBottom: "2%", fontSize:'26px', fontWeight: 400}}>10 Most {option === 'POPULATION' ? 'populated countries ' : 'spoken languages '}in the world</h4>
        <Card style={{width:'50%', margin: 'auto', padding:'3rem 5rem'}}>
            <div className='graph-container'>
                {option === "POPULATION" ? tenHighestPopulation.map(x => <>
                    <span className="country">{x.name.common}</span>
                    <div className="bar" style={{width: x.population / 7693165599 * 100 + "%"}}></div>
                    <span className="count">{x.population}</span>
                </>
                ) : tenLanguages.map(x => <>
                        <span className='country'>{x[0]}</span>
                        <div className='bar' style={{width: x[1] / 91 * 100 + "%"}}></div>
                        <span className="count">{x[1]}</span>  
                </>          
                )}
            </div>
        </Card>
    </div>
  )
}

export default Graph