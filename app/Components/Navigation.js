"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ArchiveIcon from '@mui/icons-material/Archive';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

const sections = [
    { id: "home", label: "HOME" },
    { id: "about-all", label: "ABOUT" },
    { id: "timeline", label: "TIMELINE" },
    { id: "contact", label: "CONTACT" },
];

export default function Navigation({ currentSection, onNavigate, isMobile, isMusicPlaying, onToggleMusic }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMenuClick = (id) => {
        onNavigate(id);
        setDrawerOpen(false);
    };

    if (isMobile) {
        return (
            <div className="flex flex-row items-center justify-between">
                <Image src="/Images/ppif_logo.png" alt="PPIF logo" width={90} height={30} priority />
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setDrawerOpen(true)}
                    sx={{ mr: 1.5 }}
                >
                    <MenuIcon style={{ color: 'white' }} sx={{ fontSize: 40 }} />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                >
                    <div className="w-56 py-8 px-4 bg-black h-full flex flex-col gap-4">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                className={`text-left py-2 px-3 rounded font-bold text-lg ${currentSection === section.id
                                    ? "bg-orange-500 text-white"
                                    : "text-gray-200 hover:bg-gray-800"
                                    }`}
                                style={{ fontFamily: 'HongMengTi' }}
                                onClick={() => handleMenuClick(section.id)}
                            >
                                {section.label}
                            </button>
                        ))}
                        <div className="flex flex-row gap-2 w-auto">
                            <button
                                onClick={onToggleMusic}
                                title="Toggle Music"
                                className="w-full h-full flex items-center rounded-full justify-center"
                            >
                                {isMusicPlaying ? (
                                    <img src="/Assets/musicOn.png" className="w-[60px] h-full rounded-full" />
                                ) : (
                                    <img src="/Assets/musicOff.png" className="w-[60px] h-full rounded-full" />
                                )}
                            </button>
                            <button className="w-full h-full flex items-center rounded-full justify-center">
                                <img src="/Assets/GamesIcon.png" className="w-[60px] h-full rounded-full" />
                            </button>
                            <button className="w-full h-full flex items-center rounded-full justify-center">
                                <img src="/Assets/Button.png" className="w-[60px] h-full rounded-full" />
                            </button>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }

    // Desktop
    return (
        <div className="flex flex-row items-center justify-between">
            <Image src="/Images/ppif_logo.png" alt="PPIF logo" width={90} height={30} priority />

            <ul className="flex flex-row gap-6 -mr-24 items-center">
                {sections.map((section) => (
                    <li key={section.id}>
                        <button
                            style={{ fontFamily: 'HongMengTi' }}
                            className={`text-md font-extrabold whitespace-nowrap flex-shrink-0 cursor-pointer hover:text-gray-400 transition-all
              ${currentSection === section.id ? "text-[#F06D39]" : "text-gray-100"}
            `}
                            onClick={() => onNavigate(section.id)}
                        >
                            {section.label}
                        </button>
                    </li>
                ))}

            </ul>
            <div className="flex flex-row gap-2 w-auto">
                <button
                    onClick={onToggleMusic}
                    title="Toggle Music"
                    className="w-full h-full flex items-center rounded-full justify-center "
                >
                    {isMusicPlaying ? (
                        <img src="/Assets/musicOn.png" className="w-[60px] h-full rounded-full" />
                    ) : (
                        <img src="/Assets/musicOff.png" className="w-[60px] h-full rounded-full" />
                    )}
                </button>
                <button className="w-full h-full flex items-center rounded-full justify-center">
                    <img src="/Assets/GamesIcon.png" className="w-[60px] h-full rounded-full" />
                </button>
                <button className="w-full h-full flex items-center rounded-full justify-center">
                    <img src="/Assets/Button.png" className="w-[60px] h-full rounded-full" />
                </button>
            </div>
        </div>
    );
}