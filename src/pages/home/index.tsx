import Header from "../../components/header"
import SectionMain from "../../components/sectionmain/idex"
import SectionAbout from "../../components/sectionabout"
import SectionMenu from "../../components/sectionmenu"
import SectionFeedback from "../../components/sectionfeedback"
import SectionAddress from "../../components/sectionaddress"
import Footer from "../../components/footer"

const Home = () => {
    return(
        <>
        <Header />
        <SectionMain />
        <SectionAbout />
        <SectionMenu />
        <SectionFeedback />
        <SectionAddress />
        <Footer />
        </>
    )
}

export default Home