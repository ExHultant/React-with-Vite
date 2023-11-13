import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  return (
    <div className='flex flex-col items-center mt-20'>
      {children}
    </div>
  )
} 
