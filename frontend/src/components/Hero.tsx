import InputProfile from './reusable/InputProfile'

interface HeroProps {
  username: string
  setUsername: (username: string) => void
  fetchUserData: () => void
}

const Hero = ({ username, setUsername, fetchUserData }: HeroProps) => {
  return (
    <div className='text-center w-full flex items-center flex-col  py-12'>
      <h1 className='head-text capitalize font-'>Get profile Data</h1>
      <InputProfile
        username={username}
        fetchUserData={fetchUserData}
        setUsername={setUsername}
      />
    </div>
  )
}

export default Hero
