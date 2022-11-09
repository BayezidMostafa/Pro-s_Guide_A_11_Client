import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

export default function HomeService({ service }) {
    console.log(service);
    const { picture, name, rating, info, Price } = service;
    return (
        <Card className="hover:shadow-gray-500 shadow-lg duration-500">
            <CardHeader floated={false} className="">
                <PhotoProvider
                    speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                >
                    <PhotoView src={picture}>
                        <img src={picture} style={{ objectFit: 'cover' }} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                <Typography className="font-medium text-gray-900" textGradient>
                    Package Starts From: ${Price}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Typography>
                    {info.slice(0, 100)}
                </Typography>
            </CardFooter>
            <Button color="green" className="w-[95%] mx-auto mb-2 text-base" variant="gradient">See Details</Button>
        </Card >
    );
}