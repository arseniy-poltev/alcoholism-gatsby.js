import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Alert from "react-bootstrap/Alert"
import { useSelector } from "react-redux"
import { FaWindowClose } from "react-icons/fa"

export default function Notification() {
  const { type, message } = useSelector(state => state.alert)
  const [show, setShow] = useState(true)

  const handleClose = () => setShow(false)

  if (!message || !show) return null
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="d-flex flex-column">
            <FaWindowClose className=" ms-auto mb-2" onClick={handleClose} />
            <Alert variant={type || "info"}>
              <p>{message || ""}</p>
            </Alert>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
