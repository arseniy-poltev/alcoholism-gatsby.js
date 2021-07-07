import { Link } from "gatsby"
import React from "react"

export default function BlogContent() {
  return (
    <div className="blog blog__content">
      <h3>Types of Addiction Treatment</h3>
      <p>
        The severity and type of addiction affect the type of substance abuse
        treatment that’s most appropriate for you. Almost every person with an
        addiction requires some form of detox to clear alcohol and other drugs
        from the body. More severe addictions require inpatient or residential
        treatment. Partial hospitalization provides a moderate level of care,
        and outpatient treatment provides the lowest{" "}
        <Link to="/">level of care</Link>.
      </p>
      <h3>Treatment Process</h3>
      <p>
        The addiction treatment process begins when you reach out to a rehab
        facility, hospital or therapist for treatment. You may receive a brief
        assessment over the phone, but the full intake and assessment process{" "}
        <Link to="/">happen in rehab</Link>. You may begin with inpatient detox
        and transition through the types of treatment, or you may begin with
        outpatient detox. The course you take depends on the severity of your
        condition.
      </p>
      <img src="/Images/blog.png" alt="blog cover" />
      <h4>Admissions</h4>
      <p>
        During admissions, most admissions representatives will talk to you
        about your addiction, payment methods and the services that their
        facility offers. If the facility has the appropriate types of services
        for your condition and you’re capable of paying for treatment, you’ll
        discuss how quickly you can begin treatment. Some treatment centers may
        have waiting lists. Others will be able to admit you immediately.{" "}
        <Link to="/">Learn more about admissions process</Link>.
      </p>
      <h4>Length of Treatment</h4>
      <p>
        The length of rehab for substance abuse depends on the severity of your
        condition, the type of substances you’re addicted to and the presence of
        any co-occurring mental health disorders. Opioid addiction may require a
        month of inpatient treatment and years of outpatient medication-assisted
        treatment. A minor alcohol addiction may require a few months of
        outpatient treatment.{" "}
        <Link to="/">Learn more about how long rehab takes</Link>.
      </p>
    </div>
  )
}
