import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#002E5D] mb-8">About The Hub</h1>
        
        <div className="prose lg:prose-xl text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p>
              The BYU Hub was founded to solve a simple problem: talented students want to do research, 
              and faculty need help, but the connection process is fragmented. We are building the 
              infrastructure to make academic collaboration seamless.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Leadership</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Bill Tayler:</strong> Faculty Advisor, Marriott School of Business.</li>
              <li><strong>Britt Berrett:</strong> Managing Director, Healthcare Leadership Collaborative.</li>
              <li><strong>Isaac Wilkins:</strong> Founder & Student Lead.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">The Vision</h2>
            <p>
              Starting with a pilot of 10 projects in Spring 2026, The Hub aims to scale to cover 
              Life Sciences, Engineering, and Social Sciences by Fall 2026.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}