"use client";

import { useState } from "react";
import styles from '@/app/page.module.css';
import Nav from "@/app/component/nav";
import { ebGaramond } from "@/app/fonts";
import Image from "next/image";
import logo from "../../../public/handmade-basket-transparent-background.png";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <a href="/">
                    <div className={styles.imagediv}>
                        <Image
                            src={logo}
                            alt="Handmade Basket"
                            loading="lazy"
                        />
                        <h1 className={ebGaramond.className}>Handcrafted Haven</h1>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className={styles.desktopNav}>
                    <Nav />
                </div>

                {/* Mobile Hamburger */}
                <button
                    className={styles.hambutton}
                    onClick={() => setOpen(true)}
                >
                    ☰
                </button>
            </header>

            {/* Overlay */}
            <div
                className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
                onClick={() => setOpen(false)}
            />

            {/* Sliding Sidebar */}
            <aside
                className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closebtn} onClick={() => setOpen(false)}>
                    ✕
                </button>

                <Nav />
            </aside>
        </>
    );
}



// "use client";

// import { useState } from "react";
// import styles from '@/app/page.module.css';
// import Nav from "@/app/component/nav";
// import { ebGaramond } from "@/app/fonts";
// import Image from "next/image";
// import logo from "../../../public/handmade-basket-transparent-background.png";

// export default function Header() {
//     const [open, setOpen] = useState(false);

//     return (
//         <>
//             <header className={styles.header}>
//                 <a href="/">
//                     <div className={styles.imagediv}>
//                         <Image
//                             src={logo}
//                             alt="Handmade Basket"
//                             loading="lazy"
//                         />
//                         <h1 className={ebGaramond.className}>Handcrafted Haven</h1>
//                     </div>
//                 </a>

//                 {/* Desktop Nav */}
//                 <div className={styles.desktopNav}>
//                     <Nav />
//                 </div>

//                 {/* Mobile Hamburger */}
//                 <button
//                     className={styles.hambutton}
//                     onClick={() => setOpen(true)}
//                 >
//                     ☰
//                 </button>
//             </header>

//             {/* Mobile Sidebar */}
//             {open && (
//                 <div
//                     className={`${styles.overlay} ${open ? styles.open : ""}`}
//                     onClick={() => setOpen(false)}
//                 >
//                     <aside
//                         className={styles.sidebar}
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <button className={styles.closebtn} onClick={() => setOpen(false)}>
//                             ✕
//                         </button>

//                         <Nav />
//                     </aside>
//                 </div>
//             )}
//         </>
//     );
// }
