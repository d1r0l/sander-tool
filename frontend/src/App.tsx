import { useState } from 'react'
import axios from 'axios'
import Hero from './components/Hero'
import Results from './components/Results'
import Loading from './components/Loading'

interface ProfileInfo {
  id: number
  follower_count: number
  following_count: number
  media_count: number
  username: string
  full_name: string
  public_email: string
  contact_phone_number: string
  profile_pic_url: string
  biography: string
  external_url: string
  category: string
  has_highlight_reels: boolean
  is_eligible_for_meta_verified_label: boolean
  is_business: boolean
  is_new_to_instagram: boolean
}

const App = () => {
  const [profileInfo, setProfileInfo] = useState<ProfileInfo | null>(null)
  const [username, setUsername] = useState('')
  const [similarProfiles, setSimilarProfiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [foundData, setFoundData] = useState(false)

  const fetchUserData = async () => {
    setLoading(true) // Start loading
    try {
      const response = await axios.get(
        `http://localhost:4000/user-info/${username}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      )
      setProfileInfo(response.data.userInfo)
      setSimilarProfiles(
        response.data.similarUsers.data.user.edge_chaining.edges.map(
          (user: { node: any }) => user.node
        )
      )
      setFoundData(true) // Data fetched successfully
      console.log('Successfully fetched the data alhamdullah')
    } catch (error) {
      console.error('Error fetching similar accounts:', error)
      setFoundData(false) // No data found
    } finally {
      setLoading(false) // Stop loading
      setUsername('')
    }
  }

  // const TestBackend = async () => {
  //   setLoading(true) // Start loading
  //   try {
  //     const response = await axios.get('http://localhost:4000/test-endpoint/', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //     })
  //     setFoundData(true) // Data fetched successfully
  //     console.log('Successfully fetched the data alhamdullah', response.data)
  //   } catch (error) {
  //     console.error('Error fetching similar accounts:', error)
  //     setFoundData(false) // No data found
  //   } finally {
  //     setLoading(false) // Stop loading
  //   }
  // }

  const userInfoData = [
    {
      title: 'Full Name',
      value: profileInfo?.full_name
    },
    {
      title: 'Has highlight reels',
      value: profileInfo?.has_highlight_reels?.toString()
    },
    {
      title: 'Is eligible for meta verified label',
      value: profileInfo?.is_eligible_for_meta_verified_label?.toString()
    },
    {
      title: 'Is business',
      value: profileInfo?.is_business?.toString()
    },
    {
      title: 'Contact phone number',
      value: profileInfo?.contact_phone_number
    },
    {
      title: 'Public email',
      value: profileInfo?.public_email
    },
    {
      title: 'Is new to instagram',
      value: profileInfo?.is_new_to_instagram?.toString()
    },
    {
      title: 'Profile Pic',
      value: profileInfo?.profile_pic_url
    },
    {
      title: 'Profile ID',
      value: profileInfo?.id
    },
    {
      title: 'Follower Count',
      value: profileInfo?.follower_count
    },
    {
      title: 'Following Count',
      value: profileInfo?.following_count
    },
    {
      title: 'Username',
      value: profileInfo?.username
    },
    {
      title: 'Media Count',
      value: profileInfo?.media_count
    },
    {
      title: 'Biography',
      value: profileInfo?.biography
    },
    {
      title: 'External URL',
      value: profileInfo?.external_url
    },
    {
      title: 'Category',
      value: profileInfo?.category
    }
  ]

  return (
    <main className='px-2 w-full overflow-y-hidden overflow-clip'>
      <Hero
        fetchUserData={fetchUserData}
        username={username}
        setUsername={setUsername}
      />
      {loading ? (
        <Loading /> // Show loading component while fetching
      ) : foundData ? (
        <div className='flex max-lg:flex-col'>
          <Results data={userInfoData} similarProfiles={similarProfiles} />
        </div>
      ) : (
        <div className='text-xl w-full h-full flex items-center justify-center'>
          <h1>Start Searching for user to get his data</h1>
        </div>
      )}
    </main>
  )
}

export default App
