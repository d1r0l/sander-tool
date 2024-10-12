import { useState, useEffect } from 'react'
import { atSign, search } from '../../assets'

interface InputProfileProps {
  username: string
  setUsername: (username: string) => void
  fetchUserData: () => void
}

const InputProfile = ({
  username,
  setUsername,
  fetchUserData
}: InputProfileProps) => {
  const [timer, setTimer] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds (5 * 60)

  // Effect to start countdown when timer is set
  useEffect(() => {
    let countdown: number | undefined
    if (timeLeft > 0 && timer) {
      countdown = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000) // Decrease time by 1 second
    } else if (timeLeft === 0) {
      clearInterval(countdown)
      setTimer(false) // Re-enable the button when time runs out
    }
    return () => clearInterval(countdown) // Cleanup
  }, [timeLeft, timer])

  // Function to handle button click and start timer
  const handleFetch = () => {
    fetchUserData() // Call fetch function
    setTimer(true) // Start the timer
    setTimeLeft(300) // Reset the timer to 5 minutes
  }

  // Format time to MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`
  }

  return (
    <div className='flex rounded-full bg-white text-BLACK-2 w-2/3 max-sm:w-full max-w-7xl h-16 mt-9 self-center'>
      <div className='pl-3 flex justify-center items-center'>
        <img src={atSign} className='w-5 object-contain' alt='at-sign' />
      </div>
      <input
        className='rounded-l-full focus-within:outline-none px-3 text-BLACK-2 text-medium w-11/12'
        placeholder='Enter profile username here'
        type='text'
        name='profile'
        value={username}
        onChange={e => setUsername(e.target.value)}
        id='profile'
        disabled={timer} // Disable input when timer is active
      />
      <button
        onClick={handleFetch}
        className={`flex hover:bg-black/15 justify-center bg-black/10 rounded-r-full w-1/12 items-center px-2 disabled:bg-black/5`}
        disabled={username === '' || timer} // Disable if no username or timer is active
      >
        {timer ? (
          <span>{formatTime(timeLeft)}</span> // Show countdown
        ) : (
          <img src={search} className='object-contain w-7' alt='Search' />
        )}
      </button>
    </div>
  )
}

export default InputProfile
