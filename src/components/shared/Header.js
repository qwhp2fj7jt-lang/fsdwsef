"use client";

import { useState, useEffect } from "react";
import "../../app/globals.css"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  // Menu,
  // MenuButton,
  // MenuItems,
  // MenuItem,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { SearchBar } from "@/widgets";
import {navigation} from "@/shared";

export default function Header() {
  const [theme, setTheme] = useState("light");
  // const [lang, setLang] = useState("tr");
  const [active, setActive] = useState("/");


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Disclosure as="nav" className="  dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

 
          <div className="flex items-center sm:hidden">
            <DisclosureButton className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-zinc-800">
              <Bars3Icon className="size-6 data-open:hidden" />
              <XMarkIcon className="size-6 hidden data-open:block" />
            </DisclosureButton>
          </div>


          <div className="hidden sm:flex justify-center bg-zinc-50 dark:bg-zinc-900 text-black dark:text-gray-200 rounded-xl p-2">
            <div className="flex space-x-6">
              {navigation.map((item) => {
                const isActive = active === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setActive(item.href)}
                    className={`px-3 py-2 text-sm transition ${
                      isActive
                        ? "text-black dark:text-white font-semibold"
                        : "text-gray-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <SearchBar navigation={navigation} />
asdcascasc

            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md transition"
            >
              {theme === "light" ? (
                <MoonIcon className="size-5 text-gray-800" />
              ) : (
                <SunIcon className="size-5 text-yellow-300" />
              )}
            </button>


            {/* <Menu as="div" className="relative">
              <MenuButton className="px-3 py-1 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-zinc-800 rounded-md text-sm">
                {lang.toUpperCase()}
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-gray-200 rounded-md shadow-lg w-28">
                <MenuItem>
                  <button
                    onClick={() => setLang("tr")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-zinc-800"
                  >
                    Türkçe
                  </button>
                </MenuItem>

                <MenuItem>
                  <button
                    onClick={() => setLang("en")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-zinc-800"
                  >
                    English
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu> */}
          </div>
        </div>
      </div>


      <DisclosurePanel className="sm:hidden px-3 pb-3 space-y-1 bg-white dark:bg-zinc-900">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.href)}
            className="block rounded-md px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            {item.name}
          </a>
        ))}

      </DisclosurePanel>
    </Disclosure>
  );
}
