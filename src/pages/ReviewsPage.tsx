
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ReviewCarousel from "@/components/ReviewCarousel";

const ReviewsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto py-12 px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Customer Testimonials</h1>
            <p className="text-muted-foreground text-lg">
              Hear what our satisfied customers have to say about their experience with VahanSurakshaKavach insurance.
            </p>
          </div>
          <ReviewCarousel />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewsPage;
