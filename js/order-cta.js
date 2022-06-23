const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

const floatingOrderForm = document.querySelector('.floating-order-form')
const floatingOrderFormBookmarkButton = floatingOrderForm.querySelector(
  '.button-group .bookmark-button'
)

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark() {
  const bookmarkButtonIcon = orderCtaBookmarkButton.children[0]
  const floatingBookmarkButtonIcon = floatingOrderFormBookmarkButton.children[0]
  const countSpan = orderCtaBookmarkButton.children[1]

  const count = Number(countSpan.innerHTML.replaceAll(',', ''))

  let newCount = count
  if (
    orderCtaBookmarkButton.classList.contains('is-active') &&
    floatingOrderFormBookmarkButton.classList.contains('is-active')
  ) {
    bookmarkButtonIcon.setAttribute('class', 'ic-bookmark')
    floatingBookmarkButtonIcon.setAttribute('class', 'ic-bookmark')
    orderCtaBookmarkButton.classList.remove('is-active')
    floatingOrderFormBookmarkButton.classList.remove('is-active')
    newCount = newCount - 1
  } else {
    bookmarkButtonIcon.setAttribute('class', 'ic-bookmark-filled')
    floatingBookmarkButtonIcon.setAttribute('class', 'ic-bookmark-filled')
    orderCtaBookmarkButton.classList.add('is-active')
    floatingOrderFormBookmarkButton.classList.add('is-active')
    newCount = newCount + 1
  }

  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)

floatingOrderFormBookmarkButton.addEventListener(
  'click',
  toggleOrderCtaBookmark
)
