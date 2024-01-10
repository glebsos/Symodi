import DateTime from "./dateTime/dateTime.jsx"

function magazine() {
    return (
        <div className="warning-list w-[260px] bg-Dark-accents border-l border-Shade-of-dark">
            <DateTime />
            <div className="bottom">
                <div className="bottom_top">
                    <p className="title text-base text-white font-bold p-5">Рекомендации</p>
                    <ul className="bottom_list font-Manrope">
                        <li className="bottom_item flex mb-[16px]">
                            <div className="left w-[3px] h-auto bg-Accent-Red rounded-r-lg"></div>
                            <div className="right pl-[22px]">
                                <div className="bottom_item_top flex text-Dark-grey text-[11px] gap-3">
                                    <p className="date">04.04.2024</p>
                                    <p className="time">23:06:00</p>
                                </div>
                                <div className="bottom_item_bottom flex items-center justify-start">
                                    <p className="title text-white text-sm py-3">Проверить крепление тяг.</p>
                                </div>
                            </div>
                        </li>

                        <li className="bottom_item flex mb-[16px]">
                            <div className="left w-[3px] h-auto bg-Accent-Green rounded-r-lg"></div>
                            <div className="right pl-[22px]">
                                <div className="bottom_item_top flex text-Dark-grey text-[11px] gap-3">
                                    <p className="date">04.04.2024</p>
                                    <p className="time">23:06:00</p>
                                </div>
                                <div className="bottom_item_bottom flex items-center justify-start">
                                    <p className="title text-white text-sm py-3">Проверить контакты в приводе.  </p>
                                </div>
                            </div>
                        </li>

                        <li className="bottom_item flex mb-[16px]">
                            <div className="left w-[3px] h-auto bg-Accent-Orange rounded-r-lg"></div>
                            <div className="right pl-[22px]">
                                <div className="bottom_item_top flex text-Dark-grey text-[11px] gap-3">
                                    <p className="date">04.04.2024</p>
                                    <p className="time">23:06:00</p>
                                </div>
                                <div className="bottom_item_bottom flex items-center justify-start">
                                    <p className="title text-white text-sm py-3">Проверить крепление тяг.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default magazine