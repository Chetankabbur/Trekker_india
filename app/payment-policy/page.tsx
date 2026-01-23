import Navigation from "@/components/navigation";
import { CreditCard, Wallet, AlertCircle } from "lucide-react";

export default function PaymentPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navigation />

            {/* Center Content */}
            <div className="flex flex-1 items-center justify-center px-4 pt-24 md:pt-12">
                <div className="w-full max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
                        Payment Policy
                    </h1>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-10 space-y-6">

                        {/* Advance Payment */}
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
                            <Wallet className="text-blue-600 w-6 h-6 mt-1" />
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                                <span className="font-semibold text-blue-700">
                                    Payment & Advance:
                                </span>{" "}
                                An advance payment of <strong>30%</strong> is required for booking
                                confirmation. The remaining <strong>70%</strong> must be paid
                                <strong> at the time of boarding</strong>.
                            </p>
                        </div>

                        {/* Payment Modes */}
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
                            <CreditCard className="text-green-600 w-6 h-6 mt-1" />
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                                <span className="font-semibold text-green-700">
                                    Accepted Payment Methods:
                                </span>{" "}
                                Online Bank Transfer, <strong>UPI Payments</strong>, and
                                <strong> Cash only</strong>.
                            </p>
                        </div>

                        {/* Important Note */}
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                            <AlertCircle className="text-yellow-600 w-6 h-6 mt-1" />
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                                <span className="font-semibold text-yellow-700">
                                    Important:
                                </span>{" "}
                                Bookings are confirmed only after payment acknowledgment by
                                Trekkar India. Failure to pay the balance amount may result in
                                cancellation.
                            </p>
                        </div>
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        Please ensure timely payments to avoid cancellation or inconvenience.
                    </p>
                </div>
            </div>
        </div>
    );
}
