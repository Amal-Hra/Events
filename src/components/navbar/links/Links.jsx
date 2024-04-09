"use client";
import React, { Fragment, useState } from "react";
import Styles from "./links.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tab = [
	{
		title: "Acceuil",
		path: "/",
	},
	{
		title: "Evenements",
		path: "/events",
	},
	{
		title: "Contact",
		path: "/contact",
	},
	{
		title: "Admin",
		path: "/admin",
	}
];

const Links = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	const onClickHander = () => {
		setOpen(!open);
	};

	return (
		<>
			{/******div general */}
			<div>
				{/******div containe pour les liens descktop */}
				<div className={Styles.containerLinks}>
					{tab.map((item, index) => (
						<Link
							className={pathname === item.path ? `${Styles.active}` : ""}
							key={index}
							href={item.path}
						>
							{item.title}
						</Link>
					))}
				</div>

				{/******div containe pour les liens mobile */}
				<button
      style={{ backgroundColor: 'transparent', border: 'none', fontSize: '1.5rem', color: 'white' }}
      onClick= {onClickHander}
      className={Styles.menuMobile}
    >
      &#x2630;
    </button>
				{open && (
					<div className={Styles.containerMobileLinks}>
						{tab.map((item, index) => (
							<Link
								className={pathname === item.path ? `${Styles.active}` : ""}
								key={index}
								href={item.path}
							>
								{item.title}
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default Links;
