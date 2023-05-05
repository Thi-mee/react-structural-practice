import React from 'react'


const footerStyle = {
  gridArea: "footer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#333",
  color: "#fff",
  borderTop: "1px solid #44f",
}

const Footer = () => {
  return (
    <footer style={footerStyle}>Footer &gt;&gt;   &copy; Timi Adenuga's Website</footer>
  )
}

export default Footer