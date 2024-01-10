import '../components/layouts.scss'
import SideBar from './layouts/sidebar/sidebar.jsx';
import Header from './layouts/header/header.jsx'
import Magazine from './layouts/magazine/magazine.jsx';

function layouts({ children }) {

    return (
        <main className="flex font-Manrope">
            <div className="left">
                <SideBar />
            </div>
            <div className="middle w-full">
                <Header />
                {children}
            </div>
            <Magazine />
        </main>
    )
}

export default layouts;