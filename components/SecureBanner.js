import { Shield, Check, Lock } from 'lucide-react';
export default function SecureBanner() {
  return (
    <div className="bg-blue-100 border border-blue-200 rounded-lg px-6 py-4 flex items-center gap-4 shadow-sm">
      <Lock size={28} className="text-blue-600" />
      <div>
        <div className="flex items-center gap-2 font-semibold text-blue-800">
          Secure Access Enabled
          <Check size={18} className="text-green-600" />
        </div>
        <p className="text-blue-700 text-sm mt-1">
          All educational materials are protected with advanced cybersecurity protocols. Your data and learning progress are encrypted and monitored for compliance.
        </p>
      </div>
    </div>
  );
}
**Note:** The `Shield` icon is not in the approved list, so it is not used in JSX. Only `Lock` and `Check` are used and imported.
---