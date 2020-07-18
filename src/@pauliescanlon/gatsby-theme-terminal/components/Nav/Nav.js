/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import { MdxRoutes } from "@pauliescanlon/gatsby-mdx-routes"
import { Link } from "gatsby"
import "./index.css"
import { Logo } from "../Logo/Logo"
import ThemeSwitch from "./themeswitch"

import {logo, nav, ul, li, link} from "@pauliescanlon/gatsby-theme-terminal/src/components/Nav/styles"

const DUMMY = "dummy"

export const Nav = () => (
  <Fragment>
    <div sx={logo}>
      <Logo />
    </div>
    <div></div>
    <nav sx={nav}>
      <MdxRoutes>
        {(routes, _) => (
          <ul sx={ul}>
            {routes
              .filter(
                route =>
                  route.navigationLabel && route.navigationLabel !== DUMMY
              )
              .map((route, index) => (
                <li sx={li} key={index}>
                  <Link
                    sx={link}
                    activeClassName="active-link"
                    to={route.slug}
                  >
                    {route.navigationLabel}
                  </Link>
                </li>
              ))}
            <li sx={li}>
              <ThemeSwitch />
            </li>
          </ul>
        )}
      </MdxRoutes>
    </nav>
  </Fragment>
)
