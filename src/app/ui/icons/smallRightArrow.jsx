import * as React from "react"
const SmallRightArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={800}
    // height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
    //   stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 12h10m0 0-4-4m4 4-4 4"
    />
  </svg>
)
export default SmallRightArrow
