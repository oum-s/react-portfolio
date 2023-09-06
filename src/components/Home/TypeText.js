import './Home.scss'
import {Typewriter} from 'react-simple-typewriter';


function TypeText() {
  return (
    <div>
      <h2 className='text-light typescript'>
        I'm a{' '}
        <span>
          <Typewriter
            loops
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['Web Developer']}
            onLoop={(loopCount) =>
              console.log(`Just completed loop ${loopCount}`)
            }
          />
        </span>
      </h2>
    </div>
  )
}
export default TypeText;