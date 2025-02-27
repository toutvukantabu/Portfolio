import React from "react";
import Layout from "@/presentation/layouts/Layout.tsx";
import ContactSection from "@/presentation/components/contact/ContactSection";

const ContactPage: React.FC = () => {


    return (
        <Layout>
            <ContactSection/>
        </Layout>
    );
};

export default ContactPage;
