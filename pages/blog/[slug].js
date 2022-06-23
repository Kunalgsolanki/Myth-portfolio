import console from "console";
import { get } from "http";
import Head from "next/head";
import { useRouter } from "next/router";
import PortableText from "react-portable-text"
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const Post = ({ blogs,author,profile}) => {
  const router = useRouter();
  const { slug } = router.query;
  const client = createClient({
    projectId: "z5odbdu1",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)

  return (
    <>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>{blogs.title}</title>

        <meta
          property="og:title"
          content="How to become a frontend developer | Atom Template"
        />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//post" />

        <meta property="og:url" content="//post" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
        />

        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></script>
      </Head>

      <div>
        <div class="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
          <div class="container flex items-center justify-between">
            <div>
              <a href="/">
              <img
                      src={builder.image(profile.logo).width(200).url()}
                    class="rounded-full shadow"
                    alt="author image"
                  />
              </a>
            </div>
            <div class="hidden lg:block">
              <ul class="flex items-center">
                <li class="group pl-6">
                  <a
                    href="/#about"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    About
                  </a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">
                  <a
                    href="/#services"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Services
                  </a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">
                  <a
                    href="/#portfolio"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Portfolio
                  </a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">
                  <a
                    href="/#clients"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Clients
                  </a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">
                  <a
                    href="/#work"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Work
                  </a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">
                  <a
                    href="/#statistics"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Statistics
                  </a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">
                  <a
                    href="/#blog"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Blog
                  </a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li class="group pl-6">
                  <a
                    href="/#contact"
                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Contact
                  </a>

                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </ul>
            </div>
            <div class="block lg:hidden">
              <button>
                <i class="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden">
          <div class="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
            <button class="absolute top-0 right-0 mt-4 mr-4">
              <img
                src="/assets/img/icon-close.svg"
                class="h-10 w-auto"
                alt=""
              />
            </button>

            <ul class="mt-8 flex flex-col">
              <li class="py-2">
                <a
                  href="/#about"
                  class="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  About
                </a>
              </li>

              <li class="py-2">
                <a
                  href="/#services"
                  class="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Services
                </a>
              </li>

              <li class="py-2">
                <a
                  href="/#portfolio"
                  class="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Portfolio
                </a>
              </li>

              <li class="py-2">
                <a
                  href="/#clients"
                  class="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Clients
                </a>
              </li>

              <li class="py-2">
                <a
                  href="/#work"
                  class="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Work
                </a>
              </li>

              <li class="py-2">
                <a
                  href="/#statistics"
                  class="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Statistics
                </a>
              </li>

              <li class="py-2">
                <a
                  href="/#blog"
                  class="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Blog
                </a>
              </li>

              <li class="py-2">
                <a
                  href="/#contact"
                  class="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div class="container py-6 md:py-10">
            <div class="mx-auto max-w-4xl">
              <div class="">
                <h1 class="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                  {blogs.title}  {blogs.image}
                </h1>
                <div class="flex items-center pt-5 md:pt-10">
                  <div>
                    <img
                       src={builder.image(author.image).width(200).url()}
                      class="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                      alt="author image"
                    />
                  </div>
                  <div class="pl-5">
                    <span class="block font-body text-xl font-bold text-grey-10">
                      By {author.title}
                    </span>
                    <span class="block pt-1 font-body text-xl font-bold text-grey-30">
                      {author.releaseDate}
                    </span>
                  </div>
                </div>
              </div>
              <div class="prose max-w-none pt-8">
             
       <PortableText
      
       content={blogs.content}
      projectId = "z5odbdu1"
    dataset = "production"
      // Optionally override marks, decorators, blocks, etc. in a flat
       // structure without doing any gymnastics
       serializers={{
       h1: (props) => <h1 style={{ color: "red" }} {...props} />,
         li: ({ children }) => <li className="special-list-item">{children}</li>,
      }}
   />

                
              </div>
              <div class="flex pt-10">
                <a
                  href="/"
                  class="rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20"
                >
                  Frontend
                </a>
                <a
                  href="/"
                  class="ml-2 block rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20"
                >
                  Design
                </a>
              </div>
              <div class="mt-10 flex justify-between border-t border-lila py-12">
                <a href="/" class="flex items-center">
                  <i class="bx bx-left-arrow-alt text-2xl text-primary"></i>
                  <span class="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                    Previous Post
                  </span>
                </a>
                <a href="/" class="flex items-center">
                  <span class="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                    Next Post
                  </span>
                  <i class="bx bx-right-arrow-alt text-2xl text-primary"></i>
                </a>
              </div>
              <div class="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                <div class="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                  <img
                      src={builder.image(author.image).width(200).url()}
                    class="rounded-full shadow"
                    alt="author image"
                  />
                </div>
                <div class="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                  <h3 class="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                    {author.title}
                  </h3>
                  <p class="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                   {author.details}
                  </p>
                  <div class="flex items-center justify-center pt-5 md:justify-start">
                    <a href={author.furl}>
                      <i class="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href={author.turl} class="pl-4">
                      <i class="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href={author.murl} class="pl-4">
                      <i class="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href={author.lurl} class="pl-4">
                      <i class="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href={author.iurl} class="pl-4">
                      <i class="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-primary">
          <div class="container flex flex-col justify-between py-6 sm:flex-row">
            <p class="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, ATOM.
            </p>
            <div class="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <a href="/">
                <i class="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" class="pl-4">
                <i class="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" class="pl-4">
                <i class="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" class="pl-4">
                <i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" class="pl-4">
                <i class="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const client = createClient({
    projectId: "z5odbdu1",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"&& slug.current == '${slug}'][0]`;
  const authorQuery = `*[_type == "author"][0]`;
  const blogs = await client.fetch(query);
  const author = await client.fetch(authorQuery);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  console.log(blogs);
  return {
    props: {
      blogs,
      author,
      profile
    },
  };
};