"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/investors`}
          className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
        >
          Overview
        </Link>
        <Link
          href={`/investors/guides`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Investment Guides
        </Link>
        <Link
          href={`/investors/opportunities`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Investment Opportunities
        </Link>
        <Link
          href={`/investors/stories`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Success Stories
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
