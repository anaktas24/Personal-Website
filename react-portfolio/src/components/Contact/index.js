import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return(
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
        </div>
        <div className='contact-form'>
          <ul>
            <li className='half'>
              <input type='text' name='name' placeholder='Name' required/>
            </li>
            <li className='half'>
              <input type='email' name='email' placeholder='Email' required/>
            </li>
            <li>
              <input type='text' name='subject' placeholder='Subject' required/>
            </li>
            <li>
              <textarea placeholder='Message' name='message' required> </textarea>
            </li>
            <li>
              <input type='submit' className='flat-button' value='SEND'/>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
