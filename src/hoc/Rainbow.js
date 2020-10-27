import React from 'react'

const Rainbow = (WrappedComponenet) => {
    const colours=['red','pink','orange','blue','green','yellow']
    const randomColor=colours[Math.floor((Math.random()*6))]
    const className=randomColor+"-text"
    return (props) => (
        <div className={className}>
            <WrappedComponenet {...props}/>
        </div>
    )
}
export default Rainbow