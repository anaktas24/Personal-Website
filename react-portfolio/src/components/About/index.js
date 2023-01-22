import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {

  return(
    <div className='container abou-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            strArray={['About me'].split}
            idx={15}
          />
        </h1>
        <p></p>
        <p></p>
        <p></p>
      </div>

    </div>
  )
}

export default About
