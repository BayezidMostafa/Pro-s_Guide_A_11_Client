import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
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
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don't have an account?
                        <Typography
                            variant="small"
                            color="green"
                            className="ml-1 font-bold hover:underline"
                        >
                            <Link to='/signup'>Sign up</Link>
                        </Typography>
                    </Typography>
                </CardFooter>
            </form>
        </Card>
    );
}
export default Login