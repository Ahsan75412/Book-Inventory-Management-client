import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='container text-white'>
            <div class="card card-style mt-5 " id='blogs'>

                <div class="card-body">
                    <h3 class="card-title ">
                    Difference between javascript and nodejs:</h3>

                    <div class="card-text">
                        <h4 className='card-title'>Java-Script</h4>
                        <li>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</li>
                        <li>Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</li>
                        <li>JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome)</li>
                    </div>
                    <div class="card-text mt-4">
                        <h4 className='card-title'>Node JS</h4>
                        <li>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</li>
                        <li>It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</li>
                        <li>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</li>
                    </div>


                </div>
            </div>


            <div class="card card-style mt-5 " id='blogs'>

                <div class="card-body">
                    <h3 class="card-title">
                   When should you use nodejs and when should you use mongodb?
                   </h3>

                    <div class="card-text">
                        <h4 className='card-title'>When should i use nodejs</h4>
                        <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
                    </div>
                    <div class="card-text mt-4">
                        <h4 className='card-title'>When should i use mongodb</h4>
                        <p>SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>
                    </div>


                </div>
            </div>


            <div class="card card-style mt-5 " id='blogs'>

                <div class="card-body">
                    <h3 class="card-title">
                   Differences between sql and NoSql databases.
                   </h3>

                    <div class="card-text">
                        <h4 className='card-title'>SQL</h4>
                        <li>SQL is also pronounced as “S-Q-L” or as “See-Quel” and is primarily known to be a Relational Database</li>
                        <li>Use of SQL queries and syntax to analyse and get further data insights. Used for OLAP systems</li>
                        <li>Database, here is in table format</li>
                        <li>Schema used is pre-defined</li>
                        <li>They are scalable vertically</li>
                        <li>Examples are Sqlite, MySql, Oracle, Postgres and MS-SQL</li>
                        

                    </div>
                    <div class="card-text mt-4">
                        <h4 className='card-title'>NoSQL</h4>
                        <li>NoSQL is a distributed or Non-relational Database</li>
                        <li>Apply different types of database technologies</li>
                        <li>NoSQL databases are document based with key-value pairs and graph databases.</li>
                        <li>These are horizontally scalable</li>
                        <li>Dynamic schema is used for unstructured or disorganised data</li>
                        <li>Examples are Cassandra, MongoDB, BigTable, Redis, RavenDb, Hbase, Neo4j and CouchDb</li>
                        
                    </div>


                </div>
            </div>


            <div class="card card-style mt-5 " id='blogs'>

                <div class="card-body">
                    <h3 class="card-title">
                   What is the purpose of jwt and how does it work ?
                   </h3>

                    <div class="card-text">
                        <h4 className='card-title'>JWT(JSON Web Token)</h4>
                       <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                       A JWT is a mechanism to verify the owner of some JSON data. It's an encoded, URL-safe string that can contain an unlimited amount of data (unlike a cookie) and is cryptographically signed. When a server receives a JWT, it can guarantee the data it contains can be trusted because it's signed by the source.
                       </p>
                        
                    </div>
                


                </div>
            </div>

            <Button className='btn btn-warning text-dark mt-5 mb-5'as={Link} to="/home">Go-Home</Button>

        </div>
    );
};

export default Blogs;