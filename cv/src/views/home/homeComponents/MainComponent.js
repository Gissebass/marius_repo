import "./MainComponent.css";
import image from "../pictures/profile_pic.png";

const MainComponent = () => {
  return (
    <div className="MainComponent">
      <h1 className="mainOverskrift">Marius Gisleberg</h1>
      <div className="mainContent">
        <img className="profile_picture" src={image} alt="profilbilde"></img>
        <div className="mainParagraph">
            <p >
          paragraph................d wajd jwj jwadj jwad jawj jw jdawj jwdj
          wdjawd jjowtto3jtgjslgssenlglegmnsegllsgelnsgelgnleslnelngesl nglne
          snlg selnselnlnegslnsegln neaf lnsegl l</p>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
