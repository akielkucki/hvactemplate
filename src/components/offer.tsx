import {brand} from "@/lib/info";

export default function Offer() {
    const {name} = brand;
    return (
        <section className="py-32 flex justify-center items-center bg-gradient-to-bl from-gradient to-primary" id={"offer"}>
            <div className="max-w-4xl px-6 text-center space-y-8">
                <div className="space-y-2">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-800">
                        When you choose <span className="font-semibold text-accent">{name}</span>
                    </h2>
                </div>

                <div className="w-full h-0.5 bg-black mx-auto" />

                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-900">
                    You'll never make another choice again.
                </h2>

                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    Period.
                </p>
            </div>
        </section>
    )
}