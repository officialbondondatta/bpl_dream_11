import Logo from "../assets/logo.png"
const Nav = () => {
    return (
        <nav className="bg-red-200">
            <div className="flex justify-between container mx-auto">
                <img src={Logo} alt="" />
                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixtures</li>
                    <li>Fixtures</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;