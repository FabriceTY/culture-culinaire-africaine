
import About from "@/components/About";

export const metadata = {
    title: 'About | my-youtube-app',
    description: 'Page de a Propos',
    openGraph: {
        title: 'About | my-youtube-app',
        description: 'Page a Propos',
        images: ['./Logo.webp']
    }
}

export default function Page() {
    return <>
        <About />
    </>
}