import Hero from "../../components/Hero/Hero";
import Section from '../../components/Section/Section';


function HomePage() {

    return(
        <div>
            <Hero />
            <Section title="Top Albums" path="/albums/top" collapse type="album"/>
            <Section title="New Albums" path="/albums/new" collapse type="album"/>
           
        </div>
    )
}

export default HomePage