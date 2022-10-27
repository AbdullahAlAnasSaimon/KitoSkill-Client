import React from 'react';

const Blog = () => {
  return (
    <div className='w-11/12 md:w-8/12 mx-auto'>
      <div tabIndex={0} className="collapse collapse-arrow border-2 border-indigo-300 bg-base-100 rounded-md my-3">
        <div className="collapse-title text-xl font-medium">
        What is CORS?
        </div>
        <div className="collapse-content">
          <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border-2 border-indigo-300 bg-base-100 rounded-md my-3">
        <div className="collapse-title text-xl font-medium">
        Why are you using Firebase? What other options do you have to implement authentication?
        </div>
        <div className="collapse-content">
          <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
          <p>-- Use these 6 user authentication types to secure networks</p>
          <p>1. Password-based authentication</p>
          <p>2. Two-factor/multifactor authentication</p>
          <p>3. Biometric authentication</p>
          <p>4. Single sign-on</p>
          <p>5. Token-based authentication</p>
          <p>6. Certificate-based authentication</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border-2 border-indigo-300 bg-base-100 rounded-md my-3">
        <div className="collapse-title text-xl font-medium">
        How does the private route work?
        </div>
        <div className="collapse-content">
          <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login. The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border-2 border-indigo-300 bg-base-100 rounded-md my-3">
        <div className="collapse-title text-xl font-medium">
        What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>
          <p>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Node.js basically works on two concept : 1. Asynchronous, 2. Non-blocking I/O</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;