import { useState } from "react"
import MenuImg from "../../../assets/icons/menu.svg"
import HomeImg from "../../../assets/icons/home.svg"
import CalendarImg from "../../../assets/icons/calendar.svg"
import CartImg from "../../../assets/icons/cart.svg"
import LibraryImg from "../../../assets/icons/library.svg"
import SettingsImg from "../../../assets/icons/settings.svg"

function sidebar() {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <div className="side-bar justify-between w-fit bg-Dark-accents border-r border-Shade-of-dark h-screen flex-col flex">
            <ul className="side-bar_top_list">
                <li onClick={() => setMenuActive(!menuActive)} className={menuActive ? 'justify-start side-bar_top_item flex active:bg-Blue text-white cursor-pointer hover:bg-Blue transition-colors border-b bg-Dark-accents border-Shade-of-dark' : 'side-bar_top_item flex active:bg-Blue text-white cursor-pointer hover:bg-Blue transition-colors border-b bg-Dark-accents border-Shade-of-dark'}>
                    <img src={MenuImg} alt="#" />
                    <p className={menuActive ? 'px-5 appearance-none visible opacity-100 transition-all font-bold text-sm w-max' : 'w-0 h-4 p-0 transition-all invisible opacity-0'}>Меню</p>
                </li>
                <li className={menuActive ? 'justify-start side-bar_top_item flex active:bg-Blue text-white cursor-pointer hover:bg-Blue transition-colors border-b bg-Dark-accents border-Shade-of-dark' : 'side-bar_top_item flex active:bg-Blue text-white cursor-pointer hover:bg-Blue transition-colors border-b bg-Dark-accents border-Shade-of-dark'}>
                    <img src={HomeImg} alt="#" />
                    <p className={menuActive ? 'px-5 appearance-none visible opacity-100 transition-all font-bold text-sm w-max' : 'w-0 h-4 p-0 transition-all invisible opacity-0'}>Схема подстации</p>
                </li>
                <li className={menuActive ? 'justify-start side-bar_top_item flex active:bg-Blue text-white cursor-pointer hover:bg-Blue transition-colors border-b bg-Dark-accents border-Shade-of-dark' : 'side-bar_top_item flex active:bg-Blue text-white cursor-pointer hover:bg-Blue transition-colors border-b bg-Dark-accents border-Shade-of-dark'}>
                    <img src={CalendarImg} alt="#" />
                    <p className={menuActive ? 'px-5 appearance-none visible opacity-100 transition-all font-bold text-sm w-max' : 'w-0 h-4 p-0 transition-all invisible opacity-0'}>Журнал событий</p>
                </li>
                <li className={menuActive ? 'justify-start side-bar_top_item flex active:bg-Blue text-white cursor-pointer hover:bg-Blue transition-colors border-b bg-Dark-accents border-Shade-of-dark' : 'side-bar_top_item flex active:bg-Blue text-white cursor-pointer hover:bg-Blue transition-colors border-b bg-Dark-accents border-Shade-of-dark'}>
                    <img src={CartImg} alt="#" />
                    <p className={menuActive ? 'px-5 appearance-none visible opacity-100 transition-all font-bold text-sm w-max' : 'w-0 h-4 p-0 transition-all invisible opacity-0'}>Пользователи</p>
                </li>
                <li className={menuActive ? 'justify-start side-bar_top_item flex active:bg-Blue text-white cursor-pointer hover:bg-Blue transition-colors border-b bg-Dark-accents border-Shade-of-dark' : 'side-bar_top_item flex active:bg-Blue text-white cursor-pointer hover:bg-Blue transition-colors border-b bg-Dark-accents border-Shade-of-dark'}>
                    <img src={LibraryImg} alt="#" />
                    <p className={menuActive ? 'px-5 appearance-none visible opacity-100 transition-all font-bold text-sm w-max' : 'w-0 h-4 p-0 transition-all invisible opacity-0'}>Пользователи</p>
                </li>
            </ul>

            <ul className="side-bar_bottom_list">
                <li className="side-bar_bottom_item text-white cursor-pointer">
                    <img src={SettingsImg} alt="#" />
                </li>
            </ul>
        </div>
    )
}

export default sidebar