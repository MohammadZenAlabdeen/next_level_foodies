'use client'
import Link from 'next/link';
import classes from './nav-link.module.css'
import { usePathname } from 'next/navigation';
export default function NavLink(props) {
    const path=usePathname();
  return (
    <Link
      href={props.path}
      className={path.startsWith(props.path) ? classes.active : undefined}
    >
        {
            props.text
        }
    </Link>
  );
}
