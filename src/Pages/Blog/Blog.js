import { useState, Fragment } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import useTitle from "../../Hook/useTitle";

const Blog = () => {
    useTitle('BLOG')
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
        <div className="w-[90%] md:container mx-auto h-[68vh] mt-16">
            <p className="text-center text-2xl md:text-5xl font-semibold mb-10">Few Important Q&A!</p>
            <div className="border p-2 md:p-4 md:border-0 rounded-md shadow shadow-gray-500">
                <Fragment>
                    <Accordion open={open === 1} animate={customAnimation}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                            What is the Difference between SQL and NoSQL?
                        </AccordionHeader>
                        <AccordionBody className="">
                            <span className="text-base font-semibold">SQL Database:</span>
                            <br />
                            <span>
                                SQL stands for Relational Database Management System (RDBMS)
                                These databases have fixed or static or predefined schema
                                These databases are not suited for hierarchical data storage.
                                These databases are best suited for complex queries
                                Vertically Scalable
                                Follows ACID property
                                Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
                            </span>

                            <br />

                            <span className="text-base font-semibold">NoSQL Database:</span>
                            <br />
                            <span>
                                NoSQL stands for Non-relational or distributed database system.
                                They have dynamic schema
                                These databases are best suited for hierarchical data storage.
                                These databases are not so good for complex queries
                                Horizontally scalable
                                Follows CAP(consistency, availability, partition tolerance)
                                Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
                            </span>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} animate={customAnimation}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            What is JWT, How does JWT work?
                        </AccordionHeader>
                        <AccordionBody>
                            <span className="text-base">JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token's issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token. That's How it's work!</span>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} animate={customAnimation}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            What is the difference between javascript and NodeJS?
                        </AccordionHeader>
                        <AccordionBody>
                            <span>
                                Javascript is a programming language that is used for writing scripts on the website but, NodeJS is a Javascript runtime environment.
                                <br />
                                Javascript can only be run in browsers. We can run Javascript outside the browser with the help of NodeJS.
                                <br />
                                JavaScript basically used on the client side. Node JS is used on the server side.
                                <br />
                                Javascript is capable enough to add HTML and play with the DOM but, Nodejs does not have the capability to add HTML tags.
                                <br />
                                Some of the javascript frameworks are Angular, Vue.js, etc. Some of the Nodejs frameworks are Express.js, Next.js, etc.
                            </span>

                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} animate={customAnimation}>
                        <AccordionHeader onClick={() => handleOpen(4)}>
                            How does NodeJS handle multiple requests at the same time?
                        </AccordionHeader>
                        <AccordionBody>
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                            <br />
                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself.
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>
        </div>
    );
}

export default Blog;