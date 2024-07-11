import './App.css'

function App() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <a href="#" className="logo-link">Codeid</a>
                </div>
                <nav className="menu">
                    <ul className="menu-list">
                        <li className="menu-list">
                            <img src="../src/assets/home.svg" alt="Home" className="menu-list__icon-active menu-list_home" href="#" />
                        </li>
                        <li className="menu-list">
                            <img src="src/assets/posts.svg" alt="Posts" className="menu-list__icon menu-list_posts" href="#" />
                        </li>
                        <li className="menu-list">
                            <img src="src/assets/likes.svg" alt="Posts" className="menu-list__icon menu-list_likes" href="#" />
                        </li>
                        <li className="menu-list">
                            <img src="src/assets/favorites.svg" alt="Posts" className="menu-list__icon menu-list_favorites" href="#" />
                        </li>
                        <li className="menu-list">
                            <img src="src/assets/user.svg" alt="User" className="menu-list__icon menu-list_user" href="#" />
                        </li>
                        <hr className="header-hr" />
                        <li className="menu-list">
                            <img src="src/assets/settings.svg" alt="Settings" className="menu-list__icon menu-list_settings" href="#" />
                        </li>
                    </ul>
                </nav>
                <div className="logout">
                    <img src="src/assets/logout.svg" alt="Logout" className="menu-list__icon logout-icon" href="#" />
                </div>

            </header>

            <div className="content">

                <div className="content-header">
                    <div className="content-header__search">
                        <input type="search" name="Search" id="search" placeholder="Search..." />
                    </div>
                    <div className="content-header__user-icons">
                        <div className="header-icons header-notification">
                            <img className="header-icon" src="src/assets/notification.svg" alt="header-notification" />
                        </div>
                        <div className="header-icons header-mail">
                            <img className="header-icon" src="src/assets/mail.svg" alt="header-mail" />
                        </div>
                        <div className="header-icons header-user_icon">
                            <img className="header-icon" src="src/assets/user.svg" alt="header-user_icon" />
                            <img className="user-status" src="src/assets/user-status.svg" alt="user-status" />
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default App
