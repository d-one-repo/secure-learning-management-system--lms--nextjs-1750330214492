import { Home, User, Settings, ChevronRight, FileText, Folder, Lock, Eye, Download } from 'lucide-react';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';
import SecureBanner from '../components/SecureBanner';
const sampleCourses = [
  {
    id: 1,
    title: "Minimally Invasive Surgery Techniques",
    description: "Comprehensive overview of the latest minimally invasive procedures.",
    fileType: "pdf",
    secure: true,
    downloadLink: "#"
  },
  {
    id: 2,
    title: "Patient Data Privacy in Healthcare",
    description: "Best practices for handling sensitive patient information.",
    fileType: "pdf",
    secure: true,
    downloadLink: "#"
  },
  {
    id: 3,
    title: "Robotic Surgery: Fundamentals",
    description: "Introduction to robotic-assisted surgical systems.",
    fileType: "video",
    secure: false,
    downloadLink: "#"
  }
];
export default function HomePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <SecureBanner />
        <div className="flex items-center gap-2 mt-8 mb-4">
          <Home size={24} />
          <ChevronRight size={16} />
          <span className="text-lg font-semibold">Dashboard</span>
        </div>
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Folder size={24} />
          Secure Medical Education Library
        </h1>
        <p className="mb-6 text-gray-600">
          Welcome, Elsbeth Headley. Access your latest CME materials securely.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </Layout>
  );
}