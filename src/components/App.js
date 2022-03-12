import Navbar from "./Navbar";
import Contact from "./Navbar/Contact";
import Paypal from "./Navbar/Paypal";
import Tools from "./Navbar/Tools";
import EstimHeure from "./EstimHeure";

import "./app.scss";

function App() {
    const path = "https://micetf.fr";
    const tool = "Estim'heure";

    return (
        <>
            <Navbar
                path={path}
                tool={tool}
                right={[
                    <Paypal />,
                    <Tools path={path} />,
                    <Contact tool={tool} />,
                ]}
            />
            <EstimHeure />
        </>
    );
}

export default App;
