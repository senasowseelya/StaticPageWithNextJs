import Header from "./pages/header/header";
import Navbar from "./pages/navbar/navbar";
import TopContainer from "./pages/top-container/top-container";
import Content from "./pages/content/content";

export default function Welcome() {
  return (
    <>
      <Header/>
      <Navbar/>
      <TopContainer/>
      <Content/>
    </>
  )
}
