import { FileText, Eye, EyeOff, Download, Lock } from 'lucide-react';
export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow p-5 flex flex-col gap-3 border border-gray-100">
      <div className="flex items-center gap-2 mb-2">
        <FileText size={22} className="text-blue-600" />
        <span className="font-semibold text-lg">{course.title}</span>
        {course.secure && (
          <Lock size={18} className="ml-2 text-red-500" title="Secure Content" />
        )}
      </div>
      <p className="text-gray-600 flex-1">{course.description}</p>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          {course.secure ? (
            <EyeOff size={18} className="text-gray-400" title="Restricted Access" />
          ) : (
            <Eye size={18} className="text-green-500" title="Open Access" />
          )}
          <span className="text-xs text-gray-500">{course.fileType.toUpperCase()}</span>
        </div>
        <a
          href={course.downloadLink}
          className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"
          download
        >
          <Download size={16} />
          Download
        </a>
      </div>
    </div>
  );
}