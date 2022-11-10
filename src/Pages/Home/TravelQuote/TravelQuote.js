import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

export default function TravelQuote() {
    return (
        <div>
            <p style={{textShadow: "0 1px 2px gray"}} className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-20">Some Greatest Traveler's Thoughts On Traveling</p>
            <div className="grid md:grid-cols-2 gap-4 container mx-auto mt-14 mb-20 py-10 px-10 bg-gray-200 rounded-md shadow-blue-gray-500 shadow-md">
                <div>
                    <Card className="grid lg:grid-cols-4 shadow shadow-gray-300">
                        <div className="col-span-1">
                            <CardHeader floated={false} className="">
                                <img className="min-w-[100px] min-h-[100px]" src="https://i.ibb.co/PQh7HMt/helen-keller.png" alt="" />
                            </CardHeader>
                        </div>
                        <div className="col-span-3">
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Life is either a daring adventure or nothing at all
                                </Typography>
                                <Typography color="green" className="font-medium" textGradient>
                                    Helen Keller
                                </Typography>
                            </CardBody>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className="grid lg:grid-cols-4 shadow shadow-gray-300">
                        <div className="col-span-1">
                            <CardHeader floated={false} className="">
                                <img className="min-w-[100px] min-h-[100px]" src="https://i.ibb.co/82JCVHD/Chief-Seattle.png" alt="" />
                            </CardHeader>
                        </div>
                        <div className="col-span-3">
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Take only memories, leave only footprints
                                </Typography>
                                <Typography color="green" className="font-medium" textGradient>
                                    Chief Seattle
                                </Typography>
                            </CardBody>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className="grid lg:grid-cols-4 shadow shadow-gray-300">
                        <div className="col-span-1">
                            <CardHeader floated={false} className="">
                                <img className="min-w-[100px] min-h-[100px]" src="https://i.ibb.co/yNg8KCn/Ibn-Battuta.png" alt="" />
                            </CardHeader>
                        </div>
                        <div className="col-span-3">
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    The world is a book and those who do not travel read only one page
                                </Typography>
                                <Typography color="green" className="font-medium" textGradient>
                                    Saint Augustine
                                </Typography>
                            </CardBody>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className="grid lg:grid-cols-4 shadow shadow-gray-300">
                        <div className="col-span-1">
                            <CardHeader floated={false} className="">
                                <img className="min-w-[100px] min-h-[100px]" src="https://i.ibb.co/SvkXGf0/Saint-Augustine.png" alt="" />
                            </CardHeader>
                        </div>
                        <div className="col-span-3">
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Traveling it leaves you speechless, then turns you into a storyteller.
                                </Typography>
                                <Typography color="green" className="font-medium" textGradient>
                                    Ibn Battuta
                                </Typography>
                            </CardBody>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}