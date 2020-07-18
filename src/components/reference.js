/** @jsx jsx */

import React from "react"
import { jsx, Heading, Link, Text, Divider } from "theme-ui"

export default function Reference({ name, email, title, tel, linkedin }) {
  const telHref = `tel:${tel}`
  const mailTo = `mailto:${email}`
  return (
    <React.Fragment>
      <Heading variant="styles.h5" mb={0}>
        {name}
      </Heading>
      <Text> {title} </Text>
      <Text variant="styles.small">
        Tel:
        <Link variant="styles.small" href={telHref}>
          {tel}
        </Link>
      </Text>
      <Text variant="styles.small">
        Email:
        <Link href={mailTo} variant="styles.small">
          {email}
        </Link>
      </Text>
      <Text variant="styles.small">
        LinkedIn:
        <Link variant="styles.small" href={linkedin}>
          {linkedin}
        </Link>
      </Text>
      <Divider />
    </React.Fragment>
  )
}
