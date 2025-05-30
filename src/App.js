import React, { useState } from "react";

function App() {
  // Team data with short and full bios
  const teamMembers = [
    {
      name: "Alexa",
      role: "DeFi Explorer",
      image: process.env.PUBLIC_URL + "/images/AlexaAdams.jpg",
      shortBio: "Merging an entrepreneurial mindset with DeFi for real financial freedom.",
      fullBio:
        "With a background in hotel/property management, I've always been driven by a passion for creating value. Alongside this, I've developed a deep interest in breaking free from traditional financial systems, which led me to explore the transformative power of crypto and DeFi. By merging my entrepreneurial mindset with a commitment to financial freedom, I'm focused on helping others take charge of their financial futures.",
    },
    {
      name: "Dwayne",
      role: "Asset Manager & Moderator",
      image: process.env.PUBLIC_URL + "/images/Dwayne.jpg",
      shortBio: "Genesis Club & Support Discord Moderator. Multi-signal signer and office hours lead.",
      fullBio:
        "As a core member of ARCrypto, I manage community engagement, communication, and asset oversight. This includes monitoring trading signals, multi-signal signing, and overseeing IDO distribution tracking to ensure transparent, accurate records. I run breakout rooms and office hours to provide guidance, support, and strategic insights for the ARCrypto ecosystem.",
    },
    {
      name: "Matt",
      role: "Chief Operating Officer",
      image: process.env.PUBLIC_URL + "/images/Matt.jpg",
      shortBio: "Ensuring vision meets execution with systems, accountability, and sustained momentum.",
      fullBio:
        "As COO at ARCrypto, I translate the organization's vision into day-to-day execution. This means leading company operations and ensuring we align around priorities and move forward efficiently. From strategic planning to daily management, my focus is on building the systems and accountability that drive sustained growth.",
    },
    {
      name: "Thomas Frederick",
      role: "Coach & Master Teacher",
      image: process.env.PUBLIC_URL + "/images/Thomas.jpg",
      shortBio: "30+ years teaching/coaching, driven to demystify DeFi for financial empowerment.",
      fullBio:
        "With 30+ years as a master teacher and coach, I’m focused on using decentralized finance to pass down legacy wealth and investment wisdom to my seven children (and students). My journey into crypto began with the ARC in 2021, drawn by the mantra ‘Be your own bank!’ As a mathematician, idealist, and unapologetic rebel, I earned the nickname ObiWan Crytobi—resilience, innovation, and guidance in the world of decentralized finance. I’ve taken the hits, learned the lessons, and now my mission is to demystify DeFi and make financial empowerment accessible to all!",
    },
    {
      name: "Larry Schmidt",
      role: "Onboarding Director for Managed Vaults",
      image: process.env.PUBLIC_URL + "/images/Larry.jpg",
      shortBio: "25+ years in finance, facilitating seamless vault integration and DeFi education.",
      fullBio:
        "As Onboarding Director for Managed Vaults at ARCrypto, I leverage over 25 years of experience as a licensed financial professional to facilitate seamless asset integration into our platform. I’ve held roles at Smith Barney and Wachovia Securities, as well as operating my own independent financial services business. Previously licensed with Series 7, 63, 65, and 26, I specialize in a broad range of financial instruments, team building, and leadership. At ARCrypto, I'm committed to empowering clients through decentralized finance education and solutions.",
    },
  ];

  // Tracks which card is open (by index); null = none open
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleBio = (index) => {
    setExpandedIndex((current) => (current === index ? null : index));
  };

  return (
    // Use font-subheadline as the default on the entire page
    <div className="font-subheadline text-gray-800">

      {/* SECTION 1: HERO / VSL VIDEO + CTA */}
      <section className="bg-gradient-to-r from-[#1E56A0] to-blue-500 text-white py-16 px-4 text-center">
        <div className="container mx-auto">
          {/* LOGO at the top */}
          <img
            src={process.env.PUBLIC_URL + "/images/arc-logo.png"}
            alt="ARCrypto Logo"
            className="mx-auto mb-6 h-12 w-auto"
          />


          <h1 className="text-4xl md:text-5xl font-headline font-extrabold leading-tight mb-4">
            Discover How to Build Real Wealth With Crypto — Without Getting Wrecked in the Markets
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            ARCrypto helps you escape inflation, grow your wealth, and master the new rules of money — 
            even if you’re just getting started.
          </p>
          <div className="max-w-3xl mx-auto mb-8">
            <iframe
              className="w-full h-64 md:h-96 border-0 rounded shadow-lg"
              src="https://www.youtube.com/embed/XDyb9RYbm8I"
              title="VSL Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button className="bg-white text-[#1E56A0] font-content font-semibold py-3 px-8 rounded-full shadow-md
                            hover:shadow-lg transition-all duration-300 hover:bg-gray-200">
            Book a Free Strategy Call
          </button>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM (Part 1) */}
      <section className="bg-[#F9FAFB] py-20 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
          {/* Left Column: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-content font-bold mb-6 text-[#1E56A0]">
              The Truth About Why You’re Falling Behind Financially
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Over the past 5 years, inflation has silently stolen more than 22% of your purchasing power.
              That means if you’ve kept your money in cash or low-yield accounts, you’ve actually lost
              value — just by doing nothing.
            </p>
            <a
              href="#cta"
              className="inline-block bg-[#1E56A0] text-white font-semibold py-3 px-8 rounded-full shadow-md
                        hover:shadow-lg transition-all duration-300 hover:bg-blue-700"
            >
              Take Control Now
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Losing Financial Ground"
              className="mx-auto md:mx-0 rounded shadow-md"
            />
          </div>
        </div>
      </section>


      {/* COMBINED PROBLEM SECTIONS (PART 2 & PART 3) */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8">

            {/* LEFT BLOCK: PART 2 */}
            <div className="bg-[#F9FAFB] flex-1 rounded-lg shadow-md p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-subheadline font-bold mb-6 text-center md:text-left text-[#1E56A0]">
                You’re Not Earning Enough to Get Ahead
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Wages haven’t kept pace. Nearly half of Americans have less than $1,000 saved. Even if you’re working hard,
                you’re not gaining ground — and that’s not your fault. The game is rigged.
              </p>
            </div>

            {/* RIGHT BLOCK: PART 3 */}
            <div className="bg-[#F9FAFB] flex-1 rounded-lg shadow-md p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left text-[#1E56A0]">
                Investments Aren’t Beating Inflation
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Traditional assets like the S&P 500 and bonds are failing to grow fast enough. With inflation eating away your returns,
                your retirement strategy might already be outdated.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 5: THE SOLUTION — CRYPTO & DEFI */}
      <section className="bg-gradient-to-r from-[#1E56A0] to-blue-500 py-20 px-4 text-white">
        <div className="container mx-auto max-w-6xl">
          {/* Headline & Subtitle */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              There’s a Better Way — And It’s Already Working
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Decentralized Finance (DeFi) gives you direct access to the most powerful financial tools in the world —
              no banks, no middlemen, no permission required.
            </p>
          </div>

          {/* Features / Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white text-[#1E56A0] rounded-lg shadow-xl p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img
                  src="https://img.icons8.com/ios-filled/50/1E56A0/checkmark--v1.png"
                  alt="check icon"
                  className="w-8 h-8 mr-3"
                />
                <h3 className="text-xl font-bold">Transparent</h3>
              </div>
              <p className="text-gray-700">
                Everything happens on-chain, meaning real-time visibility into all transactions.
              </p>
            </div>

            <div className="bg-white text-[#1E56A0] rounded-lg shadow-xl p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img
                  src="https://img.icons8.com/ios-filled/50/1E56A0/checkmark--v1.png"
                  alt="check icon"
                  className="w-8 h-8 mr-3"
                />
                <h3 className="text-xl font-bold">Scarce</h3>
              </div>
              <p className="text-gray-700">
                Assets like Bitcoin can’t be inflated, offering a hedge against traditional currency devaluation.
              </p>
            </div>

            <div className="bg-white text-[#1E56A0] rounded-lg shadow-xl p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img
                  src="https://img.icons8.com/ios-filled/50/1E56A0/checkmark--v1.png"
                  alt="check icon"
                  className="w-8 h-8 mr-3"
                />
                <h3 className="text-xl font-bold">Powerful</h3>
              </div>
              <p className="text-gray-700">
                Earn yield, stake, lend, borrow, and grow your wealth—just like a bank does, but on your own terms.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a
              href="#cta"
              className="inline-block bg-white text-[#1E56A0] font-bold text-lg py-4 px-10 rounded-full shadow-md
                        hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              Start Earning With DeFi Now
            </a>
          </div>
        </div>
      </section>


      {/* SECTION 6: THE OPPORTUNITY VISUAL */}
      <section className="bg-[#F9FAFB] py-20 px-4 text-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1E56A0]">
              See the Difference for Yourself
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Traditional assets simply can’t compete with top crypto performance. Discover how
              much more you could be earning with DeFi-backed strategies.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left: Image or Chart */}
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Chart showing 5-year growth: BTC vs. Gold vs. S&P 500 vs. USD"
                className="w-full rounded shadow-md"
              />
            </div>

            {/* Right: Extra Info + CTA */}
            <div className="md:w-1/2 text-center md:text-left">
              <ul className="text-lg md:text-xl leading-relaxed space-y-4 mb-8">
                <li className="flex items-start">
                  <img
                    src="https://img.icons8.com/ios-filled/50/1E56A0/checkmark--v1.png"
                    alt="check icon"
                    className="w-6 h-6 mr-3 mt-1"
                  />
                  <span className="text-gray-700">
                    BTC has outperformed traditional assets by a significant margin over the last 5 years.
                  </span>
                </li>
                <li className="flex items-start">
                  <img
                    src="https://img.icons8.com/ios-filled/50/1E56A0/checkmark--v1.png"
                    alt="check icon"
                    className="w-6 h-6 mr-3 mt-1"
                  />
                  <span className="text-gray-700">
                    DeFi opportunities can compound gains even further through staking, lending, and yield farming.
                  </span>
                </li>
                <li className="flex items-start">
                  <img
                    src="https://img.icons8.com/ios-filled/50/1E56A0/checkmark--v1.png"
                    alt="check icon"
                    className="w-6 h-6 mr-3 mt-1"
                  />
                  <span className="text-gray-700">
                    Inflation and low-yield assets are eroding your wealth — take action before it’s too late.
                  </span>
                </li>
              </ul>
              <a
                href="#cta"
                className="inline-block bg-[#1E56A0] text-white font-bold py-3 px-8 rounded-full shadow-md
                          hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                Explore DeFi Growth
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 7: THE ULTIMATE SOLUTION — MANAGED VAULTs */}
      <section className="bg-white py-20 px-4 text-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1E56A0]">
              Introducing ARCrypto’s Done-For-You DeFi Vaults
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Most people lose money in crypto because they don’t know what they’re doing. Our Managed Vaults 
              solve that problem by giving you access to time-tested trading strategies — while you keep 
              full custody of your funds.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: Image */}
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/600x300"
                alt="Screenshots of top strategies / backtests"
                className="w-full rounded shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            {/* Right: Benefits + CTA */}
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <img
                    src="https://img.icons8.com/ios-filled/50/1E56A0/checkmark--v1.png"
                    alt="check icon"
                    className="w-6 h-6 mr-3 mt-1"
                  />
                  <div>
                    <strong className="text-[#1E56A0]">Expert Strategies:</strong>
                    <p className="text-gray-700">
                      Each vault is powered by proven, data-driven methods that aim to minimize risk and maximize yield.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <img
                    src="https://img.icons8.com/ios-filled/50/1E56A0/checkmark--v1.png"
                    alt="check icon"
                    className="w-6 h-6 mr-3 mt-1"
                  />
                  <div>
                    <strong className="text-[#1E56A0]">You Own Your Assets:</strong>
                    <p className="text-gray-700">
                      Unlike other platforms, you stay in control of your crypto — our vaults never require surrendering custody.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <img
                    src="https://img.icons8.com/ios-filled/50/1E56A0/checkmark--v1.png"
                    alt="check icon"
                    className="w-6 h-6 mr-3 mt-1"
                  />
                  <div>
                    <strong className="text-[#1E56A0]">Simple & Hands-Off:</strong>
                    <p className="text-gray-700">
                      No need to be a DeFi expert. Let our vault management handle the complex stuff while you watch your assets grow.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="#cta"
                  className="inline-block bg-[#1E56A0] text-white font-bold py-3 px-8 rounded-full shadow-md
                            hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  Secure My Vault Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 8: CTA BLOCK */}
      <section className="bg-gradient-to-r from-[#1E56A0] to-blue-500 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Crypto Portfolio Safely?
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed mb-8">
            Book your free strategy call now and let our experts map out a smarter,
            safer way to earn through crypto — without the confusion or risk of going it alone.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <a
              href="#book-call"
              className="bg-white text-[#1E56A0] font-bold text-lg py-3 px-8 rounded-full shadow-md
                        hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              Book a Free Strategy Call
            </a>

            {/* Secondary Info */}
            <p className="text-sm md:text-base italic text-gray-100 mt-4 md:mt-0">
              <span className="font-semibold">100% Free • No Hidden Fees</span> • 20-Minute Consultation
            </p>
          </div>
        </div>
      </section>


      {/* SECTION 9: VIDEO TESTIMONIALS */}
      <section className="bg-white py-20 px-4 text-gray-800">
        <div className="container mx-auto max-w-6xl">
          {/* Title & Subtitle */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1E56A0]">
              Real People. Real Results.
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Hear from real community members who’ve already transformed
              their finances with ARCrypto’s strategies.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#F9FAFB] rounded-lg shadow-md p-4 flex flex-col items-center">
              <iframe
                className="w-full h-64 rounded shadow-sm"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video Testimonial 1"
                allowFullScreen
              ></iframe>
              <p className="mt-4 text-sm text-gray-700 italic">
                “Thanks to ARCrypto, I finally understand DeFi and have
                grown my savings so much faster than before!”
              </p>
              <span className="mt-1 text-xs text-gray-500">— Happy User #1</span>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F9FAFB] rounded-lg shadow-md p-4 flex flex-col items-center">
              <iframe
                className="w-full h-64 rounded shadow-sm"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video Testimonial 2"
                allowFullScreen
              ></iframe>
              <p className="mt-4 text-sm text-gray-700 italic">
                “It’s hands-off and secure. I trust their team to manage
                my crypto and the results are stunning!”
              </p>
              <span className="mt-1 text-xs text-gray-500">— Happy User #2</span>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F9FAFB] rounded-lg shadow-md p-4 flex flex-col items-center">
              <iframe
                className="w-full h-64 rounded shadow-sm"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video Testimonial 3"
                allowFullScreen
              ></iframe>
              <p className="mt-4 text-sm text-gray-700 italic">
                “I was skeptical at first, but now I’m a believer. The
                passive returns are unreal!”
              </p>
              <span className="mt-1 text-xs text-gray-500">— Happy User #3</span>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 10: TEXT TESTIMONIALS */}
      <section className="bg-[#F9FAFB] py-20 px-4 text-gray-800">
        <div className="container mx-auto max-w-6xl">
          {/* Title & Subtitle */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E56A0] mb-4">
              What Our Community Is Saying
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Hundreds of members are already enjoying safer, smarter crypto gains with ARCrypto.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <p className="mb-4 text-lg text-gray-700 leading-relaxed">
                “ARCrypto changed my entire understanding of DeFi. Now I’m finally growing my portfolio safely.”
              </p>
              <span className="text-sm text-gray-500 mt-auto self-end italic">— User Testimonial #1</span>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <p className="mb-4 text-lg text-gray-700 leading-relaxed">
                “I was skeptical at first, but seeing the results in real-time convinced me to stay — absolutely worth it.”
              </p>
              <span className="text-sm text-gray-500 mt-auto self-end italic">— User Testimonial #2</span>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <p className="mb-4 text-lg text-gray-700 leading-relaxed">
                “I appreciate their transparency. Unlike traditional banks, you actually see what’s happening with your money.”
              </p>
              <span className="text-sm text-gray-500 mt-auto self-end italic">— User Testimonial #3</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a
              href="#book-call"
              className="bg-[#1E56A0] text-white font-semibold py-3 px-8 rounded-full shadow-md
                        hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </section>


      {/* SECTION 11: GVEN’S STRATEGY RESULTS */}
      <section className="bg-white py-20 px-4 text-gray-800">
        <div className="container mx-auto max-w-6xl">
          {/* Title & Subtitle */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E56A0] mb-4">
              See Our Own DeFi Vaults in Action
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              We don’t just talk about DeFi—our team actively uses these strategies.
              Discover how we leverage proven vaults to drive real gains.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side: Image / Chart */}
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Vault Gains, Backtests, Strategy Overviews"
                className="w-full rounded shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            {/* Right Side: Key Highlights + CTA */}
            <div className="md:w-1/2 text-center md:text-left space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <img
                    src="https://img.icons8.com/ios-filled/50/1E56A0/checkmark--v1.png"
                    alt="check icon"
                    className="w-6 h-6 mr-3 mt-1"
                  />
                  <div>
                    <strong className="text-[#1E56A0]">Live Results:</strong>
                    <p className="text-gray-700">
                      Track ongoing performance and see how our vaults adapt to market conditions in real-time.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <img
                    src="https://img.icons8.com/ios-filled/50/1E56A0/checkmark--v1.png"
                    alt="check icon"
                    className="w-6 h-6 mr-3 mt-1"
                  />
                  <div>
                    <strong className="text-[#1E56A0]">Battle-Tested Strategies:</strong>
                    <p className="text-gray-700">
                      Our backtests span bull and bear markets—giving you confidence in both short and long-term growth.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <img
                    src="https://img.icons8.com/ios-filled/50/1E56A0/checkmark--v1.png"
                    alt="check icon"
                    className="w-6 h-6 mr-3 mt-1"
                  />
                  <div>
                    <strong className="text-[#1E56A0]">Hands-Off Earning:</strong>
                    <p className="text-gray-700">
                      Let us do the heavy lifting while you reap the rewards. Sit back and watch your assets flourish.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="#book-call"
                  className="inline-block bg-[#1E56A0] text-white font-bold py-3 px-8 rounded-full shadow-md
                            hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  Book a Free Strategy Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 12: MEET THE TEAM with Clickable Cards */}
      <section className="bg-[#F9FAFB] py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Backed by Experts. Built for You.</h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
            The ARCrypto team includes traders, developers, and analysts with decades of experience in both crypto and traditional
            markets. Now we’re using that experience to help you win.
          </p>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onClick={() => toggleBio(index)}
                className="bg-white w-64 rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl
                           transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full mx-auto mb-4 w-24 h-24 object-cover"
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                {/* Short Bio always visible */}
                <p className="text-xs text-gray-600 mt-2">{member.shortBio}</p>

                {/* Full Bio only shows if clicked */}
                {expandedIndex === index && (
                  <div className="mt-3 text-sm text-gray-700 text-left">
                    <hr className="my-2" />
                    {member.fullBio}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button className="bg-[#1E56A0] text-white font-semibold py-3 px-8 rounded-full shadow-md
                               hover:shadow-lg transition-all duration-300 hover:bg-blue-700">
              Book a Free Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION baby */}
      <footer className="bg-[#1E56A0] text-white py-10 px-4">
        <div className="container mx-auto max-w-6xl">

          {/* Top Row: Brand & Quick Links */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            {/* Brand/About */}
            <div className="md:w-1/3">
              <img
                src={process.env.PUBLIC_URL + "/images/arc-logo.png"}
                alt="ARCrypto Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="text-sm md:text-base leading-relaxed">
                ARCrypto helps everyday people harness the power of DeFi safely and effectively.
                From vault strategies to community support, we’re here to make crypto work for you.
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="md:w-1/3 flex flex-col gap-2 text-sm md:text-base mt-4 md:mt-0">
              <a href="#hero" className="hover:underline">
                Home
              </a>
              <a href="#why-crypto" className="hover:underline">
                Why Crypto?
              </a>
              <a href="#vaults" className="hover:underline">
                Managed Vaults
              </a>
              <a href="#testimonials" className="hover:underline">
                Testimonials
              </a>
              <a href="#team" className="hover:underline">
                Our Team
              </a>
            </nav>

            {/* Social Media */}
            <div className="md:w-1/3 flex flex-col gap-2 mt-4 md:mt-0">
              <span className="font-semibold mb-1">Connect with Us</span>
              <div className="flex items-center gap-4">
                {/* Placeholder icons */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/ios-filled/30/ffffff/twitter--v1.png"
                    alt="Twitter"
                    className="hover:opacity-80"
                  />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/ios-filled/30/ffffff/facebook--v1.png"
                    alt="Facebook"
                    className="hover:opacity-80"
                  />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/ios-filled/30/ffffff/linkedin.png"
                    alt="LinkedIn"
                    className="hover:opacity-80"
                  />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/ios-filled/30/ffffff/discord-logo.png"
                    alt="Discord"
                    className="hover:opacity-80"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Row: Disclaimer + Copyright */}
          <div className="border-t border-white/25 pt-4 text-center md:text-left">
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Disclaimer: The information provided on this site does not constitute investment advice, 
              financial advice, or trading advice. Always do your own research and never invest more than 
              you are willing to lose. ARCrypto is not responsible for any financial losses.
            </p>
            <p className="mt-2 text-xs md:text-sm text-white/80">
              &copy; {new Date().getFullYear()} ARCrypto. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
