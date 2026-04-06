const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const closeFormBtn = document.getElementById("close-form-button");
const closeListBtn = document.getElementById("close-list-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");
const viewCategoryBtn = document.getElementById("view-category-button");
const categoryName = document.querySelector(".category-name");
const categoryOptions = document.getElementById("category-dropdown");
const categoryList = document.getElementById("category-list");
const name = document.getElementById("name");
const link = document.getElementById("url");

function getBookmarks() {
	return JSON.parse(localStorage.getItem("bookmarks")) || [];
}

function saveBookmarks(bookmarks) {
	localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function displayOrCloseForm() {
	 mainSection.classList.toggle("hidden");  
	 formSection.classList.toggle("hidden"); 
}

function displayOrHideCategory() {
	 mainSection.classList.toggle("hidden");  
	 bookmarkListSection.classList.toggle("hidden"); 
}

const reset = () => {
  name.value = "";
  link.value = "";
}

addBookmarkBtn.addEventListener("click", () => {
	categoryName.innerText = categoryOptions.value;
	displayOrCloseForm();
});

closeFormBtn.addEventListener("click", () => {
	displayOrCloseForm();
});

addBookmarkFormBtn.addEventListener("click", () => {
const bookmarks = getBookmarks();
bookmarks.push({
	name: name.value,
	category: categoryOptions.value,
	url: link.value
});
	saveBookmarks(bookmarks)
	reset();
	displayOrCloseForm();
});

viewCategoryBtn.addEventListener("click", () => {
  categoryName.innerText = categoryOptions.value;
	const bookmarks = getBookmarks();
	
  const filteredBookmarks = bookmarks.filter(
    bookmark => bookmark.category === categoryOptions.value
  );

  if (filteredBookmarks.length > 0) {
    categoryList.innerHTML = "";

    filteredBookmarks.forEach(({ name, category, url }) => {
      categoryList.innerHTML += `
        <label><a href="${url}">${name}</a>
					<input type="radio" id="${name}" value="${name}" name="savedBookmark">
        </label>				
      `;
    });

  } else {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  }

  displayOrHideCategory();
});

closeListBtn.addEventListener("click", () => {
	displayOrHideCategory();
});	

deleteBookmarkBtn.addEventListener("click", () => {
	
});