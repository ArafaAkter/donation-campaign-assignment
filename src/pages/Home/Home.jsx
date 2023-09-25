import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Cards from "../../components/Cards/Cards";

const Home = () => {
    const cards = useLoaderData()
    return (
        <div className="p-10">
           <Banner></Banner>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;