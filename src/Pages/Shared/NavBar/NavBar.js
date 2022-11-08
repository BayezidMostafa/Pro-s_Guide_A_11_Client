import { useState, useEffect, useContext } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo/logo.png'
import { AuthContext } from "../../../Context/AuthProvider";



const NavBar = () => {
    // const {} = useContext(AuthContext)



    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="" className="flex font-semibold items-center">
                    Pages
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="" className="flex font-semibold items-center">
                    Account
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="" className="flex font-semibold items-center">
                    Blocks
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="" className="flex font-semibold items-center">
                    Docs
                </Link>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal flex items-center"
                >
                <img className="mr-5 w-10 h-10" src={logo} alt="" />
                    <Link className="text-2xl font-semibold uppercase" to='/'>Pro's Guide</Link>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <Button color="green" variant="gradient" size="lg" className="hidden lg:inline-block">
                    <Link to='/login'>Login</Link>
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Link to='/login'>
                    <Button color="green" variant="gradient" size="md" fullWidth className="mb-2">
                        Login
                    </Button></Link>
            </MobileNav>
        </Navbar>
    );
}


export default NavBar;