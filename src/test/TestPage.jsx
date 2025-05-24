import { Smiley, Heart, Horse } from "phosphor-react";
import Footer from "../shared/components/Footer";

export default function TestPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Test Page</h1>
      <p className="text-lg mb-2">This is a test page.</p>
      <p className="text-lg mb-2">You can add your test content here.</p>
      <Smiley />
      <Heart size={24} weight="fill" className="text-error-500 fill-error-500" />
      <Horse weight="duotone" />
      <Footer />
    </div>
  );
}
