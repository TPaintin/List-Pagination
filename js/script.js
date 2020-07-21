/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
let studentList = document.querySelectorAll('.student-item');
const itemsPerPage = 10;
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
      - Keep in mind that with a list of 54 students, the last page 
         will only display four.
      - Remember that the first student has an index of 0.
      - Remember that a function `parameter` goes in the parens when 
         you initially define the function, and it acts as a variable 
         or a placeholder to represent the actual function `argument` 
         that will be passed into the parens later when you call or 
         "invoke" the function 
***/
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage);
   for (let i = 0; i < list.length; i ++) {
      if ( i >= startIndex && i < endIndex) {
         list.innerHTML = list[i];
      } else {
         list[i].style.display = 'none';
      }
   }
}

// showPage(studentList, 1);
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks(list) {
   let numOfPages = Math.floor(list.length / itemsPerPage); //1

   const paginationDiv = document.createElement('div'); //2
   paginationDiv.className = 'pagination'; //2
   document.querySelector('.page').appendChild(paginationDiv); //2

   const paginationUl = document.createElement('ul'); //3
   paginationDiv.appendChild(paginationUl); //3

   for (let i = 0; i < numOfPages; i ++) { //4
      let paginationLi = document.createElement('li'); //4
      paginationUl.appendChild(paginationLi); //4
      let paginationA = document.createElement('a'); //4
      paginationA.href = '#'; //4
      paginationA.textContent = i + 1; //4
      paginationLi.appendChild(paginationA); //4
   }
   
   
   const aTags = document.querySelectorAll('a');
   const active = document.getElementsByClassName('active');
   aTags[0].className = 'active';  
   

   for (let i = 0; i < aTags.length; i ++) { //4
      aTags[i].addEventListener('click', () => {
         active[0].classList.remove('active');
         aTags[i].className = 'active';
         let pageNum = i + 1;
         console.log(aTags[i].textContent);
         console.log(pageNum);
         showPage(studentList, pageNum);
      })

   }
   

// The function to show a page should be called, passing in as arguments, the global variable for the list items, and the page number that should be shown. The text content of the A element that was just clicked can be helpful here.




}

showPage(studentList, 1);
appendPageLinks(studentList);






// Remember to delete the comments that came with this file, and replace them with your own code comments.