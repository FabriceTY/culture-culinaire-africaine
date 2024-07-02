
import Testimonials from "@/components/Testimonials";
export const metadata = {
    title: 'Testimonials | culture-culinaire-africaine',
    description: 'Page de receuil des Temoignages des utilisateurs',
    openGraph: {
        title: 'Testimonials | culture-culinaire-africaine',
        description: 'Page de receuil des Temoignages des utilisateurs',
        images: ['./Logo.webp']
    }
}
export default function Page() {
    return <>
        <Testimonials />
    </>
}