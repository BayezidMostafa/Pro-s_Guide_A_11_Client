import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function HomeService({service}) {
    console.log(service);
    const {picture, name, rating, info, Price} = service;
    return (
        <Card className="hover:shadow-gray-500 shadow-lg duration-500">
            <CardHeader floated={false} className="">
                <img className="" src={picture} alt="" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                <Typography className="font-medium" textGradient>
                    Package Starts From: ${Price}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Typography>
                    {info.slice(0, 100)}
                </Typography>
            </CardFooter>
                <Button color="green" className="w-[95%] mx-auto mb-2 text-base" variant="gradient">See Details</Button>
        </Card>
    );
}