
import Testimonials from "@/components/Testimonials";
export const metadata = {
    title: 'Testimonials | my-youtube-app',
    description: 'Page de Temoignages',
    openGraph: {
        title: 'Testimonials | my-youtube-app',
        description: 'Page de Temoignages',
        images: ['./Logo.webp']
    }
}
export default function Page() {
    return <>
        <Testimonials />
    </>
}