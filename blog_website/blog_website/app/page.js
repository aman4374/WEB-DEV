"use client"
import { Button } from "@/components/ui/button";
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';

export default function Home() {

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Machine Learning'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []); 


  return (
    <main>
    <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
          <span className="font-semibold">A free Blog Page</span> for community <br className="hidden lg:block" /> using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
        Unlock the World of Software Engineering with Expert Guidance and In-Depth Tutorials. <br className="hidden lg:block" /> Learn, Build, and Innovate!
        </p>
        <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
          <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
  
          </form>
        </div>
      </div>
      <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
      </div>
    </section>
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Blog Subscription Plans</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that fits your learning journey</p>
    </div>

    <div className="flex flex-wrap justify-center">
      {/* Free Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500 min-h-[450px]">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Free Plan</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">Free Access</p>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Starter</span>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">Access to Basic Blog Posts</li>
            <li className="text-gray-600 dark:text-gray-400">Monthly Updates</li>
            <li className="text-gray-600 dark:text-gray-400">Community Discussions</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Pro Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500 min-h-[450px]">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Pro Plan</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Most Popular</span>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">Access to Advanced Tutorials</li>
            <li className="text-gray-600 dark:text-gray-400">Weekly Code Challenges</li>
            <li className="text-gray-600 dark:text-gray-400">Exclusive Articles on C++, JS, and more</li>
            <li className="text-gray-600 dark:text-gray-400">Priority Community Support</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500 min-h-[450px]">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium Plan</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Best Value</span>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">All Pro Features</li>
            <li className="text-gray-600 dark:text-gray-400">1-on-1 Mentorship Sessions</li>
            <li className="text-gray-600 dark:text-gray-400">Access to Early Blog Content</li>
            <li className="text-gray-600 dark:text-gray-400">Priority Feature Requests</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Readers Say</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from developers and tech enthusiasts who trust us</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"This blog has been my go-to resource for learning new programming languages and techniques."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Sarah Johnson</h3>
          <p className="text-gray-500 dark:text-gray-300">Full-Stack Developer</p>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"The tutorials here are always clear and insightful, perfect for anyone wanting to level up their coding skills."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Alex Carter</h3>
          <p className="text-gray-500 dark:text-gray-300">Software Engineer</p>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"I love how this blog breaks down complex topics into digestible content. It's been a tremendous help."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Emily Davis</h3>
          <p className="text-gray-500 dark:text-gray-300">DevOps Specialist</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Blog 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="/typescript.webp" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 1</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
            <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
          </div>
        </div>
      </div>
      {/* Blog 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 2</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
            <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
          </div>
        </div>
      </div>
      {/* Blog 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 3</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
            <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer className="bg-gray-800 text-gray-300 py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between">
      {/* Logo & Description */}
      <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
        <h3 className="text-xl font-semibold text-white">Aman’s DevLog</h3>
        <p className="mt-2 text-gray-400">
          Your go-to resource for learning about coding, development, and software engineering. Explore tutorials, best practices, and insights from the world of software development to help you on your journey to becoming a better developer.
        </p>
      </div>

      {/* Quick Links */}
      <div className=" px-10 w-full sm:w-1/2 lg:w-1/3 mb-6">
        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
        <ul className="mt-4 space-y-2">
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/blog" className="hover:underline">Blogs</a></li>
          {/* <li><a href="/resources" className="hover:underline">Resources</a></li>
          <li><a href="/projects" className="hover:underline">Projects</a></li> */}
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Latest Blogs */}
      <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
        <h4 className="text-lg font-semibold text-white">Latest Blogs</h4>
        <ul className="mt-4 space-y-2">
          <li><a href="/blogs/c-tutorial" className="hover:underline">Mastering C Programming: A Beginner's Guide</a></li>
          <li><a href="/blogs/javascript" className="hover:underline">Understanding JavaScript Closures</a></li>
          <li><a href="/blogs/frontend-vs-backend" className="hover:underline">Frontend vs Backend Development: Key Differences</a></li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
        <h4 className="text-lg font-semibold text-white">Follow Us</h4>
        <div className="flex mt-4 space-x-4">
          <a href="https://twitter.com" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.5.59-2.28.69a4.13 4.13 0 001.79-2.28c-.78.47-1.64.82-2.55 1a4.1 4.1 0 00-6.99 3.74A11.65 11.65 0 013.29 4.64a4.08 4.08 0 001.28 5.47A4.12 4.12 0 012 9.72v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.12 4.12 0 003.83 2.85A8.24 8.24 0 012 19.54a11.62 11.62 0 006.29 1.84c7.56 0 11.69-6.27 11.69-11.69l-.01-.53A8.36 8.36 0 0024 4.56a8.38 8.38 0 01-2.46.67 4.16 4.16 0 001.83-2.28z" />
            </svg>
          </a>
          <a href="https://facebook.com" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11 9.95V15.5H9.29V12h1.7V9.77a3.75 3.75 0 013.77-3.73h2.13v3h-1.3a1.75 1.75 0 00-1.75 1.76V12h3l-.5 3.5h-2.5v6.45A10.02 10.02 0 0022 12z" />
            </svg>
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2a5.75 5.75 0 00-5.75 5.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm8.5 1.5A4.25 4.25 0 0120.5 7.75v8.5A4.25 4.25 0 0116.25 20.5h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5h8.5zm-4.25 3a5.25 5.25 0 100 10.5A5.25 5.25 0 0016.5 12a5.25 5.25 0 00-5.25-5.25zm0 1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zM18 6.6a.9.9 0 100-1.8.9.9 0 000 1.8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    {/* Contact Info */}
    <div className="mt-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Aman’s DevLog. All rights reserved.</p>
      <p>Contact us: <a href="mailto:info@amansdevlog.com" className="hover:underline text-white">info@amansdevlog.com</a></p>
      <p>Phone: +91 9151726004</p>
    </div>
  </div>
</footer>


    </main>
  );
}
