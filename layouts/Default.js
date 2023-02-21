import Footer from "@/components/Footer";
import Header from "@/components/Header";


function Default(props) {
    const { pathname, children } = props;

    return (
        <>
            <Header pathname={pathname} />
            <main>{children}</main>
            <Footer />

        </>
    );
}

export default Default;
