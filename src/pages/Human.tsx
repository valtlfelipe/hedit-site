import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { FC } from "react"

const Human: FC = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="flex flex-col items-center justify-center py-24 sm:py-32">
                <div className="max-w-4xl w-full p-4">
                    <h1 className="text-3xl font-bold mb-4 text-center">Made by Human</h1>
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="mx-auto max-w-screen-sm">
                            <p className=" text-md leading-relaxed mb-6">
                                Hedit is a small, independent product run by a passionate
                                individual. I am not a big corporation, nor am I backed by venture capital. I'm just
                                someone who loves building products and helping others.
                            </p>
                            <p className=" text-md leading-relaxed mb-6">
                                I created Hedit because I was using an older application to edit my hosts file, which had no support for Apple Silicon, and I wanted to create a modern, user-friendly alternative that works seamlessly.
                            </p>
                            <p className=" text-md leading-relaxed mb-6">
                                I am not perfect. I make mistakes. I am learning and
                                growing, always looking to improve every day. Your feedback is always welcome and appreciated.
                            </p>
                            <p className=" text-md leading-relaxed mb-6">
                                Hedit is a fully indie project, and every license helps keep it that way. I want to sincerely thank you for supporting me.
                            </p>

                            <p className=" text-md leading-relaxed mb-6">
                                Felipe Valtl de Mello<br /><small>FVM Tec.</small>
                            </p>

                            <hr className="mb-6" />
                            <p className=" text-sm leading-relaxed mb-6">
                                This page is inspired by <a
                                    target="_blank"
                                    href="https://www.useplunk.com/made-by-humans"
                                    className="underline hover:no-underline"
                                >Dries from Plunk</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Human
