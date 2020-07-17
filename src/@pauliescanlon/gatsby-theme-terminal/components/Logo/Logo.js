/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"

const H2 = styled("h2")`
  width: 170px;

  font-weight: 700;
`

export const Logo = () => <H2 sx={{ color: "success" }}>Tan Nguyen LE</H2>
