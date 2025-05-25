import { HandHeartIcon } from "@phosphor-icons/react";

export default function Donor({ donor }) {
  return (
    <div className="flex items-center gap-4 text-primary-700">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-200">
        <HandHeartIcon size={32} className="text-primary-500" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <p>{donor.firstName}</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="font-semibold text-primary-900">${donor.amount}</p>
          <small>({donor.timeAgo})</small>
        </div>
      </div>
    </div>
  );
}
