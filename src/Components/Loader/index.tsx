import React from 'react'
import ReactLoading from "react-loading";

interface Props {
  loading: boolean
}

const Loader: React.FC<Props> = ({ loading }) => {

  const translate = `translate(${-50}%, ${-50}%)`

  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', zIndex: '200', transform: translate }}>
      {true ? <ReactLoading type="spokes" color="#5e6eff" height={200} width={200} /> : null}
    </div>
  )
}

export default Loader
