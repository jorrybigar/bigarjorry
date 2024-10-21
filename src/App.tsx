import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Banner from "./assets/components/Banner";
import Notification from "./assets/components/Notification";
import GameSelection from "./assets/components/GameSelection";

function App() {
  let balance = 1996.01;

  const images = [
    "banner-img/bannerImg1.png",
    "banner-img/bannerImg2.png",
    "banner-img/bannerImg3.png",
  ];

  let NotificationMsg = "This is example notification message.";
  return (
    <>
      <Header balance={balance}></Header>
      <Banner images={images}></Banner>
      <Notification text={NotificationMsg}></Notification>
      <GameSelection></GameSelection>
      <Footer></Footer>
    </>
  );
}

export default App;
