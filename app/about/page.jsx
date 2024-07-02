
import About from "@/components/About";

export const metadata = {
    title: 'About | culture-culinaire-africaine',
    description: 'Ici se trouve la description de ce site',
    openGraph: {
        title: 'About | culture-culinaire-africaine',
        description: 'Ici se trouve la description de ce site',
        images: ['./Logo.webp']
    }
}

export default function Page() {
    return <>
        <About />
    </>
}