import { Navbar } from "@/components/Navbar";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <html lang="en">
      <body
        className={" bg-gradient-to-r from-slate-900 to-slate-800 bg-fixed "}
      >
        <Navbar />
        <div className="min-h-[100vh] py-[80px] text-white max-w-[1400px] w-[95%] m-auto">
          <Stack />
        </div>
      </body>
    </html>
  );
}
