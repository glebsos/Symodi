import { useState } from "react"

import ResizeImg from "../../../../assets/icons/resize.svg"

function headerButtons() {
    const [sizeValue, setSizeValue] = useState(150)

    return (
        <div className="header__buttons bg-Dark-accents border-l text-white font-Manrope border-Shade-of-dark flex items-center">
            <div className="header__changer px-[29px] py-[10px] flex">
                <div className="rounded-l-md bg-Dark-tone flex justify-center items-center px-[12px] cursor-pointer" onClick={() => setSizeValue(sizeValue - 15)}>
                    <p className="font-Manrope">-</p>
                </div>
                <input
                    type="text"
                    value={`${sizeValue} %`}
                    onChange={event => setSizeValue(event.target.value)}
                    className="bg-Dark-tone outline-none w-[69px] py-[9px] flex justify-center items-center text-center"
                    readOnly={true}
                />
                <div className="rounded-r-md bg-Dark-tone flex justify-center items-center px-[12px] cursor-pointer" onClick={() => setSizeValue(sizeValue + 15)}>
                    <p className="font-Manrope">+</p>
                </div>

                <div className="rounded-md bg-Dark-tone flex justify-center items-center px-[12px] ml-[10px] cursor-pointer">
                    <img src={ResizeImg} alt="#" />
                </div>
            </div>
            <div className="header__buttons flex">
                <div className="header__btn p-[22px] border-l border-Shade-of-dark hover:bg-Blue transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M9.3335 2.07411C9.3335 1.66501 9.66514 1.33337 10.0742 1.33337H13.9261C14.3352 1.33337 14.6668 1.66501 14.6668 2.07411V5.92597C14.6668 6.33507 14.3352 6.66671 13.9261 6.66671H10.0742C9.66514 6.66671 9.3335 6.33507 9.3335 5.92597V2.07411Z" fill="white" />
                        <path d="M1.3335 2.07411C1.3335 1.66501 1.66514 1.33337 2.07424 1.33337H5.92609C6.33519 1.33337 6.66683 1.66501 6.66683 2.07411V5.92597C6.66683 6.33507 6.33519 6.66671 5.92609 6.66671H2.07424C1.66514 6.66671 1.3335 6.33507 1.3335 5.92597V2.07411Z" fill="white" />
                        <path d="M1.33349 13.8889C1.33349 13.5821 1.57249 13.3334 1.86731 13.3334H14.133C14.4278 13.3334 14.6668 13.5821 14.6668 13.8889V14.1112C14.6668 14.418 14.4278 14.6667 14.133 14.6667H1.86731C1.57249 14.6667 1.33349 14.418 1.33349 14.1112V13.8889Z" fill="white" />
                        <path d="M1.33349 10.5556C1.33349 10.2487 1.57249 10 1.86731 10H14.133C14.4278 10 14.6668 10.2487 14.6668 10.5556V10.7778C14.6668 11.0846 14.4278 11.3333 14.133 11.3333H1.86731C1.57249 11.3333 1.33349 11.0846 1.33349 10.7778V10.5556Z" fill="white" />
                        <path d="M12.1109 7.35461C12.4178 7.35461 12.6665 7.60334 12.6665 7.91017L12.6665 10.6666C12.6665 10.9735 12.4178 11.2222 12.1109 11.2222L11.8887 11.2222C11.5819 11.2222 11.3332 10.9735 11.3332 10.6666L11.3332 7.91017C11.3332 7.60334 11.5819 7.35461 11.8887 7.35461L12.1109 7.35461Z" fill="white" />
                        <path d="M4.11095 7.35461C4.41777 7.35461 4.6665 7.60334 4.6665 7.91017L4.6665 13.7814C4.6665 14.0883 4.41777 14.337 4.11095 14.337L3.88873 14.337C3.5819 14.337 3.33317 14.0883 3.33317 13.7814L3.33317 7.91017C3.33317 7.60334 3.5819 7.35461 3.88872 7.35461L4.11095 7.35461Z" fill="white" />
                    </svg>
                </div>
                <div className="header__btn p-[22px] border-l border-Shade-of-dark hover:bg-Blue transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="1.3335" y="2" width="2.66667" height="2.66667" rx="1" fill="white" />
                        <rect x="1.3335" y="6.66663" width="2.66667" height="2.66667" rx="1" fill="white" />
                        <rect x="1.3335" y="11.3334" width="2.66667" height="2.66667" rx="1" fill="white" />
                        <rect x="5.3335" y="2" width="9.33333" height="2.66667" rx="1" fill="white" />
                        <rect x="5.3335" y="6.66663" width="9.33333" height="2.66667" rx="1" fill="white" />
                        <rect x="5.3335" y="11.3334" width="9.33333" height="2.66667" rx="1" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default headerButtons