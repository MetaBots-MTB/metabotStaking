import React from 'react'
import ReactLoading from "react-loading";


interface Props {
  loading: boolean
}

const Loader: React.FC<Props> = ({ loading }) => {

  return (
    <>
      {loading ?
        <>
          {/* <ReactLoading type="balls" color="#0000FF"
            height={100} width={50} />
          <ReactLoading type="bars" color="#0000FF"
            height={100} width={50} />
          <ReactLoading type="bubbles" color="#0000FF"
            height={100} width={50} />
          <ReactLoading type="cubes" color="#0000FF"
            height={100} width={50} />
          <ReactLoading type="cylon" color="#0000FF"
            height={100} width={50} />
          <ReactLoading type="spin" color="#0000FF"
            height={100} width={50} /> */}
          <ReactLoading type="spokes" color="#0000FF"
            height={100} width={50} />
            Loading...            
          {/* <ReactLoading
            type="spinningBubbles"
            color="#0000FF"
            height={100}
            width={50} /> */}
        </> : null
      }
    </>
  )
}

export default Loader
