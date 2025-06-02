"use client"

import React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Sparkles, Gift, Star, ArrowRight } from "lucide-react"

const confettiColors = ["#FFB6C1", "#FFE4E1", "#E6E6FA", "#F0E68C", "#FFE4B5", "#FFC0CB"]

const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            left: `${Math.random() * 100}%`,
          }}
          initial={{ y: -10, opacity: 0, rotate: 0 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 10 : 800,
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300/40"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 15}px`,
          }}
          initial={{ y: typeof window !== "undefined" ? window.innerHeight + 50 : 850, opacity: 0 }}
          animate={{
            y: -50,
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 6,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart fill="currentColor" />
        </motion.div>
      ))}
    </div>
  )
}

const MagicalFireworks = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            delay: Math.random() * 1,
            repeat: 3,
          }}
        >
          <Star className="w-6 h-6 text-yellow-400 fill-current" />
        </motion.div>
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 1.5,
            delay: Math.random() * 2,
            repeat: 4,
          }}
        >
          <Sparkles className="w-4 h-4 text-pink-400" />
        </motion.div>
      ))}
    </div>
  )
}

export default function MergedBirthdayPage() {
  const [currentScreen, setCurrentScreen] = useState("gift")
  const [giftOpened, setGiftOpened] = useState(false)
  const [userName, setUserName] = useState("")
  const [inputName, setInputName] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)
  const [showMagicalEffect, setShowMagicalEffect] = useState(false)
  const [showTextarea, setShowTextarea] = useState(false)
  const [message, setMessage] = useState("")

  // Browser navigation handler
  useEffect(() => {
    const handlePopState = (event) => {
     let screen, name
    if (event.state && event.state.screen) {
      screen = event.state.screen
      name = event.state.userName
    } else {
      // fallback: get from URL
      const urlParams = new URLSearchParams(window.location.search)
      screen = urlParams.get('screen') || 'gift'
      // name = urlParams.get('name') || ''

      
    }
    setCurrentScreen(screen)
    if (name) setUserName(name)
  }

    window.addEventListener('popstate', handlePopState)
    
    // Set initial state
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const screen = urlParams.get('screen') || 'gift'
      const name = urlParams.get('name') || ''
      
      
      if (screen !== 'gift' && name) {
        setUserName(name)
        setCurrentScreen(screen)
      }
    }

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  // Function to navigate to a new screen
  const navigateToScreen = (screen, name = userName) => {
    setCurrentScreen(screen)
    if (name && name !== userName) {
      setUserName(name)
    }
    
    // Update URL and browser history
    if (typeof window !== 'undefined') {
      const url = new URL(window.location)
      url.searchParams.set('screen', screen)
      if (name) {
        url.searchParams.set('name', name)
      }
      
      window.history.pushState(
        { screen, userName: name }, 
        '', 
        url.toString()
      )
    }
  }

  const messages = [
    {
      title: "A Special Connection",
      message:
        "I don't know how much I've mattered in anyone else's life… but whenever I talk to you, honestly, it feels different. It feels light… comforting… peaceful.",
      image: "https://res.cloudinary.com/dnp4lqlux/image/upload/v1748863044/WhatsApp_Image_2025-06-02_at_4.43.35_PM_1_zfqffe.jpg",
    },
    {
      title: "Genuine Comfort",
      message:
        "I genuinely can't even remember the last time I felt this close to someone — but with you, there's this sense of comfort, this bond… that makes me want to spend more time with you.",
      image: "https://res.cloudinary.com/dnp4lqlux/image/upload/v1748865310/IMG-20250528-WA0011_zdr2sx.jpg",
    },
    {
      title: "What You Mean To Me",
      message:
        "Maybe I shouldn't be saying this, but I will — because the truth is, your presence in my life does matter to me. I care about you, truly… and honestly, I feel a little protective of you too.",
      image: "https://res.cloudinary.com/dnp4lqlux/image/upload/v1748862709/IMG-20250528-WA0012_jhugkc.jpg",
    },
    {
      title: "Shared Experiences",
      message:
        "Because I've been through a few things myself — loneliness, being ignored, getting hurt by people I once called my own. And I don't ever want you to walk down those same roads.",
      image: "https://res.cloudinary.com/dnp4lqlux/image/upload/v1748862709/IMG-20250528-WA0014_j8uadh.jpg",
    },
    {
      title: "Mutual Effort",
      message:
        "In every relationship,Effort should be mutual — when it’s one-sided, it’s no longer love, it’s sacrifice.",
      image: "https://res.cloudinary.com/dnp4lqlux/image/upload/v1748863045/WhatsApp_Image_2025-06-02_at_4.43.35_PM_yw7n5r.jpg",
    },
    {
      title: "Trust & Vulnerability",
      message:
        "Sometimes people make us feel like they're really there for us… just temporarily. And we trust them — we believe in their words. But when that trust breaks, it shatters something deep inside.You start questioning your own worth, your ability to believe again",
      image: "https://res.cloudinary.com/dnp4lqlux/image/upload/v1748863879/Screenshot_2025-06-02-17-00-23-895_com.instagram.android-edit_tkticj.jpg",
    },
    {
      title: "You Deserve The Best",
      message:
        "Never settle when it comes to your heart. You're special — you deserve someone who truly sees you, cares for you, and shows it through actions, not just words.",
      image: "https://res.cloudinary.com/dnp4lqlux/image/upload/v1748862709/IMG-20250528-WA0010_iuaynm.jpg",
    },
    {
      title: "My Promise",
      message:
        "And hey… you're lucky. Because I'm in your life — the real me, no filters, no masks. I've said exactly what I feel, the way I feel it. 😊",
      image: "https://res.cloudinary.com/dnp4lqlux/image/upload/v1748864144/Screenshot_2025-06-02_170523_m5hsty.png",
    },
  ]

  const handleGiftClick = () => {
    setGiftOpened(true)
    setTimeout(() => {
      navigateToScreen("name")
    },0)
  }

  const handleNameSubmit = (e) => {
    e.preventDefault()
    if (inputName.trim()) {
      const name = inputName.trim()
      setUserName(name)
      setTimeout(() => {
        setShowConfetti(true)
        navigateToScreen("birthday", name)
      }, 4000)
    }
  }

  const handleMagicalClick = () => {
    setShowMagicalEffect(true)
    setShowTextarea(true)
    setTimeout(() => {
      setShowMagicalEffect(false)
    }, 8000)
  }

 const handleSendMessage = () => {
  if (message.trim()) {
    const encodedMessage = encodeURIComponent(message)
    const yourPhoneNumber = "9022118364" 
    window.open(`https://wa.me/${yourPhoneNumber}?text=${encodedMessage}`, "_blank")
    setMessage("")
    setShowTextarea(false)
    
  }
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 relative overflow-hidden">
      {showConfetti && <Confetti />}
      {(currentScreen === "birthday" || currentScreen === "final") && <FloatingHearts />}
      {showMagicalEffect && currentScreen !== "birthday" && <MagicalFireworks />}

      {/* Floating sparkles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
              opacity: 0,
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-4 h-4 text-amber-300/60" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentScreen === "gift" && (
          <motion.div
            key="gift"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center min-h-screen"
          >
            <div className="text-center">
               <motion.div
      className="relative cursor-pointer"
      onClick={handleGiftClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 3D Cube Gift Box */}
      <motion.div
        className="relative w-64 h-64 mx-auto mb-8"
        animate={giftOpened ? { scale: 0.8, opacity: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ perspective: "1000px" }}
      >
        {/* Cube Container */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(0deg) rotateY(0deg)",
          }}
        >
          {/* Front face */}
          <div
            className="absolute inset-0 border-2 border-pink-400 shadow-2xl"
            style={{ transform: "translateZ(128px)" }}
          />

          {/* Back face */}
          <div
            className="absolute inset-0  border-2 border-pink-600 shadow-xl"
            style={{ transform: "rotateY(180deg) translateZ(128px)" }}
          />

          {/* Left face */}
          <div
            className="absolute inset-0 bg-rose-500 border-2 border-rose-700 shadow-xl"
            style={{ transform: "rotateY(-90deg) translateZ(128px)" }}
          />

          {/* Right face */}
          <div
            className="absolute inset-0 bg-pink-700 border-2 border-rose-300 shadow-xl"
            style={{ transform: "rotateY(90deg) translateZ(128px)" }}
          />

          {/* Top face */}
          <div
            className="absolute inset-0 bg-pink-500 border-2 border-amber-300 shadow-xl"
            style={{ transform: "rotateX(90deg) translateZ(128px)" }}
          />

          {/* Bottom face */}
          <div
            className="absolute inset-0 bg-rose-800 border-2 border-pink-300 shadow-xl"
            style={{ transform: "rotateX(-90deg) translateZ(128px)" }}
          />

          {/* Ribbon vertical */}
          <div className="absolute left-1/2 top-0 w-6 h-full bg-gradient-to-b from-amber-400 to-yellow-500 transform -translate-x-1/2 shadow-lg z-30" />

          {/* Ribbon horizontal */}
          <div className="absolute top-1/2 left-0 w-full h-6 bg-gradient-to-r from-amber-400 to-yellow-500 transform -translate-y-1/2 shadow-lg z-30" />

          {/* Bow */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
            <div className="w-12 h-8 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full shadow-lg rotate-12" />
            <div className="absolute top-1 left-1 w-10 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full -rotate-12" />
          </div>
        </div>
      </motion.div>

    </motion.div>

              {!giftOpened && (
                <motion.p
                  className="text-2xl text-amber-200 font-medium"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Click the gift to open your surprise! 🎁
                </motion.p>
              )}
            </div>
          </motion.div>
        )}

        {currentScreen === "name" && (
          <motion.div
            key="name"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="flex items-center justify-center min-h-screen"
          >
            <div className="text-center max-w-md mx-auto px-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="mb-8"
              >
                <Gift className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-amber-200 mb-4">
                  Please enter your name to open your surprise 😊
                </h2>
              </motion.div>

              <form onSubmit={handleNameSubmit} className="space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
                  <Input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Your beautiful name..."
                    className="text-center text-lg py-3 border-2 border-amber-400/50 focus:border-amber-400 rounded-xl bg-purple-800/50 text-amber-100 placeholder:text-amber-300/70"
                    required
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl text-lg shadow-lg transform transition-all duration-200 hover:scale-105"
                  >
                    Open My Surprise ✨
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        )}





        {currentScreen === "birthday" && (
          <motion.div
            key="birthday"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            {/* Header Section */}
            <motion.section
              className="relative z-10 pt-16 pb-12 px-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  className="inline-flex items-center gap-2 mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <Sparkles className="text-amber-400 w-8 h-8" />
                  <Gift className="text-pink-400 w-8 h-8" />
                  <Sparkles className="text-amber-400 w-8 h-8" />
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
                >
                  Happy Birthday {userName}!
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-amber-200 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  To the most wonderful person in the world ✨
                </motion.p>
              </div>
            </motion.section>

            {/* Cards Section */}
            <section className="relative z-10 py-12 px-4">
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  Why You're So Special to Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {messages.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 0.95 }}
                      transition={{
                        delay:  0.2,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Card className="h-auto bg-purple-800/60 backdrop-blur-sm border border-amber-400/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="relative mb-4 overflow-hidden rounded-lg">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={450}
                               height={300}
                              className="object-cover transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute inset-0 " />
                          </div>

                          <h3 className="text-xl font-semibold text-amber-200 mb-3 text-center">{item.title}</h3>

                          <p className="text-amber-100/90 leading-relaxed text-center">{item.message}</p>

                          <div className="flex justify-center mt-4">
                            <Heart className="text-pink-400 w-5 h-5 fill-current" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Button Section */}
                <motion.div
                  className="text-center mt-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => navigateToScreen("final")}
                    className="bg-gradient-to-r from-pink-500 via-purple-600 to-amber-500 hover:from-pink-600 hover:via-purple-700 hover:to-amber-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      Read My Special Message 😊😉
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </motion.button>
                  
                  <motion.p
                    className="text-amber-200/80 text-sm mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    I have something special to tell you...
                  </motion.p>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}

        
   
      {currentScreen === "final" && (
  <div className="min-h-screen flex items-center justify-center px-4">
    {/* {/* Final Message Section */}
    <section className="relative z-10 w-full max-w-4xl">
      <Card className="bg-gradient-to-r from-purple-800/80 via-pink-800/80 to-orange-800/80 backdrop-blur-sm border border-amber-400/30 shadow-2xl">
        <CardContent className="p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-200 mb-8">From My Heart to Yours</h2>

            <div className="prose prose-lg max-w-none text-amber-100/90 leading-relaxed">
              <p className="text-lg md:text-xl mb-6">
                Sometimes, the most special connections don't need labels — they just grow quietly, deeply, and
                beautifully. Ours feels like one of those.
              </p>

              <p className="text-lg md:text-xl mb-6">
                There are some things I've always felt but never found the right words or moment to share...
                maybe someday I will. Till then, just know you mean more to me than I've ever said.
              </p>

              <p className="text-lg md:text-xl mb-6">
                I don't know what the future holds, but if I ever get to choose who I'd want by my side through
                life's ups and downs... I think you already know the answer.
              </p>

              <p className="text-lg md:text-xl mb-6">
                Some relationships are written not in blood or name, but in understanding, respect, and moments
                that feel like home. You're that for me — and always will be.
              </p>

              <p className="text-lg md:text-xl mb-8">
                On this special day, I wish you all the happiness your heart can hold, all the love you so
                freely give to others, and all the dreams you dare to dream. May this new year of your life be
                filled with magical moments, beautiful surprises, and endless reasons to smile.
              </p>

              <div>
                <Button
                  size="lg"
                  onClick={handleMagicalClick}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Happy Birthday, Beautiful! 🎉
                </Button>
              </div>

              {showTextarea && (
                <div className="mt-8 bg-purple-900/80 border border-amber-400/30 rounded-lg p-4">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your birthday message here tell me did you like this surprise? 😊"
                    className="w-full h-40 p-4 bg-purple-800/60 text-amber-100 border border-amber-400/50 rounded-lg focus:outline-none focus:border-amber-400"
                    maxLength={1000}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-amber-300 text-sm">{message.length}/1000 characters</span>
                    <Button onClick={handleSendMessage} className="bg-green-600 hover:bg-green-700 text-white">
                      Send to WhatsApp
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  </div>
)}


      </AnimatePresence>
    </div>
  )
}

