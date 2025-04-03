import { useEffect } from 'react'

/*
 * @name useScrollToHash
 * @description CUSTOM HOOK TO HANDLE SMOOTH SCROLLING TO URL HASH SECTIONS
 * @param {Object} options CONFIGURATION OPTIONS FOR THE SCROLL BEHAVIOR
 * @param {number} options.delay DELAY IN MS BEFORE SCROLLING (DEFAULT: 100)
 * @param {ScrollBehavior} options.behavior SCROLL BEHAVIOR (DEFAULT: 'smooth')
 * @param {ScrollLogicalPosition} options.block VERTICAL ALIGNMENT (DEFAULT: 'start')
 * @param {boolean} options.listenToHashChange WHETHER TO LISTEN FOR HASH CHANGES (DEFAULT: true)
 * @returns {undefined}
 */
const useScrollToHash = ({
  delay = 100,
  behavior = 'smooth',
  block = 'start',
  listenToHashChange = true,
} = {}) => {
  useEffect(() => {
    /*
     * @name scrollToSection
     * @description SCROLLS TO THE SECTION SPECIFIED IN THE URL HASH
     * @returns {undefined}
     */
    const scrollToSection = () => {
      // GET THE HASH FROM URL (e.g., #feature)
      const hash = window.location.hash

      if (hash) {
        // REMOVE THE # FROM THE HASH
        const sectionId = hash.replace('#', '')

        // FIND THE ELEMENT WITH THAT ID
        const element = document.getElementById(sectionId)

        if (element) {
          // ADD A DELAY TO ENSURE DOM IS FULLY LOADED
          setTimeout(() => {
            element.scrollIntoView({
              behavior,
              block,
            })
          }, delay)
        }
      }
    }

    // HANDLE INITIAL LOAD
    scrollToSection()

    // LISTEN FOR HASH CHANGES IF ENABLED
    if (listenToHashChange) {
      window.addEventListener('hashchange', scrollToSection)

      // CLEANUP
      return () => {
        window.removeEventListener('hashchange', scrollToSection)
      }
    }
  }, [delay, behavior, block, listenToHashChange]) // DEPENDENCIES ARRAY
}

export default useScrollToHash
