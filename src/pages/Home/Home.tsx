import Hero from '../../components/Hero/Hero'
import RestaurantList from '../../components/RestaurantList/RestaurantList';
import TitleScroll from '../../components/TitleScroll/TitleScroll';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <RestaurantList />
      <TitleScroll />
    </>
  );
}

export default Home;
