
import Contact2 from "@/components/Contact2"

export const metadata = {
    title: 'Contact | culture-culinaire-africaine',
    description: 'Cette section permet de contacter un administrateur',
    openGraph: {
        title: 'Contact | culture-culinaire-africaine',
        description: 'Cette section permet de contacter un administrateur',
        images: ['./Logo.webp']
    }
}

export default function Page(){
    return <>
        {/* <ContactNonControlle/> */}
        <Contact2/>
    </>
}