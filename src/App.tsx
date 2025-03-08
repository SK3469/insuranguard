
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VehicleProtectionPage from "./pages/VehicleProtectionPage";
import ReviewsPage from "./pages/ReviewsPage";
import ComprehensiveInsurancePage from "./pages/products/ComprehensiveInsurancePage";
import ThirdPartyLiabilityPage from "./pages/products/ThirdPartyLiabilityPage";
import OwnDamageCoverPage from "./pages/products/OwnDamageCoverPage";
import AddOnCoveragesPage from "./pages/products/AddOnCoveragesPage";
import CommercialVehicleInsurancePage from "./pages/products/CommercialVehicleInsurancePage";
import InsuranceGuidePage from "./pages/resources/InsuranceGuidePage";
import ClaimProcessPage from "./pages/resources/ClaimProcessPage";
import FAQPage from "./pages/resources/FAQPage";
import NetworkGaragesPage from "./pages/resources/NetworkGaragesPage";
import BlogPage from "./pages/resources/BlogPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/protection" element={<VehicleProtectionPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          
          {/* Product Pages */}
          <Route path="/products/comprehensive-insurance" element={<ComprehensiveInsurancePage />} />
          <Route path="/products/third-party-liability" element={<ThirdPartyLiabilityPage />} />
          <Route path="/products/own-damage-cover" element={<OwnDamageCoverPage />} />
          <Route path="/products/add-on-coverages" element={<AddOnCoveragesPage />} />
          <Route path="/products/commercial-vehicle-insurance" element={<CommercialVehicleInsurancePage />} />
          
          {/* Resource Pages */}
          <Route path="/resources/insurance-guide" element={<InsuranceGuidePage />} />
          <Route path="/resources/claim-process" element={<ClaimProcessPage />} />
          <Route path="/resources/faq" element={<FAQPage />} />
          <Route path="/resources/network-garages" element={<NetworkGaragesPage />} />
          <Route path="/resources/blog" element={<BlogPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
