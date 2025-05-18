import PageAnimation from "@/components/page-animation";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <PageAnimation>
            {children}
        </PageAnimation>
    )
}
