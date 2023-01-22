import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return(
    <div className='container abou-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
            strArray={['About me'].split}
            idx={15}
          />
        </h1>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className='stage-cube-content'>

      </div>
    </div>
  )
}

export default About
