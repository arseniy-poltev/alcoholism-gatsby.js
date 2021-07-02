import React from "react"

export default function TreatmentDetail() {
  return (
    <div className="treatment-detail">
      <h3>Treatment Insights</h3>
      <p>
        At the Owl's Nest, residents are more than just a number. If a resident
        is still struggling with dependency after their scheduled program is
        completed, they are encouraged to remain with the Owl's Nest until they
        feel comfortable enough to return home. During both The Short-Term
        Intensive and Long Term Programs, residents attend group sessions that
        encourage them to discuss their experiences and how they plan on
        achieving sobriety through the Twelve Steps of Alcoholics Anonymous.
      </p>
      <img src="/Images/center.png" alt="treatment center" />
      <h3>Areas of Focus</h3>
      <h5 className="text-uppercase">Residential Treatment</h5>
      <p>
        Residential treatment programs provide housing (food and meals) in
        addition to treatment for substance abuse. Some facilities offer only
        short-term residential treatment, some offer only long-term treatment
        and others offer both, ranging from a few days to many months, based on
        patient needs.
      </p>
      <h5 className="text-uppercase">Individualized Treatment</h5>
      <p>
        Some facilities have an addiction treatment protocol that all patients
        or clients are expected to follow, while others customize or
        individualize treatment based on a person's unique needs and
        circumstances. Factors that may affect treatment decisions include age,
        lifestyle, medical conditions, type of drug, religious beliefs, etc.
      </p>
    </div>
  )
}
