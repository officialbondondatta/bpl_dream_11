import { AiFillDollarCircle } from "react-icons/ai";
import Logo from "../assets/logo.png"
const Nav = ({ coin }: { coin: number }) => {
    return (
        <nav className="bg-slate-100">
            <div className="flex justify-between container mx-auto">
                <img src={Logo} alt="" />
                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixtures</li>
                    <li>Fixtures</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <div className="flex items-center gap-2">
                    <AiFillDollarCircle className="text-2xl text-yellow-500" />
                    <p className="text-xl font-bold">{coin}</p>
                </div>
            </div>
        </nav>
    );
};

export default Nav;