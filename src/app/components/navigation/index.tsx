"use client";
import { Navbar } from 'flowbite-react';

export default function DefaultNavbar() {
  return (
    <Navbar
      fluid
      border>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/about">
          <p>
            About
          </p>
        </Navbar.Link>
        <Navbar.Link
          href="/projects">
          <p>
            Projects
          </p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}