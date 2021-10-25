import React, { Fragment } from "react"
import Seo from "../components/seo"

export default function TermsOfService() {
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
          <h2>Terms of Service</h2>
          <p>
            If you wish to browse or download pages on Alcoholism.org you agree
            to comply with our terms of services down below. If you do not agree
            with the terms of service or do not want to comply with our
            agreement you should not browse Alcoholism.org or download any
            resources.
          </p>
          <p>
            An important note; Alcoholism.org has the right to modify and update
            the user agreement at any time. Users are bound to adhere to these
            modifications, terms, and updates. As a user, you agree to review
            the terms and conditions of Alcoholism.org.
          </p>
          <h3>Copyright</h3>
          <p>
            Alcoholism.org is designed for personal use and is not a commercial
            website. All content on the website (videos, pictures, photos,
            writing) is protected by copyright under the United States and
            international copyright laws; all content on the website is owned
            and operated by the party crediting the content of the website. You
            are not allowed to publish, replace, modify, sell, create, exploit,
            or display the content of Alcoholism.org in any way. If you wish to
            do so you must have the crediting party's permission.
          </p>
          <h3>Liability</h3>
          <p>
            When using Alcoholism.org you acknowledge that you're using the
            website and its contents at your own risk. Alcoholism.org is not
            responsible for any damages that result from inaccuracies, mistakes,
            errors, or interruptions. Alcoholism.org and its employees are not
            responsible for any direct, indirect, incidental, punitive, special,
            or consequential damages.
          </p>
          <h3>Limitations on Authority</h3>
          <p>
            Alcoholism.org works hard to ensure that information is accurate,
            up-to-date, and error-free. While information is edited and reviewed
            by professionals, content is not always perfect and there may be
            inaccuracies at times. Using Alcoholism.org you acknowledge that
            these inaccuracies can occur.
          </p>
          <p>
            Under the law, you understand that Alcoholism.org is not responsible
            for indirect, direct, consequential, punitive, incidental, or
            special damages that result from the inability or use to use this
            website's material. Use of material includes relying on the
            material, errors within the material, defects, mistakes, deletion of
            web pages or files, disabling displays, non-delivering information,
            use of data, warranty, or otherwise stated information. If a user
            has issues with the website and its content it's up to the user to
            stop accessing the website's content.
          </p>
          <p>
            As a user of Alcoholism.org, you assume the cost of all necessary
            servicing, repairs, correction caused or related to harm, damage,
            malfunctioning, or injury associated with the use of Alcoholism.org.
            Alcoholism.org's owners, partners, and employees don't assume
            liability.
          </p>
          <h3>Infringement Notices</h3>
          <p>
            Alcoholism.org complies with applicable provisions within the
            Digital Millennium Copyright Act (DMCA). If there are claims about
            the use of copyrighted content you are to reach out to the party
            responsible for filing that claim.
          </p>
          <h3>Claims</h3>
          <p>
            According to the DMCA, claims must be made in a specific manner.
            Claims must include the following in writing (via email or mail):
          </p>
          <ul>
            <li>
              A signature of the person or entity authorized to act on behalf of
              the owner of an exclusive right that is allegedly infringed.
            </li>
            <li>There needs to be a description of the copyrighted work.</li>
            <li>
              A description of where the material of the claim is located.
            </li>
            <li>A statement of good faith by one making the claim </li>
            <li>
              A statement by the one claiming that all information within the
              statement is accurate
            </li>
          </ul>

          <h3>Links</h3>
          <p>
            In the content on Alcoholism.org, there are links to other websites.
            These websites are not always affiliated with Alcoholism.org and
            Alcoholism.org is not responsible for the content of said websites.
            If there are concerns with links, concerns need to be addressed with
            the source of the third-party linked content.
          </p>
          <h3>Website Access </h3>
          <p>
            If Alcoholism.org is not available for any reason, the owners,
            employees, and partners are not liable. While Alcoholism.org does
            its best to stay up at all times, there might be situations where
            the website is not operating properly and needs updates.
          </p>
          <h3>Choice of Law and Forum</h3>
          <p>
            The terms and services are being carried out under Missouri law. The
            content within the agreement is to be governed by the laws of
            Missouri, enforced by Missouri regulations, and constructed by the
            state of Missouri. If there are any legal disputes or litigations
            they are to be served and processed in Missouri.
          </p>
          <h3>Severability</h3>
          <p>
            The Terms and Service constitute the entire user and owner
            agreement. If one section of the agreement is deemed unlawful it
            will have no bearing on the rest of the Terms and Service.
          </p>
        </div>
      </div>
    </Fragment>
  )
}
