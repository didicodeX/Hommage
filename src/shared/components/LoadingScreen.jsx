import { Spinner } from "@phosphor-icons/react";

export default function LoadingScreen() {
  return (
    <div className="flex justify-center items-center fixed inset-0 z-50 bg-primary-50">
      <Spinner size={32} className="animate-spin w-6 h-6 text-primary-500" />
    </div>
  );
}
