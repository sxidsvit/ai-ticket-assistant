import { Link, useNavigate, Outlet } from "react-router-dom";


export default function Navbar() {
  const token = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="bg-gray-700 text-gray-200 h-screen">
      <div className="navbar max-w-6xl m-auto border-0 ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            AI Ticket Assistant
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          {!token ? (
            <>
              <Link to="/signup" className="btn btn-sm  bg-gray-600 text-gray-200 hover:bg-gray-800">
                Signup
              </Link>
              <Link to="/login" className="btn btn-sm  bg-gray-600 text-gray-200 hover:bg-gray-800">
                Login
              </Link>
            </>
          ) : (
            <section className="flex items-center gap-3 " >
              <div>Hi, {user?.email}</div>
              {user && user?.role === "admin" ? (
                <Link to="/admin" className="btn btn-md bg-gray-600 text-gray-200 hover:bg-gray-800">
                  Admin
                </Link>
              ) : null}
              <button onClick={logout} className="btn btn-md bg-gray-600 text-gray-200 hover:bg-gray-800">
                Logout
              </button>
            </section>
          )}
        </div>
      </div>
      <main className="bg-gray-700">
        <Outlet />
      </main>
    </div >
  );
}
