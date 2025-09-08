import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Palette,
  Clapperboard,
  Music,
  Video,
  Mic,
  Users,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Custom CSS override for Swiper arrows
const swiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    color: #b91c1c !important; /* red */
  }
`;

// Utility
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Custom colors
const COLORS = {
  background: "#000000",
  accentRed: "#B91C1C",
  accentBlue: "#1E2A39",
};

// Data
const CLUB_INFO = {
  title: "Kalakrithi",
  tagline: "Discover, Create, Celebrate—Be a Part of Our Cultural Family!",
  description: `Welcome to Kalakrithi – The Cultural Soul of GITAM!

One of the oldest and most celebrated cultural clubs of GITAM University, Kalakrithi has been the heartbeat of campus life for over a decade. It is more than just a club—it is a festival of art, music, dance, theatre, and expression, where talent meets opportunity and creativity knows no limits.

Kalakrithi is a family of five vibrant clubs:
• Dance Club – setting the stage ablaze with electrifying flash mobs.  
• Anchoring Club – the charismatic hosts behind every unforgettable event.  
• Phonia – The Music Club – creating magical moments with soulful flash jams.  
• Faces – The Theatre Club – stirring minds with impactful nukkad nataks.  
• Creative Arts – celebrating imagination through art, literature, and poetry, and curating Illustra, an enchanting cultural evening featuring soul-stirring Sufi Nights.  

Together, they form the vibrant heartbeat of Kalakrithi.

All year round, Kalakrithi keeps the campus buzzing with iconic events—Friendship Bonanza on Friendship Day, surprise flash mobs that spread energy everywhere, musical flash jams that echo in every corner, thought-provoking nukkad nataks, and the artistic brilliance of Illustra.

