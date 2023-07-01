import React from 'react'

type Props = {}

const LoadingState = (props: Props) => {
    return (
        <>
            <div className="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default LoadingState;