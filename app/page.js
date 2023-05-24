import Header from "../components/Header";
import TopCards from "@components/TopCards ";
import BarChart from "@components/BarChart ";
import RecentOrders from "@components/RecentOrders ";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <TopCards />
      <div className="grid p-4 md:grid-cols-3 grid-cols-1 gap-4 ml-20">
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  );
}
