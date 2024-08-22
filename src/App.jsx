import { useEffect, useState } from 'react'
import './App.css'

const DATA_API_URL_FACT = 'https://catfact.ninja/fact'
const App = () => {
  const [fact, setfact] = useState('')
  const [error, setError] = useState(false)
  const [image, setImage] = useState('')

  useEffect(() => {
    fetch(DATA_API_URL_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setfact(fact)

        const firstWord = fact.split(' ')[0]
        setImage(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white`)
      })
      .catch(error => {
        console.error('Error fetching fact:', error)
        setError(true)
      })
  }, [])

  return (
    <div className='container__app'>
      <h1 className='text__title'>CatFact</h1>
      {error
        ? <p>Error en el procesos de fetching de datos. Recarga la pagina 🔄️ </p>
        : (
          <div className='container__card'>
            <p className='text__fact'>{fact}</p>
            <img className='image__cat' src={image} />
          </div>
          )}
    </div>
  )
}
export default App
