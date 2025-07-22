import Image from "next/image"

// const iconsFillWhite = [
//     {
//         name: "Facebook",
//         src: "/social-icons/facebook-icon-fillWhite.png",
//         width: 24,
//         height: 24,
//         fill: 'black',
//     },    {
//         name: "Facebook",
//         src: "/social-icons/facebook-icon-fillBlack.png",
//         width: 24,
//         height: 24,
//         fill: 'black',
//     },
//     {
//         name: "Instagram",
//         src: "/social-icons/instagram-icon-fillWhite.png",
//         width: 24,
//         height: 24,
//         fill: 'black',
//     },
//     {
//         name: "Instagram",
//         src: "/social-icons/instagram-icon-fillBlack.png",
//         width: 24,
//         height: 24,
//         fill: 'black',
//     },
//     {
//         name: "Linkedin",
//         src: "/social-icons/linkedin-icon-fillWhite.png",
//         width: 24,
//         height: 24,
//         fill: 'black',
//     },
//     {
//         name: "Linkedin",
//         src: "/social-icons/linkedin-icon-fillblack.png",
//         width: 24,
//         height: 24,
//         fill: 'black',
//     },
//     {
//         name: "GitHub",
//         src: "/social-icons/github-icon-fillWhite.png",
//         width: 24,
//         height: 24,
//         fill: 'black',
//     },
//     {
//         name: "GitHub",
//         src: "/social-icons/github-icon-fillblack.png",
//         width: 24,
//         height: 24,
//         fill: 'black',
//     },
//     {
//         name: "Whatsapp",
//         src: "/social-icons/whatsapp-icon-fillWhite.png",
//         width: 24,
//         height: 24,
//         fill: 'black',
//     },
//     {
//         name: "Whatsapp",
//         src: "/social-icons/whatsapp-icon-fillBlack.png",
//         width: 24,
//         height: 24,
//         fill: 'black',
//     },
// ];

const iconsFillColor = [
    {
        name: "Facebook",
        src: "/social-icons/facebook-color.png",
        width: 24,
        height: 24,
        fill: 'black',
    },
    {
        name: "Instagram",
        src: "/social-icons/instagram-color.png",
        width: 24,
        height: 24,
        fill: 'black',
    },
    {
        name: "Linkedin",
        src: "/social-icons/linkedin-color.png",
        width: 24,
        height: 24,
        fill: 'black',
    },
    {
        name: "GitHub",
        src: "/social-icons/github-color.png",
        width: 24,
        height: 24,
        fill: 'black',
    },
    {
        name: "Whatsapp",
        src: "/social-icons/whatsapp-color.png",
        width: 24,
        height: 24,
        fill: 'black',
    },
];

export default function Icons() {
    return (
        <div className="absolute bottom-0  self-end place-self-end w-full p-2">
            {iconsFillColor.map((icon, k) => (
                <div key={k} className="inline-block mx-2">
                    <Image
                        src={icon.src}
                        alt={icon.name}
                        width={icon.width}
                        height={icon.height}
                        className="cursor-pointer hover:scale-110 transition-transform duration-300 "
                    />
                </div>
            ))}
        </div>
    )
}