import { createBrowserRouter, RouterProvider} from "react-router-dom"

// Layouts
import Root from './Layouts/Root'
import ErrorPage from './Layouts/ErrorPage'
import SignIn from './Layouts/SignIn'
import SignUp from './Layouts/SignUp'

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
