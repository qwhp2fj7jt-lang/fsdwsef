"use client"

import { useReportWebVitals } from "next/web-vitals"

const handleWebVitals = (metric) => {

  if (process.env.NODE_ENV === "development") {
    console.log("Web Vitals:", metric)
  }


  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", metric.name, {
      value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value
      ),
      event_label: metric.id,
      non_interaction: true,
    })
  }
}

export default function Analyst() {
  useReportWebVitals(handleWebVitals)
  return null
}
