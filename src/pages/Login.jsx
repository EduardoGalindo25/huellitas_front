import Login from "../components/LoginForm";
import MainLayout from "../components/MainLayout";
import Footer from "../components/Footer";

function LoginPage() {
  return (
    <MainLayout>
      <div>
        <Login />
        <Footer />
      </div>
    </MainLayout>
  );
}

export default LoginPage;
