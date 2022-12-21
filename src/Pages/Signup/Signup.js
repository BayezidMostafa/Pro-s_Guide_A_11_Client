import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hook/useTitle";

const Signup = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState()
    useTitle("SIGN UP")

    const { createUser, updateUser } = useContext(AuthContext);

    const handleFormSubmit = event => {
        setLoading(true)
        event.preventDefault()
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const fullName = firstName + ' ' + lastName;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                navigate('/')
                const user = result.user;
                updateUserInfo(fullName, url);
                setLoading(false)
                form.reset();
            })
            .catch(err => {
                setLoading(false)
                console.error(err)
                setError(err.message)
            })
    }
    const updateUserInfo = (fullName, url) => {
        const profile = {
            displayName: fullName,
            photoURL: url
        }
        updateUser(profile)


    }

    if (loading) {
        return (
            <div className='min-h-[70vh] flex justify-center items-center'>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
            </div>
        )
    }

    return (
        <Card className="mt-20 w-full sm:w-3/5 md:w-2/4 lg:w-2/5 xl:w-1/4 2xl:w-1/5 mx-auto shadow shadow-gray-500">
            <CardHeader
                variant="gradient"
                color="green"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h3" color="white">
                    Sign up
                </Typography>
            </CardHeader>
            <form onSubmit={handleFormSubmit}>
                <CardBody className="flex flex-col gap-4">
                    <Input type='name' name="firstName" label="First Name" size="lg" />
                    <Input type='name' name="lastName" label="Last Name" size="lg" />
                    <Input type='url' name="url" label="Image URL" size="lg" />
                    <Input type='email' name="email" label="Email" size="lg" />
                    <Input type='password' name="password" label="Password" size="lg" />
                    {
                        error ? <><p className="text-red-600">Email already exists</p></> : ''
                    }
                </CardBody>
                <CardFooter className="pt-0">
                    <Button type="submit" color="green" variant="gradient" fullWidth>
                        Sign up
                    </Button>
                    <p className="mt-5 text-sm">Already have an account?<Link to='/login' className="hover:underline text-green-500 font-semibold"> Sign in</Link></p>
                </CardFooter>
            </form>
        </Card>
    );
}

export default Signup;