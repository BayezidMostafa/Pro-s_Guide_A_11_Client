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
import { Link } from "react-router-dom";

export default function Service({ service }) {
    const { picture, serviceName, _id, info, Price } = service;
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
                    {serviceName}
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
            <Link className="text-center" to={`/services/${_id}`}><Button color="green" className="w-[95%] mx-auto mb-2 text-base" variant="gradient">See Details</Button></Link>
        </Card >
    );
}