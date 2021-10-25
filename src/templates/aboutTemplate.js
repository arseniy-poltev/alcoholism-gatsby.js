import React, { Fragment } from "react"
import Seo from "../components/seo"

export default function AboutTemplate() {
  return (
    <Fragment>
      <Seo
        title="about"
        meta={[
          {
            property: `google-site-verification`,
            content: process.env.GATSBY_GATSBY_GOOGLE_SITE_VERIFICATION,
          },
        ]}
      />
      <div className="container">
        <div className="blog blog__content">
          <p>
            Alcoholism.org is more than just a website. We're a community of
            professionals dedicated to helping you or your loved one understand
            alcoholism, how to recover from it, and how to prevent it. Most
            importantly, we're here for you.
          </p>
          <h3>Our Mission</h3>
          <p>
            The mission is a simple one. Our goal is to educate people, bring
            awareness to treatment options, and help you find the perfect
            treatment option in your area.
          </p>
          <h3>Education </h3>
          <p>
            First and foremost, we want to teach everyone about alcohol abuse
            and how it happens. We're focused on educating people about the
            early stages of alcohol abuse disorder (AUD), how the condition
            progresses, and how to remain sober when treatment subsides.{" "}
          </p>
          <p>
            Our content is developed and edited by professionals but we don't
            stop there. We also have licensed mental health professionals who
            review our content, making us the best source for alcoholism
            education on the internet.
          </p>
          <h3>Treatment </h3>
          <p>
            There are many treatment options for alcoholism, which makes it
            challenging to find the right option for you. We have information
            available for inpatient care, outpatient treatment, detox, and even
            the medications people use to help with detox. While there are many
            options available, it's important to consult with your insurance
            provider to make sure you're eligible for potential treatment
            options.
          </p>
          <h3>Finding Help</h3>
          <p>
            One of the most important parts of fighting alcoholism is making
            sure people have access to the care they need.
          </p>
          <p>
            That's why we have our team of writers and editors consult with
            regional addiction treatment centers to find the best options in
            each city. To rank each addiction treatment center we use a strict
            ranking system and verification process to verify things like:
          </p>
          <ul>
            <li>Insurance options</li>
            <li>The cost</li>
            <li>Who the treatment center treats</li>
            <li>Addiction treatment modalities </li>
            <li>Mental health treatment modalities </li>
            <li>Criteria for co-occurring disorders </li>
            <li>The size of the program</li>
            <li>The type of program </li>
            <li>And more!</li>
          </ul>
          <p>
            When it comes to finding help, we want the best for you and your
            family.
          </p>
          <h3>Staying Sober</h3>
          <p>
            Learning about alcoholism and getting help are only the first two
            steps needed to live a sober life. Staying sober is often the
            hardest part of the healing process because alcohol is widely
            available. The good news is that we have several resources to help
            you find aftercare programs like local Alcoholics Anonymous groups
            in your area.
          </p>
        </div>
      </div>
    </Fragment>
  )
}
