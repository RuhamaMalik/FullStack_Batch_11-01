import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsLetter = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="custom-container w-100 d-flex justify-content-center align-items-center px-4">
          <form className="d-flex w-75">
            <input
              type="text"
              className="form-control custom-input me-2"
              placeholder="Enter your text here"
              style={{borderRadius: "0px"}}
            />
            <button type="submit" className="button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
