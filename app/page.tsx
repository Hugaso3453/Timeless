import TestBox from "@/components/TestBox";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Timeless</h1>
      <p className="text-gray-500">Next.js App Successfully Configured</p>

      <TestBox />
    </main>
  );
}
