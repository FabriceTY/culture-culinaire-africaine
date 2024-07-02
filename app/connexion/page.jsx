
import ConnexionForm from "@/components/Connexion";
export const metadata = {
    title: 'Connexion | my-youtube-app',
    description: 'Page de Connexion',
    openGraph: {
        title: 'Connexion | my-youtube-app',
        description: 'Page de Connexion',
        images: ['./Logo.webp']
    }
}

export default function Page() {
    return <>
        <ConnexionForm />
    </>
}