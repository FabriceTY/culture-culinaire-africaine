import ContactNonControlle from "@/components/Contact"

export const metadata = {
    title: 'Contact | my-youtube-app',
    description: 'Page de Contact',
    openGraph: {
        title: 'Contact | my-youtube-app',
        description: 'Page de Contact',
        images: ['./react.webp']
    }
}

export default function Page(){
    return <>
        <ContactNonControlle/>
    </>
}