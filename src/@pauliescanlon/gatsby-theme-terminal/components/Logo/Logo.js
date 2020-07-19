/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"

const H2 = styled("h2")`
  width: 300px;
  font-weight: 700;
  text-align: right;
`

export const Logo = () => <H2 sx={{ color: "success" }}>Tan Nguyen LE</H2>
