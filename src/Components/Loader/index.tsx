import React from 'react'
import ReactLoading from "react-loading";

interface Props {
  loading: boolean
}

const Loader: React.FC<Props> = ({ loading }) => {

  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', zIndex: '200', transform: `translate(${-50}%, ${-50}%)` }}>
      {loading ?
        <>
          <ReactLoading type="spokes" color="#0000FF"
            height={200} width={200} />
        </> : null
      }
    </div>
  )
}

export default Loader
