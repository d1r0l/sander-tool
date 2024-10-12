import { motion } from 'framer-motion'
import { loadingImage } from '../assets'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-[60vh]'>
      <motion.img
        src={loadingImage}
        alt='Loading'
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className='w-24 h-24'
      />
    </div>
  )
}

export default Loading
