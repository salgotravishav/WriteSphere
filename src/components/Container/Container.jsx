import PropTypes from "prop-types"
const Container = ({children}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {children}
    </div>
  )
}

Container.propTypes = {
    children:PropTypes.any
}

export default Container
