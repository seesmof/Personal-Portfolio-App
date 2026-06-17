import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50">
      <div className="flex mx-auto max-w-3xl flex-col gap-3 p-3">
        <Navbar />
      </div>
    </div>
  );
}
