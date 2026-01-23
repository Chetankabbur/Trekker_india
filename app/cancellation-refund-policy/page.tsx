import Navigation from "@/components/navigation";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function CancellationRefundPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">

            {/* Center Content */}
            <div className="flex flex-1 items-center justify-center px-4 pt-24 md:pt-0">
                <div className="w-full max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">
                        Cancellation & Refund Policy
                    </h1>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-10 space-y-6">
                        {/* Full Refund */}
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
                            <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                                <span className="font-semibold text-green-700">
                                    Full Refund:
                                </span>{" "}
                                Cancellations made <strong>7 days prior</strong> to the date of journey
                                are eligible for a full refund.
                            </p>
                        </div>

                        {/* Partial Refund */}
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                            <AlertTriangle className="text-yellow-600 w-6 h-6 mt-1" />
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                                <span className="font-semibold text-yellow-700">
                                    Partial Refund:
                                </span>{" "}
                                Cancellations made <strong>within 4 days</strong> of the journey date
                                may incur a cancellation fee.
                            </p>
                        </div>

                        {/* No Refund */}
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
                            <XCircle className="text-red-600 w-6 h-6 mt-1" />
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                                <span className="font-semibold text-red-700">
                                    No Refund:
                                </span>{" "}
                                No refund shall be initiated for cancellations made{" "}
                                <strong>within 24 hours</strong> of the journey date.
                            </p>
                        </div>
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        Refunds (if applicable) will be processed to the original payment method.
                    </p>
                </div>
            </div>
        </div>

    );
}
