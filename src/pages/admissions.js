import React from "react"
import AdmissionsBanner from "../components/Admissions/AdmissionsBanner"
import AdmissionsMain from "../components/Admissions/AdmissionsMain"
import Layout from "../components/layout"
import HomeFooterBanner from "../components/Home/HomeFooterBanner"

export default function admissions() {
  return (
    <Layout>
      <AdmissionsBanner />
      <AdmissionsMain />
      <HomeFooterBanner />
    </Layout>
  )
}
