import "./App.css";

import {
  Categories,
  Courses,
  CoursesRates,
  DiscountBar,
  FeaturedTopics,
  Footer,
  Header,
  Introduce,
  Nav,
  View,
} from "./components";

function App() {
  return (
    <div className="App">
      <DiscountBar />
      <Nav />
      <Header />
      <Courses />
      <CoursesRates />
      <View />
      <Categories />
      <FeaturedTopics />
      <Introduce />
      <Footer />
    </div>
  );
}

export default App;
