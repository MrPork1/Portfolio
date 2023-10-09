"use client";
import Link from "next/link";
import localFont from 'next/font/local'

const helvlightCondensed =  localFont({ src: '../HelveticaLightRegular.otf' });

export default function Button ({title, onPress}: {title: string, onPress: any}) {
  return (
    <Link href={onPress} className={`${helvlightCondensed.className} tracking-[0.15em] bg-[#0B2F5B] transition-all ease-in duration-75 text-white hover:text-black hover:bg-white hover:border-1 border-2 outline outline-offset-1 outline-2 outline-[#0B2F5B] hover:border-[#0B2F5B] px-[20px] py-[1px] text-[17px] border-[#0B2F5B]`}>{title}</Link>
  );
};