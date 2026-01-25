"use client"

import { Calendar, Clock, CheckCircle } from "lucide-react"

export function BookingCTA() {
  const handleBooking = () => {
    // Opens Calendly or Cal.com in a new window
    window.open("https://calendly.com", "_blank")
  }

  return (
    <section className="bg-[#D02020] text-white px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-48 h-48 border-4 border-white opacity-20" />
      <div className="absolute bottom-0 left-20 w-32 h-32 rounded-full border-4 border-[#F0C020] opacity-20" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInUp">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
              BOOK A
              <br />
              CALL WITH ME
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-none flex items-center justify-center bg-white text-[#D02020] flex-shrink-0 font-black">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-widest mb-1">30 or 60 minutes</p>
                  <p className="text-sm opacity-90">Flexible scheduling, timezone-agnostic</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-none flex items-center justify-center bg-white text-[#D02020] flex-shrink-0 font-black">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-widest mb-1">Consulting & Advising</p>
                  <p className="text-sm opacity-90">Discuss projects, technical challenges, or opportunities</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-none flex items-center justify-center bg-white text-[#D02020] flex-shrink-0 font-black">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-widest mb-1">No Prep Required</p>
                  <p className="text-sm opacity-90">Just show up and let's chat about what matters</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fadeIn flex items-center justify-center">
            <button
              onClick={handleBooking}
              className="group relative w-full lg:w-auto"
            >
              <div className="absolute -inset-1 bg-white opacity-30 group-hover:opacity-50 transition-opacity duration-200 transform -rotate-1" />
              <div className="relative bg-white text-[#D02020] border-4 border-white px-12 py-8 font-black text-lg uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-200">
                PICK A TIME
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
