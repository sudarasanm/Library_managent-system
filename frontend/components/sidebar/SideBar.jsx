import React from 'react'
import Link from 'next/link'
import styles from "./sidebar.module.css"

function SideBar() {
    const data = [{
        name: 'Books',
        href: "/booklist"
    },
    {
        name: 'Faculty',
        href: "/faculty"
    },
    {
        name: 'Students',
        href: "/student"
    },
    {
        name: 'Return',
        href: "/return"
    },
    {
        name: 'Borrow',
        href: "/borrow"
    }, {
        name: "Maintain Borrows",
        href: "/maintainborrow"
    }, {
        name: "Report",
        href: "/report"
    }

    ]
    return (
        <div className={styles.container}>
            {data.map((data, index) => <Link key={index} className={styles.link} href={data.href}>{data.name}</Link>)}
        </div>
    )
}

export default SideBar
