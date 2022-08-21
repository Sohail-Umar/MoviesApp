import React from 'react';
import './App.css'
import ArrayOfData from './components/ArrayOfData';
import SideContainer from './components/SideContainer';
import Genre from './components/SideContainer'
import FormDialog from './components/EditDialogue'
import Pagination from './components/Pagination';
import { alertTitleClasses } from '@mui/material';

function App() {
  const [movieArray, setMovieArray] = React.useState(ArrayOfData);
  const [selectedGenre, setSelectedGenre] = React.useState("All Movies");
  const [sorted, setSorted] = React.useState("asc");
  const [searchname, setSearchName] = React.useState("");
  const [isclicked, setIsClicked] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const inputRef = React.useRef(null);



  let totalPages = Math.ceil(movieArray.length / 3);

  const startIndex = 3 * (pageNumber - 1);
  const endIndex = startIndex + 2;

  function handlePagination(pageNumber) {
    setPageNumber(pageNumber);
  }

  const handleClickDelete = (id) => {
    // alert("Do you want to delete it?")
    const arrayAfterDeletion = movieArray.filter((value, index) => {
      if (id === value.id) {
        return false
      }
      return true
    })
    setMovieArray(arrayAfterDeletion)
    console.log(movieArray)
  }

  const sortedData = (value) => {
    if (sorted === "asc") {
      const sorted = [...movieArray].sort((a, b) =>
        a[value] > b[value] ? 1 : -1
      )
      setMovieArray(sorted);
      setSorted("desc");
    }
    if (sorted === "desc") {
      const sorted = [...movieArray].sort((a, b) =>
        a[value] < b[value] ? 1 : -1
      )
      setMovieArray(sorted);
      setSorted("asc");
    }
  }

  const handleClickAddNew = () => {
    console.log("Button CLicked")
    alert("Add New Button is running is Running")

  }

  const handleClickEdit = () => {
    {
      console.log("Edit Button Clicked")
      alert("Edit is Running")
    }
    // <EditDialogue />
  }

  const editName = (index) => {
    // console.log("Edit is Running");
    const selectedItem = movieArray[index];
    setMovieArray(index);
    //additional for onfocus
    inputRef.current.focus();
  };



  React.useEffect(() => {
    if (selectedGenre === "All Movies") {
      setMovieArray(ArrayOfData)
      return
    }
    const tempArray = ArrayOfData.filter((value, index) => {
      console.log(value)
      if (value.Genre === selectedGenre) {
        return true;
      }
      else {

        console.log(value.Genre, " ", selectedGenre)
        return false
      }
    })
    setMovieArray(tempArray);
    console.log(tempArray)
  }, [selectedGenre])

  return (
    <>
      <div className='App'>
        <SideContainer
          genre={selectedGenre}
          setgenre={setSelectedGenre}
        />

        <div className="movies-data">
          <div>
            <p>Showing {movieArray.length} movies in the Database</p>
            <button onClick={() => handleClickAddNew()}>Add New</button>

            <input className='searchbar'
              placeholder='Search Movie Here'
              onChange={(event) => setSearchName(event.target.value)}
            />

            <table>
              <tr>
                <th onClick={() => sortedData("Title")}>Title</th>
                <th onClick={() => sortedData("Genre")}>Genre</th>
                <th onClick={() => sortedData("Stock")}>Stock</th>
                <th onClick={() => sortedData("Rate")}>Rate</th>
              </tr>
              {movieArray.filter((value, index) => {
                if (index >= startIndex && index <= endIndex) {
                  if (searchname === "") {
                    return value;
                  } else if (value.Title.includes(searchname)) {
                    return value;
                  }
                }
              })
                .map((value) => {
                  return (
                    <tr>
                      <td>{value.Title}</td>
                      <td>{value.Genre}</td>
                      <td>{value.Stock}</td>
                      <td>{value.Rate}</td>
                      <button onClick={() => handleClickDelete(value.id)}>Delete</button>
                      <button onClick={() => handleClickEdit(value.id)}>Edit</button>

                    </tr>
                  )
                })}
            </table>
            <Pagination totalPages={totalPages} handlePagination={handlePagination} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// {/* <!-- Trigger the modal with a button --> */ }
// <div className="del-button">
//   <button type="button" data-toggle="modal" data-target="#myModal">Delete</button>
//   <button type="button" data-toggle="modal" data-target="#myModal">Edit</button>
// </div>
// {/* <!-- Modal --> */ }
// {/* <div class="modal fade" id="myModal" role="dialog">
//                         <div class="modal-dialog">

//                           {/* <!-- Modal content--> */}
// <div class="modal-content">
//   <div class="modal-header">
//     <h4 class="modal-title">Please Confirm</h4>
//   </div>
//   <div class="modal-body">
//     <p>Are you sure you want to delete?</p>
//   </div>
//   <div class="modal-footer">
//     <div class="form-check">
//       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
//       <label class="form-check-label" for="flexCheckDefault">
//         Remember me
//       </label>
//       <button onClick={() => handleClickDelete(value.id)} type="button" class="btn btn-default" data-dismiss="modal">Confirm</button>
//     </div>
//   </div></div></div ></div > * /}