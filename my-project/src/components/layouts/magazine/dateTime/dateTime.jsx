import CalendarImg from "../../../../assets/icons/calendar.svg"


function DateTime() {
    return (
        <div className="top border-Shade-of-dark border-b p-5 flex items-center justify-between">
        <div className="top__left flex items-center justify-between max-w-[121px] w-full">
            <div className="left">
                <img src={CalendarImg} alt="#" />
            </div>

            <div className="right text-white font-bold text-base leading-none">
                01.01.2024
            </div>
        </div>
        <div className="top__right text-white font-bold text-base leading-none">
            15:30
        </div>
    </div>
    )
}

export default DateTime