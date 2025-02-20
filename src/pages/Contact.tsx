import { useState } from "react";
import {BackgroundLines} from "../components/BackgroundLines.tsx";
import {Navigation} from "../components/Navigation.tsx";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage(null);
        setErrorMessage(null);
        try {

            await new Promise((resolve) => setTimeout(resolve, 2000));

            setSuccessMessage("Your message has been sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setErrorMessage("An error occurred. Please try again.");
        }

        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen w-full bg-black text-white relative">
            <BackgroundLines />
            <Navigation />
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-16">
            <h2 className="text-4xl font-bold text-green-400 mb-6">Contact Me</h2>
            <p className="text-gray-300 mb-8 text-center max-w-lg">
                Feel free to reach out via the form below. I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-400 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-green-400 focus:ring focus:ring-green-400 outline-none text-white"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-400 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-green-400 focus:ring focus:ring-green-400 outline-none text-white"
                    />
                </div>

                {/* Message */}
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-400 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-green-400 focus:ring focus:ring-green-400 outline-none text-white"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition disabled:bg-green-400"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Success & Error Messages */}
                {successMessage && <p className="mt-4 text-green-400 text-center">{successMessage}</p>}
                {errorMessage && <p className="mt-4 text-red-400 text-center">{errorMessage}</p>}
            </form>
        </section>
        </div>
    );
};

export default Contact;
