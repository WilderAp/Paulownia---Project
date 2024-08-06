import { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const ScrollToTop = () => {
  const [scrolled, setScrolled] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`btn bg-black text-white btn-icon fixed bottom-[3vh] right-[3vw] ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp />
    </button>
  )
}
export default ScrollToTop