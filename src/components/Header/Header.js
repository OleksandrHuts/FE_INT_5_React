// const navItems = [
//     {
//         title: 'Home',
//         url: 'home'
//     },
//     {
//         title: 'Game',
//         url: 'game'
//     },
//     {
//         title: 'About',
//         url: 'about'
//     }
// ]
import navItems from "./navItems";

export default function Header(props) {
    const clickHandler = (e) => {
        e.preventDefault();
        const page = e.target.getAttribute('href');
        props.setActivePage(page);
    }

    return (
        <header data-bs-theme="dark">
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <div className="row">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Album</strong>
                    </a>
                    
                    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        {
                            navItems.length && navItems.map(item => {
                                return (
                                    <a  key={item.url}
                                        onClick={(event) => clickHandler(event)}
                                        className="me-3 py-2 link-body-emphasis text-decoration-none"
                                        href={item.url}>{item.title}</a>
                                )
                            })
                        }
                    </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}