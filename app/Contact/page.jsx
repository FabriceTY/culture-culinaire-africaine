
import Contact2 from "@/components/Contact2"

export const metadata = {
    title: 'Contact | my-youtube-app',
    description: 'Page de Contact',
    openGraph: {
        title: 'Contact | my-youtube-app',
        description: 'Page de Contact',
        images: ['./Logo.webp']
    }
}

export default function Page(){
    return <>
        {/* <ContactNonControlle/> */}
        <Contact2/>
    </>
}