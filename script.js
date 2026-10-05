const socialLinks = [
    {
        name: "Metal Code",
        icon: "🤘",
        handle: "Plataforma de cursos",
        url: "https://metalcode.io/"
    },
    {
        name: "YouTube",
        icon: "▶️",
        handle: "Canal principal",
        url: "https://www.youtube.com/@hdeleonnet"
    },
    {
        name: "X",
        icon: "🐦",
        handle: "Perfil oficial",
        url: "https://x.com/powerhdeleon"
    },
    {
        name: "TikTok",
        icon: "🎵",
        handle: "Perfil oficial",
        url: "https://www.tiktok.com/@hdeleonnet"
    },
    {
        name: "Instagram",
        icon: "📸",
        handle: "Perfil oficial",
        url: "https://www.instagram.com/hdeleonnet/"
    },
    {
        name: "Facebook",
        icon: "👍",
        handle: "Perfil oficial",
        url: "https://www.facebook.com/hdeleonnet"
    },
    {
        name: "Udemy",
        icon: "🎓",
        handle: "Cursos",
        url: "https://www.udemy.com/user/hector-de-leon-3/?srsltid=AU7gw4VmOt1IIbO2W4iJjOY3OyQYqVLVCBbfr__2iFqzdDEKMnzAeeiY"
    },
    {
        name: "Blog",
        icon: "✍️",
        handle: "hdeleon.net",
        url: "https://hdeleon.net"
    },
    {
        name: "Podcast Raw Radio",
        icon: "🎙️",
        handle: "Spotify",
        url: "https://open.spotify.com/show/3obLU60alE7CGpzNeTS0kN"
    },
    {
        name: "YouTube",
        icon: "🎬",
        handle: "Canal secundario",
        url: "https://www.youtube.com/@hdeleonClips"
    }
];

const socialLinksContainer = document.querySelector("#socialLinks");

socialLinks.forEach((social) => {
    const link = document.createElement("a");
    link.className = "social-link";
    link.href = social.url;
    link.setAttribute("aria-label", `${social.name}: ${social.handle}`);

    link.innerHTML = `
        <span class="social-name"><span class="social-icon" aria-hidden="true">${social.icon}</span> ${social.name}</span>
        <span class="social-handle">${social.handle}</span>
    `;

    socialLinksContainer.appendChild(link);
});