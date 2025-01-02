import React from 'react'

const Testimonials = () => {
  return (
    <div class="bg-neutral-950">
  <section class="max-w-5xl mx-auto w-full px-10 py-10">
    <div class="flex items-center justify-center flex-col gap-y-2 py-5">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">Here's what our
        <span class="text-[#45B3BA]">customers</span> have to say
      </h2>
      <p class="text-lg font-medium text-slate-400/70">Discover how our service can benefit you</p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
      <div
        class="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
        <div class="flex flex-col gap-y-3.5">
          <p class="font-bold text-xl text-white">Efficient customer support</p>
          <p class="font-medium text-white">The customer support team at our service is incredibly responsive and
            helpful. They went above and beyond to assist me with my issue.</p>
        </div>
        <div class="flex flex-col"><img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Emily Smith" class="h-10 w-10"/>
          <p class="pt-2 text-sm font-semibold text-white">Emily Smith</p>
          <p class="text-sm font-medium text-slate-100/70">Marketing Manager at ABC Company</p>
        </div>
      </div>
      <div
        class="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
        <div class="flex flex-col gap-y-3.5">
          <p class="font-bold text-xl text-white">Excellent product features</p>
          <p class="font-medium text-white">The features offered by our service are outstanding. They have greatly
            improved our workflow and efficiency.</p>
        </div>
        <div class="flex flex-col"><img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Michael Johnson" class="h-10 w-10"/>
          <p class="pt-2 text-sm font-semibold text-white">Michael Johnson</p>
          <p class="text-sm font-medium text-slate-100/70">CEO at XYZ Corporation</p>
        </div>
      </div>
      <div
        class="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
        <div class="flex flex-col gap-y-3.5">
          <p class="font-bold text-xl text-white">Seamless integration process</p>
          <p class="font-medium text-white">Integrating our systems with our service was smooth and hassle-free. The
            support team guided us through every step of the process.</p>
        </div>
        <div class="flex flex-col"><img src="https://randomuser.me/api/portraits/women/71.jpg" alt="Sarah Brown" class="h-10 w-10"/>
          <p class="pt-2 text-sm font-semibold text-white">Sarah Brown</p>
          <p class="text-sm font-medium text-slate-100/70">CTO at XYZ Corporation</p>
        </div>
      </div>
      <div
        class="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
        <div class="flex flex-col gap-y-3.5">
          <p class="font-bold text-xl text-white">Reliable service uptime</p>
          <p class="font-medium text-white">Our service has consistently maintained high uptime, ensuring that our
            operations run smoothly without any disruptions.</p>
        </div>
        <div class="flex flex-col"><img src="https://randomuser.me/api/portraits/men/71.jpg" alt="James White" class="h-10 w-10"/>
          <p class="pt-2 text-sm font-semibold text-white">James White</p>
          <p class="text-sm font-medium text-slate-100/70">COO at XYZ Corporation</p>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Testimonials ;