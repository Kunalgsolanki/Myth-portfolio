import { createClient } from "next-sanity";
import React from 'react'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
const NavBar = ({profile,blogs}) => {

  const client = createClient({
    projectId: "z5odbdu1",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
    return (
        <div>
              <div className="w-full z-50 top-0 py-3 sm:py-5  absolute bg-[#493798] mb-8">
        <div className="container flex items-center justify-between">
          <div className='mx-12'>
            <Link href="/">
            <img
                      src={builder.image(profile.logo).width(200).url()}
                    className="rounded-full shadow"
                    alt="author image"
                  />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">

              <li className="group pl-6">

                <Link href='#about'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span></Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                  <Link   href="#services">
                <span   
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>
</Link>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <Link href='#portfolio'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span></Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <Link href='#clients'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span></Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <Link href='#work'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span></Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <Link href='#statistics'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span></Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <Link href='#blog'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span></Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                 <Link href="#contact">
                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>
                 </Link>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

            </ul>
          </div>
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
        </div>
    )
}

export default NavBar


export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "z5odbdu1",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      blogs,
      profile
    }
  }
}