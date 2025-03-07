
import VehicleProtectionForm from "@/components/VehicleProtectionForm";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const VehicleProtectionPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow bg-gray-50">
        <VehicleProtectionForm />
      </main>
      <Footer />
    </div>
  );
};

export default VehicleProtectionPage;
