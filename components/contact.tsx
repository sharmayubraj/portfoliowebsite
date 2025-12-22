"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("message", formData.message)
      formDataToSend.append("_subject", "New Contact Form Submission")
      formDataToSend.append("_captcha", "false")
      formDataToSend.append("_template", "table")

      const response = await fetch("https://formsubmit.co/ajax/yubrajsharma143@gmail.com", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (response.ok && result.success === "true") {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error(result.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yubrajsharma143@gmail.com",
                  href: "mailto:yubrajsharma143@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977-9866413389",
      href: "tel:+9779866413389",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kathmandu, Nepal",
      href: "#",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="contact" className="py-20 bg-background text-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-card/80 border border-border rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Send Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                        placeholder="Yubraj"
                      required
                      className="bg-input border border-border text-foreground placeholder-muted-foreground focus:border-purple-500 h-12 text-base px-4 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                        value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-input border border-border text-foreground placeholder-muted-foreground focus:border-blue-500 h-12 text-base px-4 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="bg-input border border-border text-foreground placeholder-muted-foreground focus:border-cyan-500 resize-none text-base p-4 rounded-xl min-h-[120px]"
                    />
                  </div>

                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-3 rounded-lg text-sm border ${
                        submitStatus.type === "success"
                          ? "bg-green-900/20 text-green-400 border-green-500/30"
                          : "bg-red-900/20 text-red-400 border-red-500/30"
                      }`}
                    >
                      {submitStatus.message}
                    </motion.div>
                  )}

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-12 text-base font-semibold rounded-xl transition-all duration-300 group"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-border transition-all duration-300 group cursor-pointer block"
                    onClick={(e) => info.href === "#" && e.preventDefault()}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Response Time Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Quick Response</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I typically respond within 12-24 hours. For urgent inquiries, feel free to call directly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}