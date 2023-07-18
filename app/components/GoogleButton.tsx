import React from 'react'

type Props = {}

const GoogleButton = (props: Props) => {
    return (
        <button className="flex gap-8 w-[300px] bg-slate10 text-white hover:bg-[#4285f4]/80 h-[35px] items-center justify-center rounded-[4px] font-medium leading-none focus:outline-none">
            <svg height="20px" width="20px" viewBox="0 0 48 48" preserveAspectRatio="xMinYMin meet" focusable="false" aria-hidden="true">
                <title>
                    Google Logo
                </title>
                <clipPath id="g">
                    <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
                </clipPath>
                <g className="colors" clipPath="url(#g)">
                    <path fill="#FBBC05" d="M0 37V11l17 13z">
                    </path>
                    <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z">
                    </path>
                    <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z">
                    </path>
                    <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z">
                    </path>
                </g>
            </svg>
            Continue with Google
        </button>
    )
}

export default GoogleButton