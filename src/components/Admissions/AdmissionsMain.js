import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import BadgeIcon from "../../assets/Icons/verified-circle-badge.svg"

export default function AdmissionsMain() {
  return (
    <section className="admissions-main">
      <Container>
        <Row>
          <Col lg={8} sm={12}>
            <h3>Verification</h3>
            <p>
              Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec.
              Donec viverra eleifend lacus, vitae ullamcorper metus. Sed
              sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod
              scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu.
              Curabitur fermentum suscipit est, tincidunt mattis lorem luctus
              id. Donec eget massa a diam condimentum pretium. Aliquam erat
              volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut
              consectetur iaculis, metus lectus mattis justo, vel mollis eros
              neque quis augue. Sed lobortis ultrices lacus, a placerat metus
              rutrum sit amet. Aenean ut suscipit justo.
            </p>
            <p>
              Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec.
              Donec viverra eleifend lacus, vitae ullamcorper metus. Sed
              sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod
              scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu.
              Curabitur fermentum suscipit est, tincidunt mattis lorem luctus
              id. Donec eget massa a diam condimentum pretium. Aliquam erat
              volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut
              consectetur iaculis, metus lectus mattis justo, vel mollis eros
              neque quis augue. Sed lobortis ultrices lacus, a placerat metus
              rutrum sit amet. Aenean ut suscipit justo.
            </p>
          </Col>
          <Col lg={4} sm={12}>
            <BadgeIcon />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
