import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";

export default function Login() {
    return (
        <Card className="mt-20 w-full sm:w-3/5 md:w-2/4 lg:w-2/5 xl:w-1/4 2xl:w-1/5 mx-auto">
            <CardHeader
                variant="gradient"
                color="green"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h3" color="white">
                    Sign In
                </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
                <Input label="Email" size="lg" />
                <Input label="Password" size="lg" />
                <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button color="green" variant="gradient" fullWidth>
                    Sign In
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                    Don't have an account?
                    <Typography
                        as="a"
                        href="#signup"
                        variant="small"
                        color="blue"
                        className="ml-1 font-bold"
                    >
                        Sign up
                    </Typography>
                </Typography>
            </CardFooter>
        </Card>
    );
}