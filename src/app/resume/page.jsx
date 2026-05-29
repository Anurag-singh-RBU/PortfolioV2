import Layout from "@/components/layout/layout";
import ResumeViewer from "@/components/sections/resume-viewer";

export const metadata = {
  title: "Resume",
  description: "View Anurag Singh's resume and professional experience",
};

export default function ResumePage() {
  return (
    <Layout
      showHeader
      title="Resume"
      subtitle="Professional background and experience"
    >
      <ResumeViewer />
    </Layout>
  );
}
