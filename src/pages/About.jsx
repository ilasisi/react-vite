import { GreatGrandParent } from "../components/GreatGrandParent";
import { NameContext } from "../contexts/nameContext";

function About() {
    return (
        <NameContext value={"Some value"}>
            This is about us page
            <GreatGrandParent />
        </NameContext>
    );
}

export default About;
