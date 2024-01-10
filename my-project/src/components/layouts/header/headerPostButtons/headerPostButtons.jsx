function headerPostButtons() {
    return (
        <div className="header__post">
            <div className="container">
                <div className="header__post_container flex flex-wrap justify-start gap-2.5 max-w-6xl">
                    <button className="button px-[20px] py-[10px] bg-Dark-accents w-fit rounded font-Manrope text-white cursor-pointer text-sm hover:bg-Blue transition-colors">Общие показатели</button>
                    <button className="button px-[20px] py-[10px] bg-Dark-accents w-fit rounded font-Manrope text-white cursor-pointer text-sm hover:bg-Blue transition-colors">Выключатель</button>
                    <button className="button px-[20px] py-[10px] bg-Dark-accents w-fit rounded font-Manrope text-white cursor-pointer text-sm hover:bg-Blue transition-colors">Показания с монометров разъеденителя</button>
                    <button className="button px-[20px] py-[10px] bg-Dark-accents w-fit rounded font-Manrope text-white cursor-pointer text-sm hover:bg-Blue transition-colors">Разъеденитель/Заземлитель</button>
                    <button className="button px-[20px] py-[10px] bg-Dark-accents w-fit rounded font-Manrope text-white cursor-pointer text-sm hover:bg-Blue transition-colors">Заземлитель сборных шин</button>
                    <button className="button px-[20px] py-[10px] bg-Dark-accents w-fit rounded font-Manrope text-white cursor-pointer text-sm hover:bg-Blue transition-colors">Вторичные цепи</button>
                    <button className="button px-[20px] py-[10px] bg-Dark-accents w-fit rounded font-Manrope text-white cursor-pointer text-sm hover:bg-Blue transition-colors">Экспериментальное</button>
                </div>
            </div>
        </div>
    )
}

export default headerPostButtons