import { withContentlayer } from "next-contentlayer";
/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	redirects() {
	  return [
		{
		  source: "/perfect-espresso",
		  destination: "/post/perfect-espresso",
		  permanent: true,
		},
		{
		  source: "/perfect-grinder",
		  destination: "/post/perfect-grinder",
		  permanent: true,
		},
	  ];
	},
  };


export default withContentlayer({})