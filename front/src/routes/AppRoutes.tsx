import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomePageContainer, LoginPageContainer, ProfilePageContainer, SignupPageContainer } from "../container"
import PrivateRoutes from "./PrivateRoutes"
import RoutesBase from "./RoutesBase"

interface Props {
  authenticated: boolean
}

const AppRoutes = ({ authenticated }: Props) => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPageContainer />,
    },
    {
      path: "/signup",
      element: <SignupPageContainer />,
    },
    {
      element: <PrivateRoutes authenticated={authenticated} />,
      children: [
        {
          element: <RoutesBase />,
          children: [
            {
              path: "/",
              element: <HomePageContainer />,
            },
            {
              path: "/profile",
              element: <ProfilePageContainer />,
            },
          ],
        },
      ],
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes
