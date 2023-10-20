'use client'
import { Content, Footer, Hero, Location, Navbar, Slideshow } from '@/components'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
// ..

// Ninda Aliyanda
// Dede Saepul Dina

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  })
  return (
    <main className="overflow-hidden relative">
      <Navbar />
      <Hero />
      <div className="relative">
        <Content 
          title = 'Our Story'
          content = "Our story began with a serendipitous encounter at a friend's barbecue, where the warmth of a summer day matched the warmth of our connection. From that moment, a friendship blossomed, deepening into a love that felt as if it had known no bounds. The proposal beneath a starry sky became the pivotal moment when we decided to embark on this lifelong adventure together, and today, as we stand on the threshold of forever, we are eternally grateful for the unwavering support of our loved ones. With hearts full of love and anticipation, we eagerly embrace the journey ahead, excited to create countless new chapters in our story as husband and wife, sharing our happily ever after with all of you."
        />
        <Content 
          title = 'Greetings'
          content= "As we gather to celebrate this remarkable day, we want to take a moment to express our deepest gratitude and extend our warmest greetings to each and every one of you. Your presence in our lives has been a constant source of love, support, and inspiration, and it is with immense joy that we welcome you to share in this momentous occasion. From the serendipitous encounters that led to our love story to the countless moments of laughter and shared experiences we've enjoyed with all of you, it is clear that our journey has been enriched by your friendship and love. Your support has been our anchor through life's ups and downs, and we are truly fortunate to have you by our side as we embark on this new chapter together. As we stand on the threshold of forever, we eagerly anticipate the memories we will create today and the moments we will share in the future. May this day be filled with love, laughter, and shared happiness, a reflection of the love that binds us all together. Here's to the moments we've cherished and the countless ones we have yet to create—cheers to all of us, and thank you for being an integral part of our lives and this beautiful celebration."
        />
      </div>
      <div data-aos='zoom-in'>
        <Slideshow />
      </div>
      <div data-aos='zoom-in'>
        <Location />
      </div>
      <Footer />
    </main>
  )
}
