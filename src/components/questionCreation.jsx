
// import { useState } from "react";
// import swal from 'sweetalert';
// import { Link } from "react-router-dom";

// const QuestionCreation = () => {

//     const [obj, setObj] = useState({topic: "", question: "", options: ["", "", ""], rightOption: ""});

//     const token = sessionStorage.getItem("Token");
    
//     const inputChange = (e) => {
//         setObj({...obj, [e.target.name]: e.target.value})
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();

//         fetch("http://localhost:5000/api/questions", {
//             method: "POST",
//             body: JSON.stringify(obj),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then (() => {
//             swal("Question created successfully.");
//         })
//         .catch (err => {
//             console.log(err);
//         })
//     };

//     return  (
//         <> {token ? ( <>
//                 <h1>CREATE-QUESTION</h1>
//                 <div className="questionCreation">
//                     <form onSubmit={onSubmit}>
//                         <div>
//                             <label htmlFor="">Topic:</label><br/>
//                                 <select name="topic" onChange={inputChange} >
//                                     <option value="Nature">Nature</option>
//                                     <option value="General Knowledge">General Knowledge</option>
//                                     <option value="IQ Related">IQ-Related</option>
//                                     <option value="Randoms">Randoms</option>
//                                 </select>
//                         </div>

//                         <div>
//                             <label htmlFor="">Question:</label><br/>
//                                 <textarea name="question" onChange={inputChange} cols="40" rows="7"></textarea>
//                         </div>

//                         <div>
//                             <label htmlFor="" name="options">Options:</label><br/>
//                                 <input type="text" placeholder="option a" onChange={(e) => {
//                                     obj.options[0] = e.target.value;
//                                     setObj({...obj, options: obj.options})
//                                 }}/><br/>
//                                 <input type="text" placeholder="option b" onChange={(e) => {
//                                     obj.options[1] = e.target.value;
//                                     setObj({...obj, options: obj.options})
//                                 }}/><br/>
//                                 <input type="text" placeholder="option c" onChange={(e) => {
//                                     obj.options[2] = e.target.value;
//                                     setObj({...obj, options: obj.options})
//                                 }}/><br/> 
//                         </div>

//                         <div className="flex">
//                             <div>
//                                 <label htmlFor="">Right Option:</label><br/>
//                                 <select name="rightOption" onChange={inputChange}>
//                                     <option value="a">Option A</option>
//                                     <option value="b">Option B</option>
//                                     <option value="c">Option C</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor="">Submit</label><br/>
//                                     <input type="submit" value="submit " />
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//                 </>) : (<h3>You don't have access to this page, go <Link to={'/'}>back</Link></h3>)
//             }
//         </>
//     )
// }

// export default QuestionCreation;

import { useState } from "react";
import swal from 'sweetalert';
import { Link } from "react-router-dom";

const QuestionCreation = () => {
  const [obj, setObj] = useState({
    topic: "",
    question: "",
    options: ["", "", ""],
    rightOption: ""
  });

  const token = sessionStorage.getItem("Token"); // no need to store in state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setObj((prevObj) => ({ ...prevObj, [name]: value }));
  };

  const handleOptionChange = (index) => (e) => {
    const { value } = e.target;
    setObj((prevObj) => ({
      ...prevObj,
      options: prevObj.options.map((option, i) => (i === index ? value : option))
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/questions", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        swal("Question created successfully.");
      })
      .catch((err) => {
        console.error(err);
      });
  };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   try {
//     const res = await fetch("http://localhost:5000/api/questions", {
//       method: "POST",
//       body: JSON.stringify(obj),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });

//     if (!res.ok) {
//       throw new Error(`Server error: ${res.status}`);
//     }

//     const data = await res.json();
//     swal("Question created successfully.");
//   } catch (err) {
//     console.error(err);
//     swal("Error creating question: " + err.message);
//   }
// };

  return (
    <>
      {token ? (
        <>
          <h1>CREATE-QUESTION</h1>
          <div className="questionCreation">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">Topic:</label>
                <br />
                <select name="topic" onChange={handleInputChange}>
                  <option value="Nature">Nature</option>
                  <option value="General Knowledge">General Knowledge</option>
                  <option value="IQ Related">IQ-Related</option>
                  <option value="Randoms">Randoms</option>
                </select>
              </div>

              <div>
                <label htmlFor="">Question:</label>
                <br />
                <textarea name="question" onChange={handleInputChange} cols="40" rows="7" />
              </div>

              <div>
                <label htmlFor="" name="options">
                  Options:
                </label>
                <br />
                <input
                  type="text"
                  placeholder="option a"
                  onChange={handleOptionChange(0)}
                />
                <br />
                <input
                  type="text"
                  placeholder="option b"
                  onChange={handleOptionChange(1)}
                />
                <br />
                <input
                  type="text"
                  placeholder="option c"
                  onChange={handleOptionChange(2)}
                />
                <br />
              </div>

              <div className="flex">
                <div>
                  <label htmlFor="">Right Option:</label>
                  <br />
                  <select name="rightOption" onChange={handleInputChange}>
                    <option value="a">Option A</option>
                    <option value="b">Option B</option>
                    <option value="c">Option C</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="">Submit</label>
                  <br />
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        <h3>
          You don't have access to this page, go <Link to={'/'}>back</Link>
        </h3>
      )}
    </>
  );
};

export default QuestionCreation;