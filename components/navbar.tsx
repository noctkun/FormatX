// imports
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { CiCoffeeCup } from "react-icons/ci";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { LuMenu } from "react-icons/lu";

export default function Navbar({ }): any {
    return (
        <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <Link href="/">
                <Image alt="logo" className="w-40 cursor-pointer rounded-full mt-5" src="/images/logo.svg" height={100} width={170} />
            </Link>
            <div className="hidden gap-1 md:gap-2 lg:gap-4 md:flex">
                <Button variant="ghost" className="font-semibold text-md">
                    <Link href="/">Home</Link>
                </Button>
                <Link href="/about">
                    <Button variant="ghost" className="font-semibold text-md">
                        About
                    </Button>
                </Link>
            </div>
            <div className="items-center hidden gap-2 md:flex">
                <ModeToggle />
                <Link href="https://buymeacoffee.com/noctkun">
                    <Button
                        variant="default"
                        className="items-center hidden gap-2 bg-orange-600 rounded-full w-fit md:flex"
                        size="lg"
                    >
                        <span>Buy Me a Coffee</span>
                        <span className="text-xl">
                            <CiCoffeeCup/>
                        </span>
                    </Button>
                </Link>
            </div>
            {/* MOBILE NAV */}
            <Sheet>
                <SheetTrigger className="block p-3 md:hidden">
                    <span className="text-2xl text-slate-950 dark:text-slate-200">
                        <LuMenu />
                    </span>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="flex flex-col w-full h-full">
                                <SheetTrigger asChild>
                                    <Link href="/">
                                        <Button variant="link" className="w-full font-semibold text-md">
                                            Home
                                        </Button>
                                    </Link>
                                </SheetTrigger>
                                <SheetTrigger asChild>
                                    <Link href="/about">
                                        <Button variant="link" className="w-full font-semibold text-md">
                                            About
                                        </Button>
                                    </Link>
                                </SheetTrigger>
                                <ModeToggle />
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
