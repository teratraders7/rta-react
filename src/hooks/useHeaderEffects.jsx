import { useEffect } from 'react';

const useHeaderEffects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const headerRTA = document.querySelector('.headerRTA');
      if (headerRTA) {
        const menuChild = headerRTA.querySelector('.menuChild');
        if (window.pageYOffset > 100) {
          menuChild.classList.add('fixed');
        } else {
          menuChild.classList.remove('fixed');
        }
      }
    };

    const resizeHeader = () => {
      // Add logic to resize the header here
    };

    const handleMouseOver = () => {
      document.querySelector('.overflow').style.display = 'block';
    };

    const handleMouseOut = () => {
      document.querySelector('.overflow').style.display = 'none';
    };

    // Attach event listeners
    window.addEventListener('scroll', handleScroll);
    document.querySelectorAll('.headerRTA .menuChild .hide-mobile > li').forEach(item => {
      item.addEventListener('mouseover', handleMouseOver);
      item.addEventListener('mouseout', handleMouseOut);
    });

    // Call resizeHeader function
    resizeHeader();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('.headerRTA .menuChild .hide-mobile > li').forEach(item => {
        item.removeEventListener('mouseover', handleMouseOver);
        item.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []); // Empty dependency array to run the effect only once on component mount
};

export default useHeaderEffects;
