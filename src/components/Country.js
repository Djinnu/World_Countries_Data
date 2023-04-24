import React from 'react'
import Card from '@mui/material/Card';

const Country = ({country}) => {
  let lanArr = []
  for(const lang in country.languages) {
    lanArr.push(country.languages[lang])
  }
  let formattedLang = lanArr.join(', ')

  const curArr = []
  for(const cur in country.currencies) {
    curArr.push(country.currencies[cur].name)
  }
  let formattedCur = curArr.join(', ')

  return (
    <div className='countryCard'>
      <Card sx={{maxWidth: '22rem', minWidth: '22rem'}} style={{padding: "2rem 2rem 1rem 2rem", height: '100%', cursor: 'pointer'}}>
          <img src={country.flags.png} alt={country.flags.alt} style={{maxWidth: "60%", margin: "auto", display: "block", boxShadow:'1px 1px 1px 1px gray'}}/>
            <h4 className='countryName' style={{margin: '2rem'}}>{country.name.common}</h4>
            <div>
              <div><span className='keys'>Capital: </span><span className='values'>{country.capital}</span></div>
              <div><span className='keys'>Languages: </span><span className='values'>{formattedLang}</span></div>
              <div><span className='keys'>Population: </span><span className='values'>{country.population}</span></div>
              <div><span className='keys'>Currency: </span><span className='values'>{formattedCur}</span></div>
            </div>
      </Card>
    </div>
  )
}

export default Country