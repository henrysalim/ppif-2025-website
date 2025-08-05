import Image from "next/image";

const socialLinks = [
    {
        name: "WhatsApp",
        iconPath: "/Assets/icons/Whatsapp.png",
        url: "https://wa.me/YOUR_PHONE_NUMBER",
    },
    {
        name: "Discord",
        iconPath: "/Assets/icons/Discord.png",
        url: "https://discord.gg/YOUR_SERVER_INVITE",
    },
    {
        name: "Instagram",
        iconPath: "/Assets/icons/Instagram.png",
        url: "https://instagram.com/YOUR_USERNAME",
    },
    {
        name: "Line",
        iconPath: "/Assets/icons/Line.png",
        url: "https://line.me/ti/p/~YOUR_LINE_ID",
    },
];

export default function ContactContent() {
    return (
        <div className="w-full flex flex-col items-center gap-y-12 py-16">

            {/* --- Tombol "Connect to the Network" --- */}
            <div className="w-full max-w-3xl bg-[#33353A] rounded-full flex items-center justify-center py-4 shadow-inner">
                <h1 className="text-white text-3xl font-extrabold opacity-30 tracking-wider">
                    Connect to the Network
                </h1>
            </div>

            {/* --- Bagian Strip Film Media Sosial --- */}
            <div className="flex items-center">
                {/* Bagian Ujung Kiri Strip Film */}
                <Image
                    src="/Assets/RollKiri.png"
                    alt="Film strip left end"
                    width={60}
                    height={172}
                    className="object-contain"
                    priority
                />

                {/* Kontainer untuk semua frame film */}
                <div className="flex flex-row">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative transform transition-transform duration-300 hover:scale-105"
                        >
                            {/* 1. LATAR BELAKANG FRAME DARI FILE PNG ANDA */}
                            <Image
                                src="/Assets/film-strip.png" // PASTIKAN PATH INI SESUAI
                                alt="Film frame background"
                                width={170}
                                height={170}
                                className="object-contain"
                            />

                            {/* 2. IKON SOSIAL MEDIA (ditumpuk di atas) */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src={social.iconPath}
                                    alt={social.name}
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bagian Ujung Kanan Strip Film */}
                <Image
                    src="/Assets/RollKanan.png"
                    alt="Film strip right end"
                    width={60}
                    height={172}
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}