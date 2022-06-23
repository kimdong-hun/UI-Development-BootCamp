const searchModal = document.querySelector('.search-modal')
const searchButton = document.querySelector('.gnb-icon-button.is-search')
const searchModalCloseButton = searchModal.querySelector(
  '.search-modal-form .btn-ghost'
)

const searchModalHistory = searchModal.querySelector('.search-history')
const searchModalHistoryList = searchModalHistory.querySelector('ol')

const searchModalDeleteAllButton = searchModalHistory.querySelector(
  '.search-history-header button'
)
const searchModalDeleteButtonList =
  searchModalHistoryList.querySelectorAll('.delete-button')

function openSearchModal() {
  searchModal.classList.add('is-active')
}

searchButton.addEventListener('click', openSearchModal)

function closeSearchModal() {
  searchModal.classList.remove('is-active')
}

searchModalCloseButton.addEventListener('click', closeSearchModal)

function deleteAllSearchModalHistoryItems() {
  searchModalHistoryList.innerHTML = ''
}

searchModalDeleteAllButton.addEventListener(
  'click',
  deleteAllSearchModalHistoryItems
)

function deleteSearchModalHistoryItem() {
  const modalItemToDelete = this.parentNode
  searchModalHistoryList.removeChild(modalItemToDelete)
}

searchModalDeleteButtonList.forEach((button) => {
  button.addEventListener('click', deleteSearchModalHistoryItem)
})
