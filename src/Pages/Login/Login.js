import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogo from '../../assets/logo/google.png'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const {providerLogin, signInUser} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider()

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result => {
            const user = result.user;
            navigate(from, {replace:true})
            form.reset();
        })
    }

    const handleGoogleLogIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            navigate(from, {replace:true})
        })
    }

    return (
        <Card className="mt-20 w-full sm:w-3/5 md:w-2/4 lg:w-2/5 xl:w-1/4 2xl:w-1/5 mx-auto shadow shadow-gray-500">
            <CardHeader
                variant="gradient"
                color="green"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h3" color="white">
                    Sign in
                </Typography>
            </CardHeader>
            <form onSubmit={handleFormSubmit}>
                <CardBody className="flex flex-col gap-4">
                    <Input name="email" type='email' label="Email" size="lg" />
                    <Input name="password" type='password' label="Password" size="lg" />
                    <span className="text-sm">Forget Password? <Link className="hover:text-green-500 hover:underline">Click here!</Link></span>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button type="submit" color="green" variant="gradient" fullWidth>
                        Sign In
                    </Button>
                    <p className="mt-5 text-sm">Don't have an account?<Link to='/signup' className="hover:underline text-green-500 font-semibold"> Sign up</Link></p>
                </CardFooter>
            </form>
            <Button onClick={handleGoogleLogIn} color="green" variant="gradient" className="mx-6 flex items-center justify-center text-base border-4 mb-5"><img className="w-10 mr-5 bg-white p-1 rounded" src={GoogleLogo} alt="" /> Sign in with Google</Button>
        </Card>
    );
}
export default Login