At Kalakrithi, we do not just organize events—we create experiences. Experiences that unite hearts, celebrate diversity, and keep the cultural spirit of GITAM alive.`,
  location: "Open Audi, GITAM",
  contacts: [
    { name: "Deepak Raj", phone: "+91 91003 15761" },
    { name: "Kalyan Raj", phone: "+91 93925 16660" },
  ],
  email: "kalakrithi_vzg@gitam.in",
  heroVideo: "/video/kalakrithi-video.mp4",
  heroImg: "/kk.jpg",
  gallery: [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.JPG",
  ],
  subclubs: [
    {
      name: "Anchoring Club",
      desc: "Master stage presence, crowd work, and the art of public speaking.",
      icon: Mic,
      img: "/logos/AC.png",
      form: "https://docs.google.com/forms/d/e/1FAIpQLSdHw9TLmuwrV4tcQ9kprIkhpMR6mvvK4W-gUoYtEqMCXziUNA/viewform?usp=header",
    },
    {
      name: "Creative Arts",
      desc: "Sketching, painting, crafts, and poetry — hands-on spaces for visual storytelling and expression.",
      icon: Palette,
      img: "/logos/CA1.png",
      form: "https://docs.google.com/forms/d/e/1FAIpQLScSClaQ_r8_JaoeS-22AzeMwXFoT1ZdhefEx8rXc2nJcJ_x8Q/viewform?usp=header",
    },
    {
      name: "Dance Club",
      desc: "Classical, folk, and modern forms — bringing energy to every stage with captivating performances.",
      icon: Users,
      img: "/logos/DC.png",
      form: "https://docs.google.com/forms/d/e/1FAIpQLSesYROOA51l4n4s5R68guYIYmFLn6MiZ3RvZocG8cPu3wueyA/viewform",
    },
    {
      name: "Faces Theatre Club",
      desc: "From street plays to stage dramas — where stories come alive through powerful performances.",
      icon: Clapperboard,
      img: "/logos/Faces.jpg",
      form: "https://docs.google.com/forms/d/e/1FAIpQLSdYf9hwXEeN0K6R1dMlM7JJZ7TRIRPRJDJ9Co5LYbRHdNE0jg/viewform?usp=dialog",
    },
    {
      name: "Phonia",
      desc: "Where voices and instruments unite — spreading rhythm and melody through flash jams  and soulful performances.",
      icon: Music,
      img: "/logos/phonia.jpg",
      form: "https://docs.google.com/forms/d/e/1FAIpQLScUxLrTm_pwEzOJHDXpUzrVCb8f9pU6tRvGamoh4GUYaODuxw/viewform?usp=header",
    },
    {
      name: "Design & Video Editing",
      desc: "Graphics, reels, edits — visual media for stories that move.",
      icon: Video,
      img: "/logos/Design-and-Video-editing.png",
      form: "https://docs.google.com/forms/d/e/1FAIpQLSdKHhVwOBCStkWvIxXzzvzkrVzCLloKALlY0nj-f4kQCA4fHg/viewform?usp=header",
    },
  ],
};

function Card({ children }) {
  return (
    <div
      className="rounded-2xl shadow-md overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {children}
    </div>
  );
}

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={cn("relative w-full py-16 px-6", className)}>
      {children}
    </section>
  );
}

export default function KalakrithiPage() {
  return (
    <div
      className="min-h-screen font-sans text-white"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* ✅ Inject custom Swiper styles */}
      <style>{swiperStyles}</style>

      {/* Navbar */}
     <header
        className="flex items-center justify-between px-6 py-4 border-b relative"
        style={{ borderColor: COLORS.accentRed }}
      >
        <img
          src="/logos/Gitam.jpg"
          alt="GITAM Logo"
          className="h-12 w-12 object-contain rounded-full border border-red-600"
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3">
          <img
            src="/logos/love.png"
            alt="Kalakrithi Logo"
            className="h-16 w-16 object-contain rounded-full border border-red-600"
          />
          <h1 className="text-2xl font-bold text-white">{CLUB_INFO.title}</h1>
        </div>
        <img
          src="/logos/Student_Life.png"
          alt="Student Life Logo"
          className="h-12 w-12 object-contain rounded-full border border-red-600"
        />
      </header>

      {/* Hero Section */}
      <Section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={CLUB_INFO.heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-red-600"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {CLUB_INFO.title}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {CLUB_INFO.tagline}
          </motion.p>
        </div>
      </Section>

      {/* About Section with Gallery inside */}
      <Section>
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
          About Kalakrithi
        </h2>
        <p className="text-gray-200 max-w-3xl mx-auto text-justify leading-relaxed tracking-normal font-serif whitespace-pre-line">
          {CLUB_INFO.description}
        </p>

        {/* Gallery under About text */}
        <div className="mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000, // 2 seconds
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl overflow-hidden max-w-3xl mx-auto"
          >
            {CLUB_INFO.gallery.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-96 flex items-center justify-center overflow-hidden rounded-xl">
                  <img
                    src={src}
                    alt={`Gallery ${idx}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Section>

      {/* Our Clubs */}
      <Section id="our-clubs">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
          Our Clubs
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {CLUB_INFO.subclubs.map((c) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="overflow-hidden aspect-video rounded-t-xl">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <c.icon className="h-5 w-5 text-red-500" />
                    <h4 className="text-lg font-semibold">{c.name}</h4>
                  </div>
                  <p className="text-sm text-gray-200 mb-4">{c.desc}</p>
                  <a
                    href={c.form}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-full transition"
                  >
                    Register Now
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <Card>
          <h3 className="text-2xl font-bold mb-4 text-red-500">
            Contact & Location
          </h3>

          <p className="flex items-center gap-2 mb-2 text-white">
            <MapPin className="h-4 w-4 text-red-500" /> {CLUB_INFO.location}
          </p>

          <p className="flex items-center gap-2 mb-2 text-white">
            <Mail className="h-4 w-4 text-red-500" /> {CLUB_INFO.email}
          </p>

          {CLUB_INFO.contacts.map((c) => (
            <p key={c.phone} className="flex items-center gap-2 mb-2 text-white">
              <Phone className="h-4 w-4 text-red-500" />
              {c.name}:{" "}
              <a href={`tel:${c.phone}`} className="underline text-red-400">
                {c.phone}
              </a>
            </p>
          ))}
        </Card>
      </Section>

      {/* Footer */}
      <footer
        className="py-6 text-center border-t"
        style={{ borderColor: COLORS.accentRed }}
      >
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} {CLUB_INFO.title} · Built with React &
          Tailwind
        </p>
      </footer>

      {/* End Note */}
      <div className="py-6 text-center">
        <motion.p
          className="text-lg md:text-xl font-bold text-red-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We are Kalakrithi
        </motion.p>
      </div>
    </div>
  );
}
