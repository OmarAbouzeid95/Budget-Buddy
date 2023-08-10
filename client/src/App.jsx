import { createBrowserRouter, RouterProvider} from "react-router-dom"

// layouts
import Root from './layouts/Root'
import ErrorPage from './layouts/ErrorPage'
import SignIn from './layouts/SignIn'
import SignUp from './layouts/SignUp'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "sign-in",
          element: <SignIn />
        },
        {
          path: "sign-up",
          element: <SignUp />
        }
      ],
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
