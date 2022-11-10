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
    const { user, userLogOut } = useContext(AuthContext)

    const handleSignOut = () => {
        userLogOut()
            .then()
            .catch(err => console.error(err));
    }

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
                variant="h6"
                color="black"
                className="p-1 font-normal hover:text-green-500 duration-150"
            >
                <Link to="/" className="flex font-semibold items-center">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="h6"
                color="black"
                className="p-1 font-normal hover:text-green-500 duration-150"
            >
                <Link to="/services" className="flex font-semibold items-center">
                    Services
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="h6"
                color="black"
                className="p-1 font-normal hover:text-green-500 duration-150"
            >
                <Link to="/blog" className="flex font-semibold items-center">
                    Blog
                </Link>
            </Typography>
            {
                user?.uid ?
                    <>
                        <Typography
                            as="li"
                            variant="h6"
                            color="black"
                            className="p-1 font-normal hover:text-green-500 duration-150"
                        >
                            <Link to="/myreviews" className="flex font-semibold items-center">
                                My Reviews
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            variant="h6"
                            color="black"
                            className="p-1 font-normal hover:text-green-500 duration-150"
                        >
                            <Link to="/addservice" className="flex font-semibold items-center">
                                Add Service
                            </Link>
                        </Typography>
                    </>
                    :
                    <></>
            }
        </ul>
    );

    return (
        <Navbar className="mx-auto py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >

                    <Link className="text-2xl font-extrabold uppercase flex items-center" to='/'><img className="mr-5 w-10 h-10" src={logo} alt="" /><span className="hover:text-green-700 duration-300 hover:mr-2">Pro's </span>Guide</Link>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                {
                    user?.uid ?
                        <>
                            <Button onClick={handleSignOut} color="green" variant="gradient" size="lg" className="hidden lg:inline-block">
                                <Link to='/login'>Sign out</Link>
                            </Button>
                        </>
                        :
                        <>
                            <Link to='/login'>
                                <Button color="green" variant="gradient" size="lg" className="hidden lg:inline-block">
                                    Sign in
                                </Button>
                            </Link>
                        </>
                }
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
                {
                    user?.uid ?
                        <>
                            <Link to='/login'>
                                <Button onClick={handleSignOut} color="green" variant="gradient" size="md" fullWidth className="mb-2">
                                    Sign out
                                </Button>
                            </Link>
                        </>
                        :
                        <>
                            <Link to='/login'>
                                <Button color="green" variant="gradient" size="md" fullWidth className="mb-2">
                                    Sign in
                                </Button>
                            </Link>
                        </>
                }
            </MobileNav>
        </Navbar>
    );
}


export default NavBar;