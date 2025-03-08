
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground mb-10">
              Find answers to common questions about motor insurance and our services.
            </p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">General Insurance Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">Is motor insurance mandatory in India?</AccordionTrigger>
                    <AccordionContent>
                      Yes, third-party liability insurance is mandatory for all vehicles plying on Indian roads as per the Motor Vehicles Act. It protects you against financial liabilities arising from damage caused to third parties. However, comprehensive insurance that also covers own damage is optional but recommended.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">What is IDV (Insured Declared Value)?</AccordionTrigger>
                    <AccordionContent>
                      IDV is the current market value of your vehicle after accounting for depreciation based on the vehicle's age. It is the maximum amount payable by the insurer in case of total loss or theft. A higher IDV means higher premium and vice versa.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">What is No Claim Bonus (NCB)?</AccordionTrigger>
                    <AccordionContent>
                      NCB is a discount on your premium that you earn for each claim-free year. It starts at 20% after the first claim-free year and increases progressively to 50% after 5 consecutive claim-free years. NCB is transferable when you change your vehicle or insurer.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">Can I transfer my insurance policy to a new vehicle?</AccordionTrigger>
                    <AccordionContent>
                      No, insurance policies are vehicle-specific and cannot be transferred to a new vehicle. However, you can cancel your existing policy and get a refund for the unused premium period (subject to terms), and then purchase a new policy for your new vehicle. Your accumulated NCB can be transferred to the new policy.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Policy and Coverage Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="policy-1">
                    <AccordionTrigger className="text-left">What does comprehensive insurance cover?</AccordionTrigger>
                    <AccordionContent>
                      Comprehensive insurance covers both third-party liabilities and damages to your own vehicle. This includes damage due to accidents, theft, fire, natural calamities (flood, earthquake), man-made disasters (riots, strikes), and personal accident cover for the owner-driver. Additional coverage can be added through various add-ons.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="policy-2">
                    <AccordionTrigger className="text-left">What is not covered under motor insurance?</AccordionTrigger>
                    <AccordionContent>
                      Common exclusions include: normal wear and tear, mechanical/electrical breakdowns, damage due to driving under influence of alcohol/drugs, damage outside geographical limits, consequential loss, contractual liability, damage to tires/tubes unless the vehicle is damaged at the same time, and war or nuclear perils.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="policy-3">
                    <AccordionTrigger className="text-left">What add-ons should I consider for my policy?</AccordionTrigger>
                    <AccordionContent>
                      Popular add-ons include: Zero Depreciation (for new vehicles), Engine Protection (for flood-prone areas), Return to Invoice (for new vehicles), Roadside Assistance, NCB Protection, and Consumables Cover. The best add-ons for you depend on your vehicle's age, usage pattern, and specific risks in your area.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="policy-4">
                    <AccordionTrigger className="text-left">How do I renew my policy?</AccordionTrigger>
                    <AccordionContent>
                      You can renew your policy easily through our website, mobile app, or by contacting our customer care. We recommend renewing at least 7 days before expiry to ensure continuous coverage. If your policy has expired for more than 90 days, your vehicle may need inspection before renewal, and you might lose your accumulated NCB.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Claims Related Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="claim-1">
                    <AccordionTrigger className="text-left">How do I file a claim?</AccordionTrigger>
                    <AccordionContent>
                      To file a claim, notify us immediately through our mobile app, customer care (1800-VAHAN-HELP), or email. For accidents, file an FIR at the nearest police station. Submit the claim form along with necessary documents like policy copy, RC, driving license, and photos of the damaged vehicle. Our surveyor will inspect the vehicle and process your claim accordingly.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="claim-2">
                    <AccordionTrigger className="text-left">What is cashless claim facility?</AccordionTrigger>
                    <AccordionContent>
                      Cashless claim facility allows you to get your vehicle repaired at our network garages without paying for the approved repairs upfront. We settle the bill directly with the garage. This simplifies the claim process, reduces paperwork, and speeds up repairs. To avail this, take your vehicle to any of our 5000+ network garages and inform our claims team.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="claim-3">
                    <AccordionTrigger className="text-left">Will making a claim affect my No Claim Bonus?</AccordionTrigger>
                    <AccordionContent>
                      Yes, making any claim where your insurance company pays for damages will reset your NCB to zero for the next policy year. However, if you have NCB Protection add-on, you can make up to one claim per policy year without losing your NCB. Also, small claims that you pay out of pocket don't affect your NCB.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="claim-4">
                    <AccordionTrigger className="text-left">What happens in case of total loss or theft?</AccordionTrigger>
                    <AccordionContent>
                      For total loss (damage beyond repair or repair costs exceeding 75% of IDV) or theft, the insurance company pays the IDV of your vehicle after deducting the policy excess. For theft claims, there's typically a 90-day waiting period for police investigation before settlement. You'll need to transfer the RC in the insurance company's name and submit all original keys (for theft claims).
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Company and Service Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="service-1">
                    <AccordionTrigger className="text-left">How can I contact customer support?</AccordionTrigger>
                    <AccordionContent>
                      You can reach our customer support team through:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Phone: 1800-VAHAN-HELP (24x7 helpline)</li>
                        <li>Email: support@vahankavach.in</li>
                        <li>Mobile App: Chat with support</li>
                        <li>Website: Live chat or contact form</li>
                        <li>WhatsApp: 7011217296</li>
                        <li>Telegram: 9013488512</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="service-2">
                    <AccordionTrigger className="text-left">How do I download my policy documents?</AccordionTrigger>
                    <AccordionContent>
                      You can download your policy documents by logging into your account on our website or mobile app. Navigate to "My Policies" section, select the policy, and click on "Download Policy Document". You can also request a copy through email by contacting our customer support.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="service-3">
                    <AccordionTrigger className="text-left">What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      We accept various payment methods including credit/debit cards, net banking, UPI (GPay, PhonePe, BHIM), mobile wallets, and EMI options through select banks. All our payment gateways are secure and encrypted to ensure your financial information remains safe.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="service-4">
                    <AccordionTrigger className="text-left">Is there a mobile app available?</AccordionTrigger>
                    <AccordionContent>
                      Yes, our mobile app is available for both Android and iOS devices. The app allows you to buy and renew policies, raise and track claims, download policy documents, locate network garages, contact roadside assistance, and much more. You can download it from Google Play Store or Apple App Store.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Still Have Questions?</h3>
              <p className="mb-4">Our customer support team is ready to assist you with any specific questions or concerns.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:1800-VAHAN-HELP" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Call Us
                </a>
                <a 
                  href="mailto:support@vahankavach.in" 
                  className="inline-block bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
