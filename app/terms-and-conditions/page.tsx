import {
    HeartPulse,
    ShieldCheck,
    AlertTriangle,
    Map,
    Leaf,
    Users,
    CheckCircle,
} from "lucide-react";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
                    Terms & Conditions
                </h1>

                <div className="space-y-10">

                    {/* Health & Fitness */}
                    <section className="bg-white rounded-2xl shadow-md border p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <HeartPulse className="w-7 h-7 text-red-600" />
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Health & Fitness
                            </h2>
                        </div>

                        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                            <li>
                                Participants must be in good physical and mental health and
                                possess the necessary fitness level to undertake the trek.
                            </li>
                            <li>
                                It is strongly recommended to consult a medical professional
                                before participating, especially if you have any pre-existing
                                medical conditions.
                            </li>
                            <li>
                                Participants must inform the trek organizer about any
                                pre-existing medical conditions, allergies, or physical
                                limitations that may affect their participation.
                            </li>
                        </ul>
                    </section>

                    {/* Safety */}
                    <section className="bg-white rounded-2xl shadow-md border p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldCheck className="w-7 h-7 text-blue-600" />
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Safety
                            </h2>
                        </div>

                        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                            <li>
                                Participants must strictly follow the instructions of the trek
                                guide at all times to ensure safety.
                            </li>
                            <li>
                                The trek organizers reserve the right to modify or cancel the
                                trek in case of unforeseen circumstances or safety concerns.
                            </li>
                        </ul>
                    </section>

                    {/* Liability */}
                    <section className="bg-white rounded-2xl shadow-md border p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <AlertTriangle className="w-7 h-7 text-yellow-600" />
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Liability
                            </h2>
                        </div>

                        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                            <li>
                                Participants join the trek at their own risk. The organizers
                                shall not be held liable for any injury, accident, loss, or
                                damage during the trek.
                            </li>
                            <li>
                                Trekkar India does not take responsibility for loss or damage of
                                any personal belongings.
                            </li>
                            <li>
                                Participants are advised to have personal travel insurance that
                                covers adventure activities and trekking.
                            </li>
                        </ul>
                    </section>

                    {/* Itinerary Change */}
                    <section className="bg-white rounded-2xl shadow-md border p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Map className="w-7 h-7 text-purple-600" />
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Itinerary Changes
                            </h2>
                        </div>

                        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                            <li>
                                The trek organizer reserves the right to modify the itinerary
                                due to weather conditions, natural disasters, or other factors
                                beyond control.
                            </li>
                            <li>
                                Participants will be informed of significant itinerary changes
                                as and when they occur.
                            </li>
                        </ul>
                    </section>

                    {/* Environmental Responsibility */}
                    <section className="bg-white rounded-2xl shadow-md border p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Leaf className="w-7 h-7 text-green-600" />
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Environmental Responsibility
                            </h2>
                        </div>

                        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                            <li>
                                Participants must respect and preserve the natural environment
                                throughout the trip.
                            </li>
                            <li>
                                Littering, environmental damage, malpractice, or illegal
                                activities harmful to the ecosystem are strictly prohibited.
                            </li>
                        </ul>
                    </section>

                    {/* Code of Conduct */}
                    <section className="bg-white rounded-2xl shadow-md border p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="w-7 h-7 text-indigo-600" />
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Code of Conduct
                            </h2>
                        </div>

                        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                            <li>
                                Participants must respect the culture, ethnicity, environment,
                                and fellow trekkers.
                            </li>
                            <li>
                                Disrespectful, harmful, or illegal behavior may result in
                                immediate removal from the trek without any refund.
                            </li>
                        </ul>
                    </section>

                    {/* Final Acceptance */}
                    <section className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                        <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                        <p className="text-lg text-gray-800 font-medium">
                            By making the advance payment, you confirm that you have read,
                            understood, and agreed to all the above Terms & Conditions.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
