import type { StaticImageData } from "next/image"

import Image from "next/image"
import Link from "next/link"

import DarkLogo from "@/../public/logo-dark.svg"
import LightLogo from "@/../public/logo-light.svg"
// import Logo from "@/../public/logo.png"
import { LinkButton } from "@/lib/utils/next"

import "./nav.css"

const Nav = () => {
    return (
        <nav className="flex h-[5vh] w-full items-center justify-between p-1">
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <Link className="nav-logo-link aspect-square h-full" href="/">
                <Image
                    alt="Home"
                    className="-ml-3 aspect-square h-full rounded-full dark:hidden"
                    src={LightLogo as StaticImageData}
                />
                <Image
                    alt="Home"
                    className="-ml-3 hidden aspect-square h-full rounded-full dark:block"
                    src={DarkLogo as StaticImageData}
                />
            </Link>
            <LinkButton className="no-underline hover:underline" href="/blog">
                Blog
            </LinkButton>
        </nav>
    )
}

export default Nav
