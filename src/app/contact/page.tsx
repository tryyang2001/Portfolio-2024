import PageTitle from "@/components/common/PageTitle";
import ContactSection from "@/components/contact/ContactSection";

interface Props {}

const page = ({}: Props) => {
  return (
    <div className="lg:px-32 xl:px-64">
      <PageTitle>
        Contact <span className="text-clr-secondary">Me</span>
      </PageTitle>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default page;
