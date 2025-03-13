import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import VideoBackground from '../components/VideoBackground';

function Home() {
  return (
    <div className="container mx-auto main-layout">
      <VideoBackground />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;