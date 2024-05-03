import Imga from "../image/e.jpg"
import Imgb from "../image/R.jpg"

function Navbar() {
    return (
        <div className="navbar">
            <span className="logo">Curriculum Vitae</span>
            <div className="user">
                <span>Connecté</span>
                <img src={Imgb} alt="" />
            </div>
        </div>
    );
}
export default Navbar;