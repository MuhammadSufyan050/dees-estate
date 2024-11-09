import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h2>Dees Estate</h2>
      </div>

      <ul className={styles.navList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/properties">Properties</Link>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className={styles.menuIcon} />
        </SheetTrigger>
        <SheetContent side="right" className={styles.sheetContent}>
          <ul className={styles.sheetList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/properties">Properties</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
