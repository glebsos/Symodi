import PointImg from "../../../assets/icons/point.svg"
import BreadCrumbs from "./breadcrumbs/breadcrumbs"
import HeaderButtons from "./headerButtons/headerButtons"
import HeaderPostButtons from "./headerPostButtons/headerPostButtons"


function header() {
    return (
        <div className="header">
            <div className="header bg-Dark-accents w-full border-b border-Shade-of-dark text-white">
                <div className="header__left max-w-[324px] border-Shade-of-dark text-white border-r py-5 px-[22px]">
                    <div className="text-Dark-grey text-sm flex items-center justify-between">
                        <div className="left">
                            <img src={PointImg} alt="#" />
                        </div>
                        <p className="right truncate max-w-[256px]">
                            ВЛ 110 кВ Бугры - Лопасня 1 цепь с отпайкой на ПС Венюково
                        </p>
                    </div>
                </div>
            </div>
            <div className="post_header w-full bg-Dark-tone border-Shade-of-dark border-b flex items-center justify-between">
                <BreadCrumbs />
                <HeaderButtons />
            </div>

            <div className="buttons__postmd:mx-[22px] my-[22px]">
                <HeaderPostButtons />
            </div>
        </div>
    )
}

export default header