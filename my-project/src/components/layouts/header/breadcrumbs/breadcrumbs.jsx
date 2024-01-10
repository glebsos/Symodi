import HomeImg from "../../../../assets/icons/home.svg"


function breadcrumbs() {
    return (
        <div className="breadcrumbs font-Manrope">
            <ul className="list flex text-white">
                <li className="item flex p-5 items-center">
                    <img src={HomeImg} alt="#" />
                    <p className="font-bold text-sm pl-3">Схема подстанции</p>
                </li>

                <li className="item flex p-5 items-center text-Shade-of-dark">
                    /
                </li>
                <li className="item flex p-5 items-center">
                    <img src={HomeImg} alt="#" />
                    <p className="font-bold text-sm pl-3">КРУЭ-10</p>
                </li>
            </ul>
        </div>
    )
}

export default breadcrumbs