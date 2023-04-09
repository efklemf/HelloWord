function App()  {
    let student=[
        {
            name:"CHANDRESH",
            age:10,
            marks:35
        },
        {
            name:"SURESH",
            age:50,
            marks:45
        },
        {
            name:"MOHIT",
            age:80,
            marks:95
        }
    ];
    return(
        <>
        <h1>Hello Word Project</h1>
        <p>This is a simple Hellow Word Project Here we describe How You can develope by using simple way so lets be started
            Now first thing you will need is that html file and js file after you will have install all dependencies
            and in html file you need directoy of root and link html file to js file and in js file you neeed crete a function 
            and table and row according to given project.

        </p>
        <h2>Skill Required for this Project</h2>
        <table>
            {/* <tr>
                <th>NAME</th>
                <th>AGE</th>
                <th>ROLL NO</th>
            </tr>
            {student.map((student) =>(
                <tr>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.marks}</td>
                </tr>
            ))} */}

            <ol>
                <li>HTML</li>
                <li>JS</li>
                <li>FUNCTION HANDLING</li>
            </ol>
        </table>
        </>
    )

    
  };

  const rootElement = ReactDOM.createRoot(document.getElementById("root"));
  rootElement.render(<App />);