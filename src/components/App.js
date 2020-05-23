import React from 'react'
import { connect } from 'react-redux'

export const App = () => {
  return (
    <div>
      main app
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
