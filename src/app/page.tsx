"use client";

import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    console.log('fetch for csport ran');
    fetch('https://csport.azurewebsites.net').then().catch();
  }, []);


  useEffect(() => {
    console.log('fetch for sportnode ran');
    fetch('https://sportnode.azurewebsites.net/ConnectionStatus').then().catch();
  }, []);

  useEffect(() => {
    redirect('/about');
  }, []); 
}