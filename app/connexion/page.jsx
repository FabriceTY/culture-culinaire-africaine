
import ConnexionForm from "@/components/Connexion";
export const metadata = {
    title: 'Connexion | culture-culinaire-africaine',
    description: 'Page permettant de se connecter au site',
    openGraph: {
        title: 'Connexion | culture-culinaire-africaine',
        description: 'Page permettant de se connecter',
        images: ['./Logo.webp']
    }
}

export default function Page() {
    return <>
        <ConnexionForm />
    </>
}