import React from 'react';
import UseTitle from './../customHooks/UseTitle';

const Blog = () => {
    UseTitle('Blog');
    return (
        <section>
            <div className="container mx-auto flex flex-col justify-center items-center overflow-x-auto w-full my-20">
                <h1 className="text-3xl text-primary font-bold mb-10 text-center">Welcome To Blog</h1>
                <div className="w-full">
                    <div className="mockup-code mb-4">
                        <pre data-prefix="?"><code>Question: Difference Between SQL and NoSQL?</code></pre> 
                        <pre data-prefix=">" className="text-warning"><code>Answer:</code></pre> 
                        <pre data-prefix=">" className="text-success"><code>SQL is the programming language used to interface with relational databases.</code></pre><pre data-prefix=">" className="text-success"><code>(Relational databases model data as records in rows and tables with logical links between them). </code></pre><pre data-prefix=">" className="text-success"><code>NoSQL is a class of DBMs that are non-relational and generally do not use SQL.

                        </code></pre><pre data-prefix=">" className="text-success"><code>There are five practical differences between SQL and NoSQL:</code></pre><pre data-prefix=">" className="text-success"><code>
                        1. Language</code></pre><pre data-prefix=">" className="text-success"><code>
                        2. Scalability</code></pre><pre data-prefix=">" className="text-success"><code>
                        3. Structure</code></pre><pre data-prefix=">" className="text-success"><code>
                        4. Properties</code></pre><pre data-prefix=">" className="text-success"><code>
                        5. Support and communities</code></pre>
                    </div>
                    <div className="mockup-code mb-4">
                        <pre data-prefix="?"><code>Question: What is JWT, and how does it work?</code></pre> 
                        <pre data-prefix=">" className="text-warning"><code>Answer:</code></pre> 
                        <pre data-prefix=">" className="text-success"><code>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting </code></pre><pre data-prefix=">" className="text-success"><code>information between parties as JSON object. It is compact, readable and digitally signed </code></pre><pre data-prefix=">" className="text-success"><code>using a private key/ or a public key pair by the Identity Provider(IdP)</code></pre>
                    </div>
                    <div className="mockup-code mb-4">
                        <pre data-prefix="?"><code>Question: What is the difference between javascript and NodeJS?</code></pre> 
                        <pre data-prefix=">" className="text-warning"><code>Answer:</code></pre> 
                        <pre data-prefix=">" className="text-success"><code>JavaScript is a simple programming language that can be used with any browser that has the JavaScript</code></pre><pre data-prefix=">" className="text-success"><code>Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript</code></pre><pre data-prefix=">" className="text-success"><code>programming language.</code></pre>
                    </div>
                    <div className="mockup-code">
                        <pre data-prefix="?"><code>Question: What is JWT, and how does it work?</code></pre> 
                        <pre data-prefix=">" className="text-warning"><code>Answer:</code></pre> 
                        <pre data-prefix=">" className="text-success"><code>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven</code></pre><pre data-prefix=">" className="text-success"><code>architecture. NodeJS has its own EventLoop which is an infinite loop that receives</code></pre><pre data-prefix=">" className="text-success"><code>requests and processes them. EventLoop is the listener for the EventQueue.</code></pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;