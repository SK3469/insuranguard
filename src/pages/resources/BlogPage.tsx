
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CalendarIcon, Clock, User } from "lucide-react";

// Sample blog post data - in a real application, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "Understanding the New Motor Vehicle Act 2023: What's Changed?",
    excerpt: "The new Motor Vehicle Act brings significant changes to insurance requirements, penalties, and safety standards. Here's what every vehicle owner needs to know.",
    author: "Aditya Sharma",
    date: "April 15, 2023",
    readTime: "7 min read",
    category: "Legal Updates",
    imageUrl: "https://images.unsplash.com/photo-1592853598064-a3a5f647fba5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Electric Vehicle Insurance: Special Considerations",
    excerpt: "As electric vehicles become more popular in India, insurance needs are evolving. Learn about the unique coverage requirements for your EV.",
    author: "Priya Mehta",
    date: "March 22, 2023",
    readTime: "5 min read",
    category: "Electric Vehicles",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba13938c7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Monsoon Ready: Protecting Your Vehicle During Heavy Rains",
    excerpt: "Monsoon season can wreak havoc on your vehicle. Discover practical tips to prevent water damage and what insurance coverage you need.",
    author: "Rajesh Kumar",
    date: "February 10, 2023",
    readTime: "6 min read",
    category: "Seasonal Tips",
    imageUrl: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Zero Depreciation vs. Standard Comprehensive Insurance",
    excerpt: "Is paying extra for zero depreciation coverage worth it? We break down the cost-benefit analysis for different vehicle ages and usage patterns.",
    author: "Neha Singh",
    date: "January 5, 2023",
    readTime: "8 min read",
    category: "Insurance Guide",
    imageUrl: "https://images.unsplash.com/photo-1529369623266-f5264b696110?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "How Telematics is Changing Motor Insurance in India",
    excerpt: "Usage-based insurance and telematics devices are revolutionizing how premiums are calculated. Learn how good driving can now save you money.",
    author: "Vikram Patil",
    date: "December 18, 2022",
    readTime: "6 min read",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Top 10 Myths About Motor Insurance Debunked",
    excerpt: "From 'red cars cost more to insure' to 'insurance covers all drivers' - we debunk common misconceptions about motor insurance in India.",
    author: "Anjali Desai",
    date: "November 3, 2022",
    readTime: "9 min read",
    category: "Myth Busters",
    imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop"
  }
];

const categories = [
  "All Categories", "Insurance Guide", "Legal Updates", "Technology", 
  "Electric Vehicles", "Seasonal Tips", "Myth Busters", "Claims Advice"
];

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Insurance Blog</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert insights, tips, and guides to help you make informed decisions about motor insurance.
            </p>
            
            {/* Featured Post */}
            <div className="relative rounded-xl overflow-hidden mb-12 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1200&auto=format&fit=crop" 
                alt="Featured blog post" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-3">
                  Featured Article
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  How to Choose the Perfect Insurance Coverage for Your New Vehicle
                </h2>
                <p className="text-gray-200 mb-4 max-w-3xl">
                  Buying a new vehicle is exciting, but choosing the right insurance can be overwhelming. 
                  This comprehensive guide walks you through the essential coverages and how to customize 
                  your policy for optimal protection.
                </p>
                <div className="flex items-center text-gray-300 text-sm">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">Vikram Rathore</span>
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span className="mr-4">May 1, 2023</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>10 min read</span>
                </div>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="mb-10 overflow-x-auto">
              <div className="flex space-x-2 pb-2">
                {categories.map(category => (
                  <button 
                    key={category} 
                    className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap 
                      ${category === 'All Categories' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2 py-1 bg-white/90 text-blue-600 text-xs font-medium rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="mt-12 text-center">
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Load More Articles
              </button>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-16 p-8 bg-blue-50 rounded-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground mb-6">
                  Get the latest insurance tips, industry updates, and exclusive offers delivered to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                
                <p className="text-xs text-muted-foreground mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive insurance-related emails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
