import Hero from "../../components/Hero/Hero";
import Section from '../../components/Section/Section';


function HomePage() {

    return(
        <div>
            <Hero />
            <Section title="Top Albums" path="/albums/top" collapse type="album"/>
        </div>
    )
}

export default HomePage