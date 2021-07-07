import React from "react"
import AdmissionsBanner from "../components/Admissions/AdmissionsBanner"
import AdmissionsMain from "../components/Admissions/AdmissionsMain"
import Layout from "../components/layout"
import HomeFooterBanner from "../components/Home/HomeFooterBanner"
import Seo from "../components/seo"

export default function admissions() {
  return (
    <Layout>
      <Seo title="Admissions" />
      <AdmissionsBanner />
      <AdmissionsMain />
      <HomeFooterBanner />
    </Layout>
  )
}